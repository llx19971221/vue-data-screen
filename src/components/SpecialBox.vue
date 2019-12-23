<template>
    <div class="special-box">
        <div class="lt"><span>!!!!!!!!!!!!!!!!!<span>WWW</span></span></div>
        <div class="rt"><span></span></div>
        <div class="lb"><span></span></div>
        <div class="rb"><span></span></div>
    </div>
</template>
<script>
export default {
    name: "specialBox"
}
</script>
<style lang="scss" scoped>
    .special-box {
        position: absolute;
        top: -12px;
        left: -12px;
        width: calc(100% + 24px);
        height: calc(100% + 24px);
        z-index: 5;
        div {
            width: 0;
            > span {
                outline: 1px solid #00c2ff;
                color: transparent;
                span {
                    line-height: 0;
                    font-size: 20px;
                }
            }
        }
    }
</style>