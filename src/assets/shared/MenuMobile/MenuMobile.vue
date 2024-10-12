<template>
    <input type="radio" id="menu"></input>
    <label for="menu"></label>
</template>

<script>
    import menu from '@/assets/shared/icon-hamburger.svg';
    import close from '@/assets/shared/icon-close.svg'

    export default{
        name: 'MenuMobile',
        data(){
            return{
                menu,
                close,
            }
        }
    }
</script>

<style lang="scss" scoped>
@import './MenuMobile';
</style>