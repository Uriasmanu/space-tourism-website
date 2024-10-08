<template>
    <header>
        <img src="../logo.svg" alt="logo">
        <NavMenu />
    </header>
</template>

<script>
import NavMenu from '../NavMenu/NavMenu.vue';

export default {
    name: 'HeaderMenu',
    components: {
        NavMenu,
    }
}
</script>

<style lang="scss" scoped>
@import './_HeaderMenu.scss';
@import './_HeaderMenuMobile.scss';
</style>