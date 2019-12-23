<template>
    <header 
    v-loading.fullscreen="loading"
    element-loading-text="正在加载可视化图层"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 1)" 
    class='data-screen-head'>
        <div class="date-picker">
            <span class='picker-title'>时间</span>
            <el-date-picker
            v-model="dateShow"
            :clearable="false"
            type="monthrange"
            range-separator="至"
            :picker-options="pickerOptions"
            :unlink-panels="true"
            @change="changeDate"
            prefix-icon="e"
            value-format='yyyy-MM'
            popper-class="date-down">
            </el-date-picker>
        </div>
        <v-chart :autoresize=true :options="option"/>
        <button class="head-exchange">切换交易屏</button>
        <div class="now-time-box">
             <!-- <digital-clock :blink="true" /> -->
        </div>
    </header>
</template>
<script>
import 'echarts/lib/component/title';
import { mapActions, mapGetters } from "vuex";
import { DatePicker } from "element-ui";
export default {
    name: "dataScreenTitle",
    inject: ['reload'],
    mounted(){
        this.dateShow = [this.date.StartDate, this.date.EndDate];
    },
    data() {
        return {
            dateShow: '',
            loading: false,
            option: {
                title: {
                    text: '数据屏',
                    show: true,
                    textStyle: {
                        color: "rgb(0,194,255)",
                        fontSize: '27',
                        fontWeight: "lighter"
                    },
                    top: 30,
                    x: "center",
                    
                    height: 200,
                    borderColor: "rgb(0,194,255)",
                    borderWidth: 1,
                    padding: [15,50]
                }
            },
            pickerOptions: {
                shortcuts: [{
                    text: '本月',
                    onClick(picker) {
                        picker.$emit('pick', [new Date(), new Date()]);
                    }
                },
                {
                    text: '上月',
                    onClick(picker) {
                        let nowDate = new Date();
                        nowDate.setMonth(nowDate.getMonth() - 1);
                        picker.$emit('pick', [nowDate, nowDate]);
                    }
                },
                {
                    text: '今年',
                    onClick(picker) {
                        let nowDate = new Date();
                        let twoDate = new Date();
                        nowDate.setMonth(0);
                        twoDate.setFullYear(twoDate.getFullYear() + 1);
                        twoDate.setMonth(-1);
                        picker.$emit('pick', [nowDate, twoDate]);
                    }
                },
                {
                    text: '去年',
                    onClick(picker) {
                        let nowDate = new Date();
                        let twoDate = new Date();
                        nowDate.setFullYear(nowDate.getFullYear() - 1);
                        nowDate.setMonth(0);
                        twoDate.setFullYear(twoDate.getFullYear());
                        twoDate.setMonth(-1);
                        picker.$emit('pick', [nowDate,twoDate]);
                    }
                }]
            }
        }
    },
    computed: {
        ...mapGetters({
            nowFloorId: "nowFloorId",
            date: "date"
        })
    },
    methods: {
        ...mapActions({
            getAllData: "getAllData",
            getFloorData: "getFloorData"
        }),
        changeDate(e){
            let obj = {};
            obj['StartDate'] = e[0];
            obj['EndDate'] = e[1];
            // console.log(obj);
            this.loading = true;
            this.$store.commit("SET_DATE",obj);
            this.getAllData().then(e=>{
                if(e.flag){
                    this.getFloorData().then(e=>{
                        if(e.flag){ 
                            this.loading = false;
                            this.reload();
                        }
                    })
                    
                }
            });
        }
    },
    components: {
        [DatePicker.name]: DatePicker
    }
}
</script>
<style lang="scss">
    .data-screen-head {
        position: relative;
        height: 120px;
        /**display: flex;
        justify-content: center;
        align-items: center;
        .title {
            font-size: 27px;
            font-weight: lighter;
            width: 230px;
            line-height: 50px;
            text-align: center;
            border: 1px solid rgb(0,194,255);
            color: rgb(0,194,255);
            margin: 0;
        }*/
        .echarts {
            width: 100%;
            height: 100%;
        }
        .date-picker,
        .head-exchange {
            position: absolute;
            z-index: 10;
        }
        .date-picker {
            top: 50%;
            left: 50px;
            transform: translateY(-50%);
            .picker-title {
                color: rgb(0,194,255);
                font-size: 16px;
                margin-right: 10px;
            }
        }
        .head-exchange {
            top: 50%;
            left: 50%;
            transform: translate(300px, -50%);
            background-color: rgba(255,255,255,.1);
            color: rgb(0,194,255);
            font-size: 16px;
            padding: 10px 30px;
            border-radius: 5px;
            border: 1px solid rgb(0,194,255);
            &:hover {
                background-color: rgba(255,255,255,.3);
            }
        }
        .el-range-editor.el-input__inner {
            background-color: rgba(255,255,255,.1);
            border-color: rgb(0,194,255);
        }
        .el-range-editor .el-range-input,
        .el-range-separator{
            background-color: transparent;
            font-size: 20px;
            color: rgb(0,194,255);
        }
    }
    .date-down {
        background-color: rgb(29,32,89);
        border: none;
        .el-picker-panel__sidebar {
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-around;
            align-items: center;
            background-color: transparent!important;
            border-right: 1px solid rgba(255,255,255,.2);
            .el-picker-panel__shortcut {
                color: #fff;
                font-size: 18px;
                text-align: center;
            }
        }
        .el-date-range-picker__content.is-left {
            border-right: 1px solid rgba(255,255,255,.2);
        }
        .popper__arrow{
            border-bottom-color: transparent!important;
            &::after {
                border-bottom-color: rgb(29,32,89)!important;
            }
        }
        .el-picker-panel {
            color: #fff;
        }
        .el-month-table td .cell {
            color: #fff;
        }
        .el-month-table td.in-range div, .el-month-table td.in-range div:hover {
            background-color: rgba(255,255,255,.2);
        }
        .el-date-range-picker__content .el-date-range-picker__header div {
            color: #fff;
        }
        .el-picker-panel__icon-btn {
            color: #fff;
            &.is-disabled {
                color: gray;
            }
        }
        // rgb(242, 246, 252)
    }
</style>