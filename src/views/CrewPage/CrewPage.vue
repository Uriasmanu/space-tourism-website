<template>
    <div class="crew-container">
        <header>
            <HeaderMenu />
        </header>
        <main>
            <div class="titulo">
                <h2>02 <strong>MEET YOUR CREW</strong></h2>

            </div>
        </main>
    </div>
</template>

<script>
import HeaderMenu from '@/assets/shared/Header/HeaderMenu.vue';

export default {
    name: 'Crew',
    components: {
        HeaderMenu,
    }
}
</script>

<style lang="scss" scoped>
@import './_CrewPage';
</style>