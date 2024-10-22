<template>
    <div class="menu-mobile">
        <input type="checkbox" id="menu" name="menu" v-model="isOpen">
        <label for="menu" class="menu-label">
            <img :src="isOpen ? close : menu" alt="Menu" class="menu-icon">
        </label>

        <div class="navegacao" :class="{ open: isOpen }">
            <input type="checkbox" id="menu" name="menu" v-model="isOpen">
            
            <label for="menu" class="menu-label">
                <img :src="isOpen ? close : menu" alt="Menu" class="menu-icon">
            </label>
            <ul>
                <li :class="{ active: route.name === 'Home' }" @click="navigateTo('Home')">00 <strong>INICIO</strong>
                </li>
                <li :class="{ active: route.name === 'Destination' }" @click="navigateTo('Destination')">01
                    <strong>DESTINOS</strong>
                </li>
                <li :class="{ active: route.name === 'Crew' }" @click="navigateTo('Crew')">02
                    <strong>TRIPULACAO</strong></li>
                <li :class="{ active: route.name === 'Tecnologia' }" @click="navigateTo('Tecnologia')">03
                    <strong>TECNOLOGIA</strong></li>
            </ul>
        </div>
    </div>
</template>

<script>
import menu from '@/assets/shared/icon-hamburger.svg';
import close from '@/assets/shared/icon-close.svg'
import { useRoute, useRouter } from 'vue-router';

export default {
    name: 'MenuMobile',
    data() {
        return {
            isOpen: false,
            menu,
            close,
        }
    },
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
@import './MenuMobile';
</style>