<template>
    <div class="containerHome">
        <header>
            <HeaderMenu />
        </header>
        <main>
            <div class="titulo">

                <h2>Então, você quer viajar para</h2>
                <h1>ESPAÇO</h1>
                <p>Vamos encarar a realidade; se você quer ir ao espaço, é melhor ir de verdade para
                    o espaço sideral e não apenas ficar pairando na beira dele. Então, sente-se e relaxe,
                    porque vamos te proporcionar uma experiência verdadeiramente fora deste mundo!</p>

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
@import './_HomeTurismoMobile.scss';
</style>
