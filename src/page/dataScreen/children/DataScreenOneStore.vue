<template>
    <div class="one-store-list">
        <section class="store-info">    
            
        </section>
        <section class="store-info">

        </section>
        <section class="store-info">

        </section>
        <section class="store-info">

        </section>
        <!-- <special-box /> -->
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
// import SpecialBox from "@c/SpecialBox.vue";
export default {
    name: "dataScreenOneStore",
    // components: {
    //     'special-box': SpecialBox
    // },
    computed: {
        ...mapGetters({
            oneStoreData: "oneStoreData"
        })
    }
}
</script>
<style lang="scss" scoped>
    .one-store-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 700px;
    }
    .store-info {
        position: relative;
        width: 50%;
        height: 50%;
        padding: 0;
        // outline: 1px solid red;
    }
</style>