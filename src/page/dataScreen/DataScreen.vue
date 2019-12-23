<template>
    <div v-loading="loading" 
    element-loading-text="正在加载可视化图层"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgb(0, 0, 0)"
    :style="'width: '+100+'%;'+'height:'+100+'%;'" 
    class="data-screen-wrap">
        <my-title v-if="reloadTopValue"/>
        <main class="data-screen-main">
            <div v-if="reloadTopValue" class="main-top">
                <my-four-line-one :data="lineOneData" />
                <my-pie-one :data="pieOneData" />
                <my-pie-two :data="pieTwoData" />
                <my-fout-line-two :data="lineTwoData"/>
            </div>
            <div v-if="reloadBottomValue" class="main-bottom">
                <my-floor />
                <div class="bottom-left">
                    <my-line-analysis :data="analysisLineEchartsData"/>
                    <my-pie-analysis :data="analysisPieData"/>
                </div>
            </div>
        </main>
    </div>  
</template>
<script>
import 'echarts/lib/chart/line';
import DataScreenTitle from "./children/DataScreenTitle.vue";
import DataScreenFourLine from "./children/DataScreenFourLine.vue";
import DataScreenFourLineTwo from "./children/DataScreenFourLineTwo.vue";
import DataScreenFourCircleOne from "./children/DataScreenFourCircleOne.vue";
import DataScreenFourCircleTwo from "./children/DataScreenFourCircleTwo.vue";
import DataScreenLineAnalysis from "./children/DataScreenLineAnalysis.vue";
import DataScreenPieAnalysis from "./children/DataScreenPieAnalysis.vue";
import DataScreenFloor from "./children/DataScreenFloor.vue";
import { mapActions, mapGetters } from 'vuex';
export default {
    name: "dataScreen",
    provide(){
        return {
            reload: this.reload
        }
    },
    data () {
        return {
            width: window.outerWidth,
            height: window.innerHeight,
            reloadTopValue: false,
            reloadBottomValue: false,
            loading: true
        }
    },
    created(){
        this.getAllData().then(e=>{
            if(e.flag){
                this.getFloorList().then(e=>{
                    if(e.flag){
                        this.getFloorData().then(e=>{
                            if(e.flag){ 
                                this.reloadTopValue = true;
                                this.reloadBottomValue = true;
                                this.loading = false;
                            }
                        });
                    }
                })
                
            }
        });
    },
    computed: {
        ...mapGetters({
            lineOneData: "lineOneData",
            pieOneData: "pieOneData",
            pieTwoData: "pieTwoData",
            lineTwoData: "lineTwoData",
            analysisLineEchartsData: "analysisLineEchartsData",
            analysisPieData: "analysisPieData",
            date: "date"
        })
    },
    methods: {
        ...mapActions({
            getAllData: "getAllData",
            getFloorData: "getFloorData",
            getFloorList: "getFloorList"
        }),
        reload(){
            this.reloadTopValue = false;
            this.$nextTick(()=>{
                this.reloadTopValue = true;
            })
        }
    },
    components: {
        'my-title': DataScreenTitle,
        'my-four-line-one': DataScreenFourLine,
        'my-fout-line-two': DataScreenFourLineTwo,
        'my-pie-one': DataScreenFourCircleOne,
        'my-pie-two': DataScreenFourCircleTwo,
        'my-line-analysis': DataScreenLineAnalysis,
        'my-pie-analysis': DataScreenPieAnalysis,
        'my-floor': DataScreenFloor
    }
}
</script>
<style lang="scss">
    .data-screen-wrap {
        height: 100%;
        padding: 0 10px;
        box-sizing: border-box;
        background-color:rgb(12,0,40);     
    }
    .data-screen-main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: calc(100% - 120px);
    }
    .main-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 230px;
        > div {
            box-sizing: border-box;
            padding: 10px;
            border-bottom: 1px solid rgb(0,194,255);
            background-color: rgb(19,21,62);
        }
        .left-msg-wrap {
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex: 1;
            height: 100%;
            padding: 12px 0px 12px 20px;
            box-sizing: border-box;
            overflow: hidden;
            .left-msg-list {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                flex: 1;
            }
        }
        .four-line-wrap {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            width: 27%;
            height: 100%;
            .echarts {
                width: 60%;
                height: 100%;
            }
        }
        .data-screen-pie {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            width: 21%;
            height: 100%;
            .echarts {
                width: 45%;
                height: 100%;
            }
        }
    }

    /**四个图表 */
    .main-bottom {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        flex: 1;
        padding: 20px 0;
        .data-screen-floor {
            position: relative;
            width: 55%;
            height: 100%;
            // border-right: 1px solid blue;
            box-sizing: border-box;
            overflow: hidden;
        }
        .bottom-left {
            width: 45%;
            height: 100%;
            box-sizing: border-box;
            > div {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                padding: 0px 0px 0px 30px;
                // h3.title {
                //     position: relative;
                //     color: #fff;
                //     font-size: 16px;
                //     font-weight: bold;
                //     padding: 5px 40px 4px 20px;
                //     background-image: linear-gradient(to right, rgb(40,20,99) 40%, rgb(30,47,103) 60%);
                //     &::after {
                //         content: "";
                //         position: absolute;
                //         bottom: 0;
                //         right: -15px;
                //         width: 20px;
                //         height: 2px;
                //         background-color: rgb(30,47,103);
                //     }
                //     &::before {
                //         content: "";
                //         position: absolute;
                //         right: 0;
                //         top: 0;
                //         display: block;
                //         width: 0;
                //         height: 0;
                //         border: 15px solid transparent;
                //         border-top-color: #0c0028;
                //         border-right-color: #0c0028;
                //         border-bottom-color: rgb(30,47,103);
                //         border-left-color: rgb(30,47,103);
                //         background-color: #0c0028;
                //     }
                // }
                > div {
                    width: 100%;
                    flex: 1;
                    background-color: #13153e;
                }
            }
            .analysis-line-wrap {
                height: 57%;
                // border-bottom: 1px solid red;
                .analysis-line {
                    margin-bottom: 20px;
                }
            }
            .analysis-pie-wrap {
                height: 43%;
            }
        }
    }
</style>