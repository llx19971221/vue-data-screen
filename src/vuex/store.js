import Vue from "vue";
import Vuex from "vuex";
import axios from "@a/detail.js";
import { Message } from "element-ui";
Vue.use(Vuex);

let preDate = new Date();
let nowDate = new Date();
preDate = `${preDate.getFullYear()}-${preDate.getMonth()}`;
nowDate = `${nowDate.getFullYear()}-${nowDate.getMonth() + 1}`;
let date = [preDate, nowDate];
let dateObj = {};
dateObj["StartDate"] = date[0];
dateObj["EndDate"] = date[1];
export default new Vuex.Store({
  state: {
    date: dateObj,
    lineOneData: {
      //销售
      leftData: {},
      rightData: []
    },
    pieOneData: {
      //收益
      leftData: {},
      rightData: []
    },
    pieTwoData: {
      //客流
      leftData: {},
      rightData: 0
    },
    lineTwoData: {
      //会员
      leftData: {},
      rightData: []
    },
    floorList: [], //楼层id获取
    nowFloorId: "", //当前楼层ID
    nowFloorName: "1", //当前楼层名字
    analysisLineData: [], //楼层销售分析左边数据
    analysisLineEchartsData: {
      passengerFlowNum: [],
      custSaleAmt: [],
      nonCustSaleAmt: [],
      yearMonthValue: []
    }, //楼层销售分析右边数据
    AllFloorData: [], //所有楼层信息
    analysisPieData: [], //业态销售比,业态收益比
    degreeType: "1",
    degreeColorArr: [], //颜色分配
    oneStoreData: []
    // analysisPieSaleData: [],
    // analysisPieEarningData: []
  },
  getters: {
    lineOneData: state => state.lineOneData,
    pieOneData: state => state.pieOneData,
    pieTwoData: state => state.pieTwoData,
    lineTwoData: state => state.lineTwoData,
    date: state => state.date,
    floorList: state => state.floorList,
    nowFloorId: state => state.nowFloorId,
    nowFloorName: state => state.nowFloorName,
    analysisLineData: state => state.analysisLineData,
    analysisLineEchartsData: state => state.analysisLineEchartsData,
    analysisPieData: state => state.analysisPieData,
    AllFloorData: state => state.AllFloorData,
    degreeColorArr: state => state.degreeColorArr, //颜色
    degreeType: state => state.degreeType, //销售还是收益
    oneStoreData: state => state.oneStoreData //单个店铺信息
  },
  actions: {
    //不要id的数据
    async getAllData({ state, getters }) {
      let obj = getters.date;
      try {
        let reslineOneLeft = await axios.getLineDataOne(obj);
        let reslineOneRight = await axios.getLineEchartData(obj);
        let resPieOneLeft = await axios.getPieDataOne(obj);
        let resPieOneRight = await axios.getPieEchartData(obj);
        let resPieTwoAll = await axios.getPieTwoAll(obj);
        let resLineTwoLeft = await axios.getLineDataTwo(obj);
        let resLineTwoRight = await axios.getLineTwoEchartData(obj);
        let resDegreeList = await axios.getDegreeList({
          DegreeType: state.degreeType
        });

        if (
          reslineOneLeft.code === 1 &&
          reslineOneRight.code === 1 &&
          resPieOneLeft.code === 1 &&
          resPieOneRight.code === 1 &&
          resPieTwoAll.code === 1 &&
          resLineTwoLeft.code === 1 &&
          resLineTwoRight.code === 1 &&
          resDegreeList.code === 1
        ) {
          state.pieOneData.leftData = resPieOneLeft.data;
          state.pieOneData.rightData = resPieOneRight.data;

          state.lineOneData.leftData = reslineOneLeft.data;
          state.lineOneData.rightData = reslineOneRight.data;

          state.pieTwoData.leftData = resPieTwoAll.data;
          state.pieTwoData.rightData = resPieTwoAll.data.PaidPercent;

          state.lineTwoData.leftData = resLineTwoLeft.data;
          state.lineTwoData.rightData = resLineTwoRight.data;

          for (let value of Object.values(resDegreeList.data)) {
            value["trigger"] = true;
          }

          state.degreeColorArr = resDegreeList.data;
          return Promise.resolve({
            flag: true
          });
        } else {
          // console.log(reslineOneLeft, reslineOneRight, resPieTwoAll);
          Message.error("请求出错！");
          return Promise.resolve({
            flag: false
          });
        }
      } catch (e) {
        console.log("请求出错", e);
        return Promise.resolve({
          flag: false
        });
      }
    },

    async getFloorList({ state }) {
      try {
        let reFloorList = await axios.getFloorInfoList();
        if (reFloorList.code === 1) {
          state.floorList = reFloorList.data;
          state.nowFloorId = reFloorList.data[2].FloorId;
          return Promise.resolve({
            flag: true
          });
        } else {
          // console.log(reslineOneLeft, reslineOneRight, resPieTwoAll);
          Message.error("楼层获取出错！");
          return Promise.resolve({
            flag: false
          });
        }
      } catch (e) {
        Message.error("请求出错！");
        return Promise.resolve({
          flag: false
        });
      }
    },
    //需要楼层id的楼层数据
    async getFloorData({ state }) {
      let obj = state.date;
      obj["FloorId"] = state.nowFloorId;
      try {
        let resAnalysisLineData = await axios.getFloorSaleEarnByFloorID(obj); //楼层销售分析左边数据
        let resGetFloorTrendByFloorID = await axios.getFloorTrendByFloorID(obj); //楼层销售分析右边数据
        let resGetStoreEarningByFloorID = null; //收益数据业绩
        let resGetStoreSaleByFloorID = null; //销售数据业绩
        if (state.FloorName !== "w" || state.FloorName !== "W") {
          if (state.degreeType === "1") {
            resGetStoreSaleByFloorID = await axios.getStoreSaleByFloorID(obj);
          } else {
            resGetStoreEarningByFloorID = await axios.getStoreEarningByFloorID(
              obj
            ); //按楼层查询商铺收益数据业绩
          }
        }

        let resGetOperationSalePercentByFloorID = await axios.getOperationSalePercentByFloorID(
          obj
        ); //业态销售比
        let resGetOperationEarningPercentByFloorID = await axios.getOperationEarningPercentByFloorID(
          obj
        ); //业态收益比
        console.log(resGetStoreEarningByFloorID, resGetStoreSaleByFloorID);
        if (
          (resAnalysisLineData.code === 1 &&
            resGetFloorTrendByFloorID.code === 1 &&
            resGetOperationSalePercentByFloorID.code === 1 &&
            resGetOperationEarningPercentByFloorID.code === 1 &&
            resGetStoreEarningByFloorID &&
            resGetStoreEarningByFloorID.code === 1) ||
          (resAnalysisLineData.code === 1 &&
            resGetFloorTrendByFloorID.code === 1 &&
            resGetOperationSalePercentByFloorID.code === 1 &&
            resGetOperationEarningPercentByFloorID.code === 1 &&
            resGetStoreSaleByFloorID &&
            resGetStoreSaleByFloorID.code === 1)
        ) {
          // console.log(
          //   resGetOperationSalePercentByFloorID.data,
          //   resGetOperationEarningPercentByFloorID.data
          // );
          let storeObj = {};
          if (resGetStoreEarningByFloorID !== null) {
            for (let value of Object.values(resGetStoreEarningByFloorID.data)) {
              storeObj[value.BIStoreLocationNum] = value;
            }
          } else {
            for (let value of Object.values(resGetStoreSaleByFloorID.data)) {
              storeObj[value.BIStoreLocationNum] = value;
            }
          }

          state.AllFloorData = storeObj;
          state.analysisLineData = resAnalysisLineData.data;

          /** -------------------------------------------------*/
          state.analysisLineEchartsData = {
            passengerFlowNum: [],
            custSaleAmt: [],
            nonCustSaleAmt: [],
            yearMonthValue: []
          }; //先重置，再赋值
          resGetFloorTrendByFloorID.data.forEach(e => {
            state.analysisLineEchartsData.passengerFlowNum.push(
              e.PassengerFlowNum
            );
            state.analysisLineEchartsData.yearMonthValue.push(e.YearMonthValue);
            state.analysisLineEchartsData.custSaleAmt.push(e.CustSaleAmt);
            state.analysisLineEchartsData.nonCustSaleAmt.push(e.NonCustSaleAmt);
          });
          /** -------------------------------------------------*/
          let analysisPieData = []; //归纳在一起
          let analysisPieSale = [];
          let analysisPieEarning = [];
          resGetOperationSalePercentByFloorID.data.forEach(e => {
            let obj = {};
            obj["name"] = e.OperationTypeName;
            obj["value"] = e.SaleAmt;
            analysisPieSale.push(obj);
          });
          resGetOperationEarningPercentByFloorID.data.forEach(e => {
            let obj = {};
            obj["name"] = e.OperationTypeName;
            obj["value"] = e.NetChargeAmount;
            analysisPieEarning.push(obj);
          });
          analysisPieData.push(analysisPieSale);
          analysisPieData.push(analysisPieEarning);
          state.analysisPieData = analysisPieData;

          return Promise.resolve({
            flag: true
          });
        } else {
          Message.error("请求出错！");
          return Promise.resolve({
            flag: false
          });
        }
      } catch (e) {
        Message.error("请求错误。");
        return Promise.resolve({
          flag: false
        });
      }
    },
    // async getStoreEarningByFloorID({ state }, obj)
    //改变收益和销售
    async changeDegree({ state }) {
      let obj = state.date;
      obj["FloorId"] = state.nowFloorId;
      try {
        let resGetStoreEarningByFloorID = null; //收益数据业绩
        let resGetStoreSaleByFloorID = null; //销售数据业绩
        let resDegreeList = await axios.getDegreeList({
          DegreeType: state.degreeType
        });
        if (state.FloorName !== "w" || state.FloorName !== "W") {
          if (state.degreeType === "1") {
            resGetStoreSaleByFloorID = await axios.getStoreSaleByFloorID(obj);
          } else {
            resGetStoreEarningByFloorID = await axios.getStoreEarningByFloorID(
              obj
            ); //按楼层查询商铺收益数据业绩
          }
        }
        if (
          (resGetStoreSaleByFloorID &&
            resGetStoreSaleByFloorID.code === 1 &&
            resDegreeList.code === 1) ||
          (resGetStoreEarningByFloorID &&
            resGetStoreEarningByFloorID.code === 1 &&
            resDegreeList.code === 1)
        ) {
          for (let value of Object.values(resDegreeList.data)) {
            value["trigger"] = true;
          }

          state.degreeColorArr = resDegreeList.data;
          let storeObj = {};
          if (resGetStoreEarningByFloorID !== null) {
            for (let value of Object.values(resGetStoreEarningByFloorID.data)) {
              storeObj[value.BIStoreLocationNum] = value;
            }
          } else {
            for (let value of Object.values(resGetStoreSaleByFloorID.data)) {
              storeObj[value.BIStoreLocationNum] = value;
            }
          }

          state.AllFloorData = storeObj;

          return Promise.resolve({
            flag: true
          });
        } else {
          Message.error("请求出错!");
          return Promise.resolve({
            flag: false
          });
        }
      } catch (e) {
        Message.error("请求出错!");
        return Promise.resolve({
          flag: false
        });
      }
    },

    async getOneStoreInfo({ state }, storeId) {
      try {
        let totalObj = { StoreID: storeId, ...state.date };
        let getStoreInfoByMonthCondition = await axios.getStoreInfoByMonthCondition(
          totalObj
        );
        let getStoreCircleSequentialInfoByMonthCondition = await axios.getStoreCircleSequentialInfoByMonthCondition(
          totalObj
        );
        let getStoreSaleSequentialInfoByMonthCondition = await axios.getStoreSaleSequentialInfoByMonthCondition(
          totalObj
        );
        let getStoreSequentialInfoByMonthCondition = await axios.getStoreSequentialInfoByMonthCondition(
          totalObj
        );

        if (
          getStoreInfoByMonthCondition.code === 1 &&
          getStoreCircleSequentialInfoByMonthCondition.code === 1 &&
          getStoreSaleSequentialInfoByMonthCondition.code === 1 &&
          getStoreSequentialInfoByMonthCondition.code === 1
        ) {
          state.oneStoreData = [
            getStoreInfoByMonthCondition.data,
            getStoreCircleSequentialInfoByMonthCondition.data,
            getStoreSaleSequentialInfoByMonthCondition.data,
            getStoreSequentialInfoByMonthCondition.data
          ];
          console.log(state.oneStoreData);
          return Promise.resolve(true);
        } else {
          Message.error("请求店铺信息错误");
          return Promise.resolve(false);
        }
      } catch (e) {
        Message.error("请求错误(店铺信息)");
        return Promise.resolve(false);
      }
    }
  },
  mutations: {
    SET_DATE(state, date) {
      //设置时间
      console.log(date);
      state.date = date;
    },
    SET_FLOOR_ID_NAME(state, item) {
      //设置楼层ID
      state.nowFloorId = item.FloorId;
      state.nowFloorName = item.FloorName;
    },
    SET_DEGREE_TYPE(state, degreeType) {
      //设置销售还是收益数据类型
      state.degreeType = degreeType;
    }
  }
});
