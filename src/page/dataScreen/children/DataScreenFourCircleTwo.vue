<template>
    <div class="data-screen-pie">
        <left-msg :type=3 :label="label" :data="data.leftData" :keys='keys'/>
        <v-chart :autoresize=true :options="options"></v-chart>
    </div>
</template>
<script>
import 'echarts/lib/chart/pie';
import liquidFill from "echarts-liquidfill";
import LeftMsg from "@c/LeftMsg.vue";
export default {
    name: "dataScreenFourCircleTwo",
    // watch: {
    //     'data': {
    //         deep: true,
    //         handler:function(newVal,oldVal) {
    //             // console.log(newVal.rightData);
    //             let dataItem = ((newVal.rightData + 1) % 2 === 0 ? newVal.rightData : newVal.rightData) / 100;
                
    //             this.options['series'][0]['data'] = [dataItem, dataItem, dataItem];
    //         },      
    //         immediate: true
    //     }
    // },
    mounted() {
        let dataItem = ((this.data.rightData + 1) % 2 === 0 ? this.data.rightData : this.data.rightData) / 100;   
        this.options['series'][0]['data'] = [dataItem, dataItem, dataItem];
    },
    data() {
        return {
            label: {
                title: "客流",
                subTitleOne: ['环比', '%'],
                subTitleTwo: ['提袋率', '%'],
                subTitleThree: ['车流', '车次']
            },
            keys: ['TotalPassengerFlowCount', 'SequentialValue', 'PaidPercent', 'CarInCount'],
            options: {
                tooltip: {
                    show: true,
                    formatter: function(params){
                        return Math.round(params.value * 100) + ".00%";
                    },
                    backgroundColor: "rgba(255,255,255,.7)",
                    textStyle: {
                        color: "#000"
                    }
                },
                series: [
                    {
                        color: '#03e8f3',
                        type: "liquidFill",
                        radius: "70%",
                        zLevel: 2,
                        z: 2,
                        backgroundStyle: {
                            color: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.5,
                                colorStops: [{
                                    offset: 0.6, color: 'transparent' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(255,255,255,.3)' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            }
                        },
                        itemStyle: {
                            color: {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0.3, color: '#00a5f7'
                                },{
                                    offset: 0.8, color: '#03e8f3'
                                }]
                            },
                        },
                        label: {
                            fontWeight: "lighter",
                            textStyle: {
                                fontSize: 30,
                                color: "#fff",
                                fontWeight: "lighter"
                            },
                            insideColor: '#000',
                            formatter: function(params) {
                                // console.log(Math.round(params.value * 100)  + "\n提袋率");
                                return Math.round(params.value * 100)  + "%\n提袋率";
                            }
                        },
                        outline: {
                            borderDistance: 0,
                            itemStyle: {
                                borderWidth: 0,
                            }
                        },
                        data: []
                    },
                    // {
                    //     type: 'pie',
                    //     center: ['47.9%', '48%'],
                    //     zLevel: 1,
                    //     z: 1,
                    //     radius: ["75%","74%"],
                    //     // value: 1,
                    //     hoverAnimation: false,
                    //     label: {
                    //         show: false,
                    //     },
                    //     tooltip: {
                    //         show: false
                    //     },
                    //     data: [
                    //     {
                    //         name: "1",
                    //         value: 10,
                    //         itemStyle: {
                    //             color: '#00a5f7'
                    //         }
                    //     },
                    //     {
                    //         name: "2",
                    //         value: 20,
                    //         itemStyle: {
                    //             color: '#03e8f3'
                    //         }
                    //     },
                    //     {
                    //         name: "3",
                    //         value: 5,
                    //         itemStyle: {
                    //             color: 'transparent'
                    //         }
                    //     }
                    //     ],
                    //     animationTypeUpdate: "expansion"
                    // },
                    // {
                    //     type: "pie",
                    //     center: ['32','62'],
                    //     radius: '3%',
                    //     hoverAnimation: false,
                    //     label: {
                    //         show: false,
                    //     },
                    //     tooltip: {
                    //         show: false
                    //     },
                    //     data: [1],
                    //     itemStyle: {
                    //         color: "#03e8f3"
                    //     },
                    //     animationType: "scale",
                    //     animationEasing: 'elasticOut',
                    //     animationTypeUpdate: "expansion"
                    // }
                ]
            }
        }
    },
    components: {
        'left-msg': LeftMsg
    },
    props: ['data'],
}
</script>
<style lang="scss" scoped>

</style>