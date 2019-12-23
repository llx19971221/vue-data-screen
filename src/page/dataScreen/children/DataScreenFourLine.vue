<template>
    <div class="four-line-wrap">
        <!-- "<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#c23531;"></span>" -->
        <left-msg :label="label" :data="data.leftData" :keys='keys'/>
        <v-chart :autoresize=true :options="options"/>
    </div>
</template>
<script>
import 'echarts/lib/chart/line';
import LeftMsg from "@c/LeftMsg.vue";
export default {
    name: "dataScreenFourLine",
    // watch: {
    //     'data': {
    //         deep: true,
    //         handler:function(newVal,oldVal) {
    //             this.options.series[0].data = this.data.rightData.map((e,i)=>{return (e.TotalSaleAmt/10000).toFixed(4)});
    //             this.options.xAxis[0].data =  this.data.rightData.map((e,i)=>{
    //                 let dateStr = e.DateValue.split('-');
    //                 return dateStr[1] + '.' + parseInt(dateStr[2]);
    //             }); 
    //         },      
    //         immediate: true
    //     }
    // },
    mounted() {
        this.options.series[0].data = this.data.rightData.map((e,i)=>{return (e.TotalSaleAmt/10000).toFixed(4)});
        this.options.xAxis[0].data =  this.data.rightData.map((e,i)=>{
            let dateStr = e.DateValue.split('-');
            return dateStr[1] + '.' + parseInt(dateStr[2]);
        });
    },
    components: {
        'left-msg': LeftMsg
    },
    props: ['data'],
    data(){
        return {
            label: {
                title: "销售",
                subTitleOne: ['环比', '%'],
                subTitleTwo: ['客单价', '元'],
                subTitleThree: ['订单量', '单']
            },
            keys: ['TotalSaleAmt', 'SequentialValue', 'PerCustomerPrice', 'OrderCount'],
            options: {
                // backgroundColor: '#00265f',
                color: 'rgb(15,235,242)',
                tooltip: {
                    trigger: 'axis',
                    // alwaysShowContent: true,
                    backgroundColor: "rgba(255,255,255,.6)",
                    textStyle: {
                        color: "#000",
                    },
                    axisPointer: {
                        type: "line",
                        axis: 'x',
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    formatter: function(params){
                        return params[0].axisValue + "\n" + params[0].value + "万";
                    }
                },
                legend: {
                    icon: "rect",
                    itemWidth: 8,
                    itemHeight: 8,
                    textStyle: {
                        color: '#fff'
                    },
                    right: 0,
                    data: ['销售额'],
                },
                grid: {
                    
                    left: '0',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#fff',
                            fontSize: 10,
                            align: 'center'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    data: []
                }],
                yAxis: [{
                    type: 'value',
                    name: "万元",
                    axisTick: {
                        show: false
                    },
                    position: "left",
                    nameLocation: "end",
                    nameGap: 6,
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    // min: 0,
                    max: function(value){
                        return (parseInt(value.max)+10);
                    },
                    axisLabel: {
                        // margin: 10,
                        textStyle: {
                            fontSize: 10,
                            color: "#fff"
                        }
                    },
                    splitLine: {
                        show: false
                    }
                }],
                series: [{
                    name: '销售额',
                    type: 'line',
                    smooth: true,
                    symbol: 'none',
                    lineStyle: {
                        width: 0
                    },
                    areaStyle: {
                        normal: {
                            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0.3,
                                color: '#00a5f7'
                            }, {
                                offset: 0.7,
                                color: 'rgb(15, 236, 242)'
                            }], false),
                            // shadowColor: 'rgba(0, 0, 0, 0.1)',
                            // shadowBlur: 10
                        }
                    },
                    hoverAnimation: false,
                    showAllSymbol: false,
                    data: []
                }],
            }
        }
    }
}
</script>
<style lang="scss" scoped>
 
</style>