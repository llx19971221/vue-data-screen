<template>
    <div class="analysis-line-wrap">
        <my-degree-title title="楼层销售分析" />
        <!-- <h3 class="title">楼层销售分析</h3> -->
        <div class="analysis-line">
            <div class="analysis-line-left">
                <ul class="left-analysis-list">
                    <li  class="analysis-list-item">
                        <h4 class="title">综合排名：</h4>
                        <p class="rank">NO.{{analysisLineData.SortIndex}}</p>
                    </li>
                    <li class="analysis-list-item">
                        <h4 class="title">销售坪效：</h4>
                        <p style="color: rgb(15, 236, 242);" class="msg">{{analysisLineData.SalePercentEveryArea}}%</p>
                    </li>
                    <li class="analysis-list-item">
                        <h4 class="title">收益坪效：</h4>
                        <p style="color: rgb(15, 236, 242);" class="msg">{{analysisLineData.EarnPercentEveryArea}}%</p>
                    </li>
                    <li class="analysis-list-item">
                        <h4 class="title">主力店：</h4>
                        <p class="msg">{{analysisLineData.MainOperationTypeStoreName}}</p>
                    </li>
                    <li class="analysis-list-item">
                        <h4 class="title">业态：</h4>
                        <p class="msg">{{analysisLineData.OperationTypeName}}</p>
                    </li>
                </ul>
            </div>
             <v-chart :autoresize=true :options="options"/>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import DegreeTitle from "@c/DegreeTitle.vue";
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
export default {
    name: "dataScreenLineAnalysis",
    components: {
        'my-degree-title': DegreeTitle
    },
    data() {
        return {
            options: {
                color: ['rgb(255,129,96)', 'rgb(255,218,109)', 'rgb(15,236,242)'],
                legend: {
                    show: true,
                    top: '4',
                    right: "0",
                    data: ['客流', '会员销售', '非会员销售'],
                    textStyle: {
                        color: "#fff"
                    },
                    icon: "rect",
                    itemWidth: 8,
                    itemHeight: 8
                },
                textStyle: {
                    fontSize: 11
                },
                grid: {
                    top: "20%",
                    left: "10%",
                    right: "10%",
                    bottom: "10%"
                },
                tooltip: {
                    show: true,
                    trigger: "axis",
                    // backgroundColor: "rgba(255,255,255,.7)",
                },
                xAxis: {
                    type: "category",
                    data: [],
                    axisLine: {
                        lineStyle: {
                            color: "#fff"
                        }
                    },
                    boundaryGap: true,
                    axisTick: {
                        alignWithLabel: true,
                    },
                    axisLabel: {
                        color: "#fff",
                        align: "center",
                        formatter: function(value){
                            let date = value.split("-");
                            return date[1] + "." + date[2];
                        }
                    }
                },
                yAxis: [{
                    name: "金额（万元）",
                    type: "value",
                    axisLine: {
                        lineStyle: {
                            color: "#fff"
                        }
                    },
                    nameGap: 7,
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        color: "#fff",
                        fontSize: 10
                    }
                },{
                    name: "客流（人）",
                    type: "value",
                    nameGap: 7,
                    axisLine: {
                        lineStyle: {
                            color: "#fff"
                        }
                    },
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        color: "#fff",
                        fontSize: 10
                    }
                }],
                series: [{
                    name: "客流",
                    type: "line",
                    smooth: true,
                    symbol: 'none',
                    data: []
                },{
                    name: "会员销售",
                    type: "bar",
                    stack: 1,
                    // smooth: true,
                    // symbol: 'none',
                    data: [],
                    barCategoryGap: '40%'
                },{
                    name: "非会员销售",
                    type: "bar",
                    yAxisIndex: 1,
                    stack: 1,
                    // smooth: true,
                    // symbol: 'none',
                    data: [],
                    barCategoryGap: '40%'
                }]
            }
        }
    },
    watch: {
        'data': {
            deep: true,
            handler: function(newVal, oldVal){
                this.options.xAxis.data = newVal.yearMonthValue;
                this.options['series'][0]['data'] = newVal.nonCustSaleAmt;
                this.options['series'][1]['data'] = newVal.custSaleAmt;
                this.options['series'][2]['data'] = newVal.nonCustSaleAmt;
            },
            immediate: true
        }
    },
    // mounted() {
    //     this.options.xAxis.data = this.data.yearMonthValue;
    //             this.options['series'][0]['data'] = this.data.nonCustSaleAmt;
    //             this.options['series'][1]['data'] = this.data.custSaleAmt;
    //             this.options['series'][2]['data'] = this.data.nonCustSaleAmt;
    // },
    computed: {
        ...mapGetters({
            analysisLineData: "analysisLineData",
        })
    },
    props: ['data']
}
</script>
<style lang="scss" scoped>
    .analysis-line {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .analysis-line-left {
        flex: 1;
        height: 100%;
        padding: 20px 0 20px 30px;
        box-sizing: border-box;
    }
    .left-analysis-list {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        height: 100%;
    }
    .analysis-list-item {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        h4.title {
            flex-shrink: 0;
        }
        &:nth-child(1) h4.title {
            align-self: flex-end;
        }
        h4.title,
        .msg {
            color: #fff;
            font-size: 16px;
        }
        .rank {
            color: rgb(255,129,96);
            font-size: 24px;
            line-height: 1;
        }
        .msg {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            white-space: normal;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-all;
        }
    }
    .echarts {
        width: 70%;
        height: 100%;
    }
</style>