<template>
    <div class="containerHome">
        <header>
            <HeaderMenu />
        </header>
        <main>
            <div class="titulo">

                <h2>So, you want to travel to</h2>
                <h1>SPACE</h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                    because we’ll give you a truly out of this world experience!</p>
            </div>
            <button @click="navigateTo('Destination')">Explore</button>
        </main>

    </div>
</template>

<script>
import HeaderMenu from '@/assets/shared/Header/HeaderMenu.vue';
import { useRouter } from 'vue-router';


export default {
    name: 'HomeTurismo',
    components: {
        HeaderMenu,
    },

    setup() {
        const router = useRouter();

        const navigateTo = (routeName) => {
            router.push({ name: routeName });
        }

        return { navigateTo };
    }
}

</script>

<style lang="scss" scoped>
@import './_HomeTurismo.scss';
</style>
