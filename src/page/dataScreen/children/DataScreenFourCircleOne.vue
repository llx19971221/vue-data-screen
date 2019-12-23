<template>
    <div class="data-screen-pie">
        <left-msg :type=2 :label="label" :data="data.leftData" :keys='keys'/>
        <v-chart :autoresize=true :options="options"></v-chart>
    </div>
</template>
<script>
import 'echarts/lib/chart/pie';
import LeftMsg from "@c/LeftMsg.vue";
export default {
    name: "dataScreenFourCircleOne",
    // watch: {
    //     'data': {
    //         deep: true,
    //         handler:function(newVal,oldVal) {
    //             this.options['dataset']['source'] = newVal.rightData;
    //         },      
    //         immediate: true
    //     }
    // },
    mounted() {
        this.options['dataset']['source'] = this.data.rightData;
    },
    components: {
        'left-msg': LeftMsg
    },
    props: ['data'],
    data() {
        return {
            label: {
                title: "收益",
                subTitleOne: ['环比', '%'],
                subTitleTwo: ['收缴率', '%'],
                subTitleThree: ['欠费金额', '元']
            },
            keys: ['TotalNetAmt', 'SequentialValue', 'PaidPercent', 'UnChargeAmt'],
            options: {
                //各种颜色分布
                color: ["rgb(43,223,160)", "rgb(255,129,96)", "rgb(254,217,109)", "rgb(15,236,242)", "rgb(0,165,247)", "red", "yellow", "#fff", "pink", 'orange'],
                legend: {//可选项较多，变成滚动
                    type: "scroll",
                    orient: "vertical",
                    height: 80,
                    bottom: "0",
                    textStyle: {
                        color: "#fff",
                        fontSize: 12,
                    },
                    itemWidth: 10,
                    itemHeight: 10,
                    pageIconColor: "#fff",
                    pageIconInactiveColor: "#fff",
                    pageIconSize: 10,
                    pageTextStyle: {
                        color: "#fff"
                    }
                },
                tooltip: {
                    backgroundColor: "rgba(255,255,255,.7)",
                    textStyle: {
                        color: "#000",
                    },
                },
                dataset: {//有多种传值方式
                    source: []
                },
                series: [{
                    type: 'pie',
                    radius: 50,
                    center: ['50%', '30%'],
                    minAngle: 20,
                    label: {
                        show: false
                    },
                    encode: {//解析source
                        itemName: 'ChargeType',
                        value: 'TotalSaleAmt',
                    },
                    itemStyle: {
                        borderWidth: 3,
                        borderColor: '#13153e'
                    }
                    // No encode specified, by default, it is '2012'.
                }]
            }
        }
    }
}
</script>
<style lang="scss" scoped>

</style>