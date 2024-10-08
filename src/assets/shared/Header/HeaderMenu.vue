<template>
    <header>
        <img @click="navigateTo('Home')" src="../logo.svg" alt="logo">
        <NavMenu />
    </header>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import NavMenu from '../NavMenu/NavMenu.vue';

export default {
    name: 'HeaderMenu',
    components: {
        NavMenu,
    },
    setup() {
        const router = useRouter(); // Acessa o roteador para navegar
        const route = useRoute(); // Acessa a rota atual, se necessário

        // Função para navegar para a rota específica
        const navigateTo = (routeName) => {
            router.push({ name: routeName }).catch(err => {
                // Verifique se há algum erro de navegação
                console.error('Navigation error:', err);
            });
        }

        return { route, navigateTo };
    }
}
</script>

<style lang="scss" scoped>
@import './_HeaderMenu.scss';
@import './_HeaderMenuMobile.scss';
</style>