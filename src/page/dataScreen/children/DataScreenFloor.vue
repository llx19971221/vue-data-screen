<template>
    <div 
    v-loading="loading"
    element-loading-text="正在加载商店信息"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgb(0, 0, 0)"
    element class="data-screen-floor">
        <my-floor-list />
        <svg
        @mousewheel="scroll"
        @mousemove="move"
        @mouseup="up"
        @mousedown="down"
        version="1.1" 
        id="svg-1" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink" 
        x="0px" 
        y="0px"
	    :viewBox="floorView[nowFloorName]" 
        :style="`enable-background:new ${floorView[nowFloorName]};transform: scale(${scale});top:${top}px;left:${left}px;`" 
        xml:space="preserve">
            <g v-if="nowFloorName === '1'">
                <path fill="#161E42" class="st0" d="M507.3,81.3L480.8,0.8h-216c0,0-56.1-9-97.1,31.7c-40.9,40.7-40.9,83.5-40.9,83.5s-0.7,58-17.8,99.3
                    c-13.6,32.9-50.1,65.4-67.9,79.9c-7.7,6.3-15.2,13.1-22.4,20.5L0,335.1V425l28.2,54.6v127.7c0,10.4,6.5,18.7,14.5,18.7h346l30.3-30
                    l2.6,1.1c1.2,0.5,2.5,0.2,3.5-0.8l51.9-52.9c1.4-1.4,1.8-3.9,1.1-5.9l-0.6-1.6l29.8-29.5V81.3L507.3,81.3z M492,489.9l-0.7,6.3
                    c-0.9,8.6-4.4,16.2-9.9,21.6l-80.2,81.6c-4,3.9-8.8,6.2-13.8,6.8l-8.1,0.9H54.2c-7.7,0-14.1-8.2-14.1-18.1l0.8-110.7L12,425.9
                    v-74.4l17.8-18.3c6.7-6.8,21-19.3,21-19.4l0.1-0.1H100l0.2-45l0.1-0.1c0.2-0.3,19.5-30.7,24.4-42.6c15.9-38.4,15.5-94.8,15.5-95.3
                    c0-0.4,0.4-41.1,38.6-79.1c38.2-37.9,84-34.1,84.4-34h203.5l0.1,0.3L492,93.8V489.9z"/>
                <path fill="#161E42" class="st0" d="M263.3,18.7c-0.5,0-46-3.9-83.9,33.8c-37.9,37.6-38.3,77.8-38.3,78.2c0,0.6,0.4,57.2-15.6,95.8
                    c-4.9,11.6-23,40.3-24.4,42.6l-0.2,45.6H51.3c-1.3,1.1-14.6,12.6-20.9,19.2l-17.5,18v73.5l28.9,52.5L40.9,589
                    c0,9.5,5.9,17.1,13.2,17.1h325.1l8.1-0.9c4.9-0.6,9.5-2.9,13.4-6.6l80.2-81.6c5.3-5.2,8.7-12.6,9.6-20.9l0.7-6.2V94.1l-24.9-75.3
                    L263.3,18.7L263.3,18.7z M121.3,469.2l-9.2-15v-10.6h64.6c0,0,2.6,16.8,7.8,25.6H121.3z M342.3,437.5c0,0-1.4,13.1-5.6,19
                    c-4.2,5.8-16.4,10.5-16.4,10.5h-26.5h-23h-23.7c0,0-12-3.1-17.3-9.7c-5.3-6.7-8.8-24.5-3-33.7l8.9-16.2c0,0,32.1-57.8,83.2-42.8
                    c22,6.4,23.3,36.4,23.3,36.4v36.5L342.3,437.5L342.3,437.5z M325.6,316.5c0.2,4.6-2.7,8.4-6.2,8.4h-25.8c-3.9,0-6.8-4.6-6.2-9.5
                    c0,0,5.4-20.7,7-31.2s2.1-33.6,2.1-33.6c0.6-3.9,3.1-6.6,6.2-6.6h15c3.4,0,6.1,3.5,6.2,7.7c0,0-0.7,24.6-0.9,31.1
                    C322.7,289.3,325.6,316.5,325.6,316.5z M346.6,107.9c-2.6,11-7.9,32.6-9.4,38.6c-2,8.3-6.9,34.8-6.9,34.8c-0.7,3.1-2.8,5.2-5.3,5.4
                    l-23.5,1.2c-3,0.2-5.6-2.4-6.2-6.2c0,0-2.6-16.9-7.1-35.3c-4.4-18.3-11.1-37.3-11.1-37.3c-1.2-3.8,1-7.8,4.1-7.8h55.6h6.2
                    C345.5,101.4,347.3,104.7,346.6,107.9z"/>
            </g>
            <g v-else-if="nowFloorName === '2'">
                <path fill="#161E42" class="st0" d="M504.1,80.7L504.1,80.7L477.6,0.8H263.1c0,0-55.7-8.9-96.4,31.5s-40.7,83-40.7,83s-0.7,57.6-17.8,98.7
                    c-13.6,32.7-49.8,65-67.4,79.3c-7.7,6.2-15.1,13.1-22.2,20.4L0,332.8V422l28,54.2V603c0,10.2,6.4,18.6,14.4,18.6h343.8l30.1-29.7
                    l2.6,1.1c1.2,0.5,2.5,0.2,3.5-0.8l51.6-52.6c1.3-1.4,1.8-3.8,1.1-5.8l-0.6-1.6l29.6-29.4V80.7z M488.8,486.5l-0.2,0.2l-28.4,28.5
                    l0.4,1.1c0.8,2.2,0.3,4.6-1.1,6.1L407.8,574c-1,1-2.4,1.3-3.6,0.8l-2.2-0.9l-29.1,28.9h-319c-7.7,0-13.9-8.1-13.9-18l0.8-109.9
                    l-28.8-52v-53.1l17.8-18.2c3.2-3.3,6.7-6.2,10-9.1c3.6-3.2,7.4-6.4,10.9-10c20.2-21.4,61.1-78.4,73.4-107.9
                    c15.8-38.1,15.4-94,15.4-94.7c0-0.4,0.5-40.8,38.4-78.5s83.4-33.8,83.8-33.8h202.2l25,75.7L488.8,486.5L488.8,486.5z"/>
                <path fill="#161E42" class="st0" d="M261.6,18.6c-0.5,0-45.6-3.9-83.4,33.6c-37.6,37.4-38.1,77.2-38.1,77.7s0.5,56.9-15.5,95.1
                    c-12.3,29.7-53.3,86.8-73.5,108.2c-3.5,3.7-7.3,7-10.9,10.1c-3.3,2.9-6.8,5.8-10,9l-17.4,17.8v52.2l28.8,52l-0.8,110.3
                    c0,9.3,5.9,17,13.2,17h318.7l29.2-29l2.7,1.1c1,0.4,2.1,0.2,2.9-0.6l51.7-51.5c1.2-1.2,1.5-3.3,1-4.9l-0.7-1.9L488,486V93.3
                    l-24.7-74.8L261.6,18.6z M120.6,465.9l-9.1-14.9v-10.6h64.2c0,0,2.6,16.7,7.8,25.4h-62.9V465.9z M340.2,434.5L340.2,434.5
                    c-0.1,0-1.5,13.1-5.6,18.9c-4.1,5.7-16.2,10.3-16.2,10.3H292h-22.8h-23.5c0,0-11.9-3-17.2-9.6c-5.3-6.7-8.7-24.3-3-33.5l8.9-16.1
                    c0,0,31.9-57.4,82.7-42.5c21.8,6.4,23.2,36.1,23.2,36.1v36.4L340.2,434.5L340.2,434.5z M323.5,314.2c0.2,4.5-2.7,8.3-6.2,8.3h-25.7
                    c-3.9,0-6.8-4.5-6.1-9.4c0,0,5.4-20.6,6.9-30.9s2.1-33.4,2.1-33.4c0.6-3.8,3.1-6.6,6.1-6.6h14.8c3.3,0,6.1,3.4,6.2,7.7
                    c0,0-0.6,24.4-1,30.8C320.3,287.2,323.5,314.2,323.5,314.2z M344.4,107.2c-2.7,10.9-7.9,32.4-9.4,38.3c-2,8.2-6.8,34.6-6.8,34.6
                    c-0.7,3.1-2.8,5.2-5.3,5.3l-23.4,1.2c-2.9,0.2-5.5-2.5-6.2-6.1c0,0-2.6-16.8-7-35s-11.1-37-11.1-37c-1.1-3.8,1-7.8,4.1-7.8h55.2
                    h6.1C343.4,100.7,345.2,104,344.4,107.2z"/>
            </g>
            <g v-else-if="nowFloorName === '3'">
                <path fill="#161E42" class="st0" d="M536.2,87.8L501.3,0L281.6,0.4c0,0-59.3-4-102.6,38.7c-20.4,20.1-31.4,39.8-37.5,55.1
                    c-5,12.5-7.2,26.5-6.5,40.5c1.4,29.2,3.3,105.2-11.1,140c-9.5,23.3-17.2,28.7-72.8,64.2c-16,10.3-49.5,32-49.5,55L0,451.2l29.8,56.3
                    v129.8c0,10.8,6.9,19.7,15.3,19.7h365.8l32-31.5l2.7,1.1c1.3,0.6,2.7,0.2,3.7-0.9l54.9-55.6c1.5-1.4,1.9-4.1,1.1-6.2l-0.6-1.8
                    l31.4-31L536.2,87.8L536.2,87.8z M522.8,515l-0.2,0.1l-28.2,28.7l0.9,3c1.5,5,0.2,10.7-3.2,13.8l-55.5,51.5
                    c-2.4,2.2-5.6,2.9-8.4,1.4l-2.1-1L396,643.2H63.1c-8.1,0-22.6-11.2-22.6-22.1V503.9L11,449.1v-39.4c0-21.9,23.9-46,40.3-52.9
                    c42.5-18,71-44,84.5-77.1c14.3-34.9,11.3-100.2,10.3-121.6c-0.6-14,1.8-37.8,6.4-49.4c0.3-1,0.8-1.9,1.1-2.9
                    c5.4-13.9,12.9-33,31-50.9c40.9-40.4,95.3-38.4,95.8-38.4l212.3-0.4l0.1,0.3l30,80.8L522.8,515L522.8,515z"/>
                <path fill="#161E42" class="st0" d="M280.4,17.5c-0.6,0-54.6-2-95.2,38.1c-18,17.8-25.1,36-30.8,50.6c-0.3,1-0.8,2-1.1,2.9
                    c-4.5,11.4-6.9,34.9-6.3,48.8c0.9,21.5,4,87.1-10.4,122.3c-13.7,33.4-42.3,59.6-85,77.7c-16.2,6.8-39.8,30.5-39.8,51.9v39.1
                    l29.6,54.8v117.6c0,10.3,14.1,21,21.7,21h332.6l30.2-30.9l2.6,1.2c2.6,1.2,5.4,0.7,7.6-1.3l55.4-51.4c3.1-2.9,4.3-8,2.9-12.5
                    l-1.1-3.8l0.3-0.2l28.3-28.8V97.1L492.2,17L280.4,17.5z M361.8,458.9c0,0-1.5,13.8-5.9,19.9c-4.5,6.1-17.3,10.9-17.3,10.9h-27.9
                    h-24.3h-25c0,0-12.6-3.2-18.3-10.2c-5.6-7.1-9.3-25.6-3.3-35.5l9.4-17c0,0,33.9-60.8,87.9-45c23.2,6.7,24.7,38.2,24.7,38.2
                    L361.8,458.9L361.8,458.9z M344.1,331.7c0.2,4.8-2.8,8.8-6.6,8.8h-27.2c-4.1,0-7.2-4.8-6.5-9.9c0,0,5.8-21.8,7.4-32.8
                    s2.1-35.4,2.1-35.4c0.6-4.1,3.3-7,6.5-7h15.8c3.5,0,6.4,3.6,6.6,8.2c0,0-0.7,25.9-0.9,32.6C340.9,302.9,344.1,331.7,344.1,331.7z
                    M366.3,112.5c-2.8,11.5-8.3,34.2-9.9,40.7c-2.1,8.6-7.3,36.7-7.3,36.7c-0.8,3.2-3,5.5-5.6,5.6l-24.9,1.3c-3.2,0.1-5.9-2.7-6.6-6.5
                    c0,0-2.7-17.8-7.5-37.1c-4.6-19.3-11.9-39.1-11.9-39.1c-1.2-4,1.1-8.3,4.4-8.3h58.8h6.5C365.2,105.7,367.1,109.2,366.3,112.5z"/>
            </g>
            <g v-else-if="nowFloorName === '4'">
                <path fill="#161E42" class="st0" d="M392.7,24.6c-0.8,0-76.5-2.7-133.3,53.7c-25.3,25-35.2,50.7-43.1,71.3c-0.6,1.4-1.1,2.7-1.5,4.1
                    c-6.3,16-9.7,49.1-8.7,68.7c1.4,30.4,5.5,122.5-14.5,172.1c-19.2,46.8-59.3,83.6-119.1,109.1c-22.7,9.6-55.6,42.9-55.6,73.1v55.1
                    l41.3,77v165.4c0,14.3,19.7,29.6,30.3,29.6h465.9l42.3-43.5l3.5,1.7c3.5,1.7,7.6,0.9,10.7-1.8l77.7-72.2c4.3-4,6-11.3,4.1-17.5
                    l-1.5-5.2l39.9-40.9V136.7L689.4,23.8L392.7,24.6z M506.7,645.8c0,0-2.1,19.5-8.3,28.1c-6.1,8.5-24.2,15.4-24.2,15.4H435h-34h-35
                    c0,0-17.7-4.4-25.6-14.3c-7.9-9.9-13-36.2-4.5-49.9l13.2-24c0,0,47.6-85.4,123.1-63.3c32.5,9.5,34.6,53.7,34.6,53.7L506.7,645.8
                    L506.7,645.8z M481.9,466.7c0.2,6.7-4,12.4-9.2,12.4h-38.3c-5.8,0-10.2-6.7-9.1-14c0,0,8-30.7,10.3-46.1
                    c2.2-15.4,3.1-49.7,3.1-49.7c0.8-5.6,4.6-9.8,9.1-9.8h22.1c5,0,9.1,5,9.2,11.4c0,0-0.9,36.3-1.4,45.9S481.9,466.7,481.9,466.7z
                    M513,158.4c-3.9,16.2-11.7,48.2-13.8,57.2c-3,12.2-10.2,51.6-10.2,51.6c-1.1,4.6-4.1,7.8-7.9,7.9l-34.8,1.8
                    c-4.4,0.3-8.3-3.7-9.2-9.2c0,0-3.9-25-10.4-52.2s-16.5-55.1-16.5-55.1c-1.7-5.6,1.5-11.6,6.1-11.6h82.3h9.1
                    C511.5,148.8,514.2,153.6,513,158.4z"/>
                <path fill="#161E42" class="st0" d="M750.9,123.6L702.1,0L394.3,0.8c0,0-83-5.6-143.7,54.5c-28.5,28.2-44,56-52.4,77.5c-7,17.5-10,37.2-9.1,57.1
                    c1.9,41,4.5,148-15.5,197c-13.3,32.8-24.1,40.4-101.9,90.3c-22.6,14.3-69.4,45-69.4,77.4L0,635l41.7,79.2v182.6
                    c0,15.3,9.6,27.8,21.5,27.8h512.2l44.9-44.2l3.9,1.7c1.8,0.8,3.7,0.3,5.2-1.2l76.9-78.3c2-2.1,2.7-5.6,1.7-8.7l-0.8-2.4l43.9-43.8
                    V123.6H750.9z M732.1,724.7l-0.2,0.2l-39.6,40.4l1.3,4.3c2.1,7,0.2,15-4.5,19.4l-77.6,72.3c-3.4,3.2-7.8,4-11.8,2.1l-3-1.4
                    l-42.1,43.3H88.4c-11.3,0-31.5-15.7-31.5-31.1V709.1l-41.3-77v-55.5c0-30.8,33.4-64.7,56.4-74.5c59.6-25.3,99.4-61.9,118.3-108.5
                    c20-49.1,15.8-141,14.4-171.2c-0.9-19.8,2.6-53.1,9-69.4c0.5-1.4,1.1-2.7,1.5-4.1c7.6-19.5,17.9-46.4,43.4-71.7
                    c57.1-56.9,133.2-54.3,134-54.2L690,22.4l0.1,0.5L732,136.6L732.1,724.7L732.1,724.7z"/>
            </g>
            <g v-else>
                <path fill="#161E42" class="st0" d="M452.3,83.2L0,81.1v762.3l841.5,0.1l37-30.4V515.8h24.1V111.3h-24.1h-71.4l-27.6,0.2H667.4V28.3h-124V0h-91.1
                    L452.3,83.2L452.3,83.2z M534,23.8v28.3h123.9v83.2H767l52.9-0.2h34.9h27.3V492H858l-3.2,297.3l-37,30.4l-795.5-0.1V104.9
                    l447.6,2.1V23.8H534L534,23.8z"/>
                <polygon fill="#161E42" class="st0" points="25.3,108 25.3,816.4 814.5,816.6 851.5,786.1 851.5,488.8 875.6,488.8 875.6,138.2 851.5,138.2
	                819.9,138.2 766.9,138.4 654.6,138.4 654.6,55.2 530.7,55.2 530.7,27 474.5,27 474.5,110.1 	"/>
            </g>
            <g @click="oneStoreInfo(item.storeId)" v-for="(item, idx) in floorData[nowFloorName].path" :key="item.storeId+''+idx">
                <path :fill="fillColor(item.storeId)" class="path" :d="item.d"/>

                <text class="floor-text"  :transform="item.storeIdPosition">{{item.storeId}}</text>

                <text class="floor-text"  :transform="item.storeNamePosition">{{storeName(item.storeId)}}</text>
            </g>
            <g @click="oneStoreInfo(item.storeId)" v-for="(item, idx) in floorData[nowFloorName].polygon" :key="item.storeId+''+idx">
                <polygon :fill="fillColor(item.storeId)" class="polygon" :points="item.points"/>

                <text class="floor-text"  :transform="item.storeIdPosition">{{item.storeId}}</text>

                <text class="floor-text"  :transform="item.storeNamePosition">{{storeName(item.storeId)}}</text>
            </g>
            <g @click="oneStoreInfo(item.storeId)" v-for="(item, idx) in floorData[nowFloorName].rect" :key="item.storeId+''+idx">
                <rect :fill="fillColor(item.storeId)" class="rect"  :x="item.x" :y="item.y" :width="item.width" :height="item.height"/>

                <text class="floor-text"  :transform="item.storeIdPosition">{{item.storeId}}</text>

                <text class="floor-text"  :transform="item.storeNamePosition">{{storeName(item.storeId)}}</text>
            </g>
        </svg>
        <ul class="floor-color-list">
            <li @click="triggerColor(item)" v-for="(item,idx) in degreeColorArr" :key="idx" class="floor-color-item">
                <i :style="`background-color:${item.trigger ? item.ColorValue: '#2A2D65'}`" class="color-icon"></i>
                <span class="legend">{{item.DegreeName}}</span>
            </li>
        </ul>
        <div class="floor-sale-earn">
            <i @click="degreeChange('1')" :class="['sale-earn-icon', degreeType === '1'? 'selected' : '']">销售</i>
            <i @click="degreeChange('2')" :class="['sale-earn-icon', degreeType !== '1'? 'selected' : '']">收益</i>
        </div>
        <i class="rank-icon">
            <img src="@assets/img/rank.png" alt="rankIcon"/>
        </i>
        <el-dialog custom-class='store-dialog' :show-close=false width="60%" :visible.sync="dialogOneStoreVisible">
            <my-one-store />
        </el-dialog>
    </div>
</template>
<script>
import VueDragResize from "vue-drag-resize";
import DataScreenOneStore from "./DataScreenOneStore.vue";
import DataScreenFloorList from "./DataScreenFloorList.vue";
import floorData from "@assets/lc.json";
import { Dialog } from "element-ui";
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "dataScreenFloor",
    data() {
        return {
            dialogOneStoreVisible: false,
            loading: false,
            top: 0,
            left: 0,
            clickX: 0,
            clickY: 0,
            ifClick: false,
            floorData,
            scale: 1,
            floorView: {
                '1': '0 0 507.3 626',
                '2': '0 0 504.1 621.7',
                '3': '0 0 536.2 657',
                '4': '0 0 750.9 924.6',
                '-1': '0 0 902.6 843.5'
            }
        }
    },
    computed: {
        ...mapGetters({
            nowFloorName: "nowFloorName",
            AllFloorData: "AllFloorData",
            degreeColorArr: "degreeColorArr",
            degreeType: "degreeType"
        }),
    },
    methods: {
        oneStoreInfo(itemId) {
            if(!this.AllFloorData[itemId]) return;
            this.loading = true;
            this.getOneStoreInfo(this.AllFloorData[itemId].StoreId).then(e=>{
                if(e) {
                    this.dialogOneStoreVisible = true;
                }
                this.loading = false;
            });
        },
        degreeChange(degreeType) {
            this.$store.commit("SET_DEGREE_TYPE", degreeType);
            this.changeDegree().then(e=>{
                if(e.flag) {
                    console.log(1);
                }
            })
        },
        ...mapActions({
            changeDegree: "changeDegree",
            getOneStoreInfo: "getOneStoreInfo"
        }),
        scroll(e) {
            //上滚动
            if(e.wheelDelta < 0) {
                this.scale -= 0.04;
                if(this.scale < 0.5){
                    this.scale = 0.5;
                }
            }else {
                this.scale += 0.04;
            }
        },
        down(e) {
            this.clickX = e.offsetX;
            this.clickY = e.offsetY;
            this.ifClick = true;
        },
        move(e) {
            if(!this.ifClick) return;
            this.top += e.offsetY - this.clickY;
            this.left += e.offsetX - this.clickX;
        },
        up() {
            this.ifClick = false;
        },
        triggerColor(item) {
            item.trigger = !item.trigger;
            for(let value of Object.values(this.AllFloorData)) {
                if(!item.trigger && value.DegreeColor === item.ColorValue) {
                    value.DegreeColor = "#2A2D65";
                }else if(item.trigger && value.DegreeName === item.DegreeName){
                    value.DegreeColor =  item.ColorValue;
                }
            }
        },
        storeName(id) {
            return this.AllFloorData[id] ? this.AllFloorData[id].StoreName : '';
        },
        fillColor(id) {
            if(!this.AllFloorData[id]) return '#2A2D65';
            for(let value of Object.values(this.degreeColorArr)) {
                if(value.ColorValue === this.AllFloorData[id].DegreeColor && value.trigger) {
                    return value.ColorValue;
                }
            }
            return '#2A2D65';
            // return this.AllFloorData[id] ? this.AllFloorData[id].DegreeColor : '#2A2D65'
        },
    }, 
    components: {
        'my-floor-list': DataScreenFloorList,//楼层号码
        'my-drag-resize': VueDragResize,
        'my-one-store': DataScreenOneStore,
        [Dialog.name]: Dialog
    }
}
</script>
<style lang="scss">
    #svg-1 {
        position: relative;
        width: 100%;
        height: 100%;
        cursor: grab;
        g + g {
            cursor: pointer;
        }
    }
    .store-dialog {
        background-color: rgb(9,2,55);
        border-bottom: 1px solid #00c2ff;
        .el-dialog__header {
            padding: 0;
        }
        .el-dialog__body {
            padding: 0;
        }
    }
    .floor-text {
        fill: #fff;
        user-select: none;
        cursor: pointer;
    }

    .rank-icon {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 5;
        width: 30px;
        height: 30px;
        display: block;
        border: 1px solid #00c2ff;
        background-color: #13153e;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
            background-color: rgba(255, 255, 255, 0.3);
        }
        img {
            width: 100%;
        }
    }
    .floor-sale-earn {
       position: absolute;
        top: 0;
        left: 10px;
        font-size: 16px;
        border-radius: 5px;
        border: 1px solid #00c2ff;
        cursor: pointer;
        .sale-earn-icon {
            display: block;
            writing-mode: vertical-lr;
            font-style: normal;
            color: #00c2ff;
            padding: 5px;
            &.selected {
                background-color: #00c2ff;
                color: rgb(12,0,40);
            }
        }
    }
    .floor-color-list {
        position: absolute;
        bottom: 0;
        left: 10px;
        font-size: 14px;
        width: 200px;
        color: rgb(228, 228, 228);
        .floor-color-item {
            cursor: pointer;
            user-select: none;
            & + .floor-color-item {
                margin-top: 10px;
            }
        }

        .color-icon,
        .legend {
            display: inline-block;
            vertical-align: middle;
        }
        .color-icon {
            width: 20px;
            height: 10px;
            margin-right: 5px;
        }
    }
</style>