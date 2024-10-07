<template>
    <div class="destination-container">
        <HeaderMenu />
    </div>
</template>

<script>
import HeaderMenu from '@/assets/shared/Header/HeaderMenu.vue';

export default {
    name: 'Destination',
    components: {
        HeaderMenu
    }
}
</script>

<style lang="scss" scoped>
@import './_DestinationPage.scss';
</style>