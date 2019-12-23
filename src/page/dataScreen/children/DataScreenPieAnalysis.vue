<template>
    <div class="analysis-pie-wrap">
        <my-degree-title title="业态数据分析" />
        <!-- <h3 class="title">业态数据分析</h3> -->
        <div class="analysis-pie">
            <v-chart :autoresize=true :options="options"></v-chart>
        </div>
    </div>
</template>
<script>
import "echarts/lib/chart/pie.js";
import DegreeTitle from "@c/DegreeTitle.vue";
export default {
    name: "dataScreenPieAnalysis",
    components: {
        'my-degree-title': DegreeTitle
    },
    props: ['data'],
    watch: {
        'data': {
            deep: true,
            handler: function(newVal, oldVal){
                if(newVal[0].length > 1) {
                    this.options.series[0].itemStyle.borderWidth = 5;
                }else {
                     this.options.series[0].itemStyle.borderWidth = 0;
                }
                this.options.series[0].data = newVal[0];
                if(newVal[1].length > 1) {
                     this.options.series[1].itemStyle.borderWidth = 5;
                }else {
                     this.options.series[1].itemStyle.borderWidth = 0;
                }
                this.options.series[1].data = newVal[1];
            },
            immediate: true
        }
    },
    // mounted() {
    //     if(this.data[0].length > 1) {
    //         this.options.series[0].itemStyle.borderWidth = 5;
    //     }else {
    //             this.options.series[0].itemStyle.borderWidth = 0;
    //     }
    //     this.options.series[0].data = this.data[0];
    //     if(this.data[1].length > 1) {
    //             this.options.series[1].itemStyle.borderWidth = 5;
    //     }else {
    //             this.options.series[1].itemStyle.borderWidth = 0;
    //     }
    //     this.options.series[1].data = this.data[1];
    // },
    data() {
        return {
            options: {
                color: ['rgb(43,223,160)', 'rgb(255,218,109)', 'rgb(0,165,247)', 'rgb(15,236,242)'],
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c}元"
                },
                title: [
                    {
                        text: "业态销售比",
                        textStyle: {
                            color: "#fff",
                            fontSize: 16
                        },
                        left: "25%",
                        top: "8%",
                        textAlign: "center"
                    },
                    {
                        text: "业态收益比",
                        textStyle: {
                            color: "#fff",
                            fontSize: 16
                        },
                        left: "75%",
                        top: "8%",
                        textAlign: "center"
                    }
                ],
                series: [
                    {
                        type: "pie",
                        name: "业态销售比",
                        radius: "60%",
                        center: ['25%', '60%'],
                        data: [],
                        minAngle: 20,
                        // roseType: 'area',
                        itemStyle: {
                            borderWidth: 0,
                            borderColor: '#13153e'
                        },
                        label:{
                            formatter: function(params){
                                return '{b|'+params.name+'} {d|'+params.percent+'}%';
                            },
                            fontSize: 11,
                            height: 60,
                            align: 'center',
                            // lineHeight: 40,
                            padding: [0,-40],
                            rich: {
                                b: {
                                    // padding: [0,0,5,0],
                                    lineHeight: 40,
                                },
                                d: {
                                    lineHeight: 40,
                                }
                            }
                        },
                        labelLine: {
                            length: 20,
                            length2: 50
                        }
                    },
                    {
                        type: "pie",
                        name: "业态收益比",
                        radius: "60%",
                        center: ['75%', '60%'],
                        data: [],
                        minAngle: 20,
                        label:{
                            formatter: function(params){
                                return '{b|'+params.name+'} {d|'+params.percent+'}%';
                            },
                            fontSize: 11,
                            height: 60,
                            align: 'center',
                            // lineHeight: 40,
                            padding: [0,-40],
                            rich: {
                                b: {
                                    // padding: [0,0,5,0],
                                    lineHeight: 40,
                                },
                                d: {
                                    lineHeight: 40,
                                }
                            }
                        },
                        labelLine: {
                            length2: 50
                        },
                        itemStyle: {
                            borderWidth: 0,
                            borderColor: '#13153e'
                        }
                    }
                ],
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .echarts {
        width: 100%;
        height: 100%;
    }
</style>