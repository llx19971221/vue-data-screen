<template>
    <h3 class="title">{{title}}</h3>
</template>
<script>
export default {
    name: "degreeTitle",
    props: ['title']
}
</script>
<style lang="scss" scoped>
    h3.title {
        position: relative;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        padding: 5px 40px 4px 20px;
        background-image: linear-gradient(to right, rgb(40,20,99) 40%, rgb(30,47,103) 60%);
        &::after {
            content: "";
            position: absolute;
            bottom: 0;
            right: -15px;
            width: 20px;
            height: 2px;
            background-color: rgb(30,47,103);
        }
        &::before {
            content: "";
            position: absolute;
            right: 0;
            top: 0;
            display: block;
            width: 0;
            height: 0;
            border: 15px solid transparent;
            border-top-color: #0c0028;
            border-right-color: #0c0028;
            border-bottom-color: rgb(30,47,103);
            border-left-color: rgb(30,47,103);
            background-color: #0c0028;
        }
    }
</style>