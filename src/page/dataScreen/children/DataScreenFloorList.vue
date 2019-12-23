<template>
    <div class="data-screen-flist">
        <i @click="floorRadio(item)" :class="[item.FloorId === nowFloorId ? 'floor-item selected' : 'floor-item']" v-for="(item, idx) in floorList" :key="idx">
            {{item.FloorName}}
        </i>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "dataScreenFloorList",
    methods: {
        ...mapActions({
            getFloorData: "getFloorData"
        }),
        floorRadio(item) {
            console.log(item);
            if(item.FloorId === this.nowFloorId || item.FloorName === 'w' || item.FloorName === 'W'){
                return ;
            }else {
                this.$store.commit("SET_FLOOR_ID_NAME", item);
                this.getFloorData();
            }
        }
    },
    computed: {
        ...mapGetters({
            floorList: "floorList",
            nowFloorId: "nowFloorId",
            date: "date"
        })
    }
}
</script>
<style lang="scss" scoped>
    .data-screen-flist {
        position: absolute;
        width: 40px;
        font-size: 19px;
        font-weight: 700;
        line-height: 40px;
        display: flex;
        flex-direction: column;
        text-align: center;
        font-style: normal;
        color: #00a5f7;
        bottom: 0;
        right: 0;
        z-index: 10;
        .floor-item {
            display: block;
            font-style: normal;
            background-color: #13153e;
            cursor: pointer;
            user-select: none;
            &.selected {
                color: #13153e;
                background-color: #00a5f7;
            }
            + .floor-item {
                margin-top: 2px;
            }
        }
    }
</style>