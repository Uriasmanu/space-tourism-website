<template>
    <nav>
        <ul>
            <li :class="{ active: route.name === 'Home' }" @click="navigateTo('Home')">00 <strong>INICIO</strong></li>
            <li :class="{ active: route.name === 'Destination' }" @click="navigateTo('Destination')">01
                <strong>DESTINOS</strong>
            </li>
            <li :class="{ active: route.name === 'Crew' }" @click="navigateTo('Crew')">02 <strong>TRIPULACAO</strong></li>
            <li :class="{ active: route.name === 'Tecnologia' }" @click="navigateTo('Tecnologia')">03 <strong>TECNOLOGIA</strong></li>
        </ul>
    </nav>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';


export default {
    setup() {
        const route = useRoute(); // Acessa a rota atual
        const router = useRouter(); // Usado para programar a navegação

        // Função para navegar para a rota específica
        const navigateTo = (routeName) => {
            router.push({ name: routeName });
        }

        return { route, navigateTo }

    }
}
</script>

<style lang="scss" scoped>
@import './_NavMenu.scss';
@import'_NavMenuMobile.scss';
</style>