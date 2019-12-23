<template>
    <div class="left-msg-wrap">
        <h2 class="title">
            {{label.title}}
        </h2>
        <strong @click="alertMsg(forMat(data[keys[0]]), label.title)" class="left-msg-num" :title="forMat(data[keys[0]])">{{forMat(data[keys[0]])}}</strong>
        <ul class="left-msg-list">
            <li class="left-msg-item">
                <h3 class="title">{{label.subTitleOne[0]}}</h3>
                <em class="item-data" :style="`color:${data[keys[1]] < 0?'#f47c5e':'#0fecf2'};`" :title="data[keys[1]] + label.subTitleOne[1]">
                    {{(data[keys[1]] ? (data[keys[1]] < 0 ? data[keys[1]] * -1  : data[keys[1]]) : '0.00') + label.subTitleOne[1]}}
                </em>
            </li>
            <li class="left-msg-item">
                <h3 class="title">{{label.subTitleTwo[0]}}</h3>
                <em v-if="type != 3" class="item-data" :title="data[keys[2]] + label.subTitleTwo[1]">{{(data[keys[2]] ? parseFloat(data[keys[2]]).toFixed(2) : '0.00') + label.subTitleTwo[1]}}</em>
                <em v-else class="item-data" :style="`color:${data[keys[2]] < 0?'#f47c5e':'#0fecf2'};`" :title="data[keys[2]] + label.subTitleTwo[1]">{{(data[keys[2]] ? parseFloat(data[keys[2]]).toFixed(2) : '0.00') + label.subTitleTwo[1]}}</em>
            </li>
            <li class="left-msg-item">
                <h3 class="title">{{label.subTitleThree[0]}}</h3>
                <em v-if="type != 2" class="item-data" :title="data[keys[3]] + label.subTitleThree[1]">{{(data[keys[3]] ? data[keys[3]] : '0.00') + label.subTitleThree[1]}}</em>
                <em v-else  :style="`color:${data[keys[3]] < 0?'#f47c5e':'#0fecf2'};`" class="item-data" :title="data[keys[3]] + label.subTitleThree[1]">{{(data[keys[3]] ? data[keys[3]] : '0.00') + label.subTitleThree[1]}}</em>
            </li>
        </ul>
    </div>
</template>
<script>
import { MessageBox } from "element-ui";
export default {
    name: "LeftMsg",
    props: ['data','label', 'type', 'keys'],
    methods: {
        forMat(num, c = 10000, d = '万'){
            if(num != 0) {
                if(num / c < 1 && c === 10000){
                    return this.forMat(num, c/10);
                }else {
                    if(c === 10000){
                        d = '万';
                    }else{
                        d = '千';
                    }
                    return (num / c).toFixed(2) + d;
                }
            }else {
                return '0.00万'
            }
        },
        alertMsg(message, title) {
            MessageBox({
                title,
                message,
                customClass: "el-alert-msg",
                showConfirmButton: false,
                showCancelButton: false
            }).catch(()=>{
                return ;
            });
        }
    }  
}
</script>
<style lang="scss">
    .el-alert-msg {
        background-color: #13153e;
        border: none;
        border-bottom: 1px solid #00c2ff;
        border-radius: 0;
        border-top: 1px solid #00c2ff;
        .el-message-box__message,
        .el-message-box__title {
            color: #fff;
            font-size: 20px;
            text-align: center;
        }
    }
    .left-msg-wrap{
        * {
            color: #fff;
        }
        h2.title {
            font-size: 16px;
        }
        .left-msg-num {
            font-size: 28px;
            line-height: 2.3;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            word-break: break-all;
            cursor: pointer;
        }
        .left-msg-item {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            h3.title {
                font-size: 15px;
                font-weight: lighter;
                flex-shrink: 0;
            }
            .item-data {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-break: break-all;
                font-style: normal;
                margin-left: 13px;
            }
        }
    }
</style>