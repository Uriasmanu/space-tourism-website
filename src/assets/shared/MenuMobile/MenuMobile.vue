<template>
    <div class="menu-mobile">
        <input type="checkbox" id="menu" name="menu" v-model="isOpen">
        <label for="menu" class="menu-label">
            <img :src="isOpen ? close : menu" alt="Menu" class="menu-icon">
        </label>
    </div>
</template>

<script>
import menu from '@/assets/shared/icon-hamburger.svg';
import close from '@/assets/shared/icon-close.svg'

export default {
    name: 'MenuMobile',
    data() {
        return {
            isOpen: false,
            menu,
            close,
        }
    }
}
</script>

<style lang="scss" scoped>
@import './MenuMobile';
</style>