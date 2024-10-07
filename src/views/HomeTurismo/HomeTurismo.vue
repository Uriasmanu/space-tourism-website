<template>
    <div class="containerHome">
        <header>
            <img src="../../assets/shared/logo.svg" alt="logo">
            <NavMenu />
        </header>

        <main>
            <div class="titulo">

                <h2>So, you want to travel to</h2>
                <h1>SPACE</h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                    because we’ll give you a truly out of this world experience!</p>
            </div>
            <button>Explore</button>
        </main>

    </div>
</template>

<script>
import NavMenu from '@/assets/shared/NavMenu/NavMenu.vue';


export default {
    name: 'HomeTurismo',
    components: {
        NavMenu,
    }
}
</script>

<style lang="scss" scoped>
@import './_HomeTurismo.scss';
</style>
