<template>
    <nav>
        <ul>
            <li :class="{ active: route.name === 'Home' }" @click="navigateTo('Home')">00 <strong>Início</strong></li>
            <li :class="{ active: route.name === 'Destination' }" @click="navigateTo('Destination')">01
                <strong>Destino</strong>
            </li>
            <li>02 <strong>Tripulação</strong></li>
            <li>03 <strong>Tecnologia</strong></li>
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