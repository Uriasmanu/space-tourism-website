<template>
    <div class="containe-tecnologia">
        <header>
            <HeaderMenu />
            <div class="menu">
                <MenuMobile />
            </div>
        </header>
        <main>
            <div class="titulo">
                <h2>03 <strong>SPACE LAUNCH 101</strong></h2>

                <div class="informacoes">
                    <div class="botao-informacoes">
                        <input type="checkbox" id="valor">
                        <label for="valor">1</label>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import VeiculoLançamento from '@/assets/components/VeiculoLançamento/VeiculoLançamento.vue';
import HeaderMenu from '@/assets/shared/Header/HeaderMenu.vue';
import MenuMobile from '@/assets/shared/MenuMobile/MenuMobile.vue';

export default {
    name: 'TecnologiaView',
    components: {
        HeaderMenu,
        MenuMobile,
        VeiculoLançamento,

    }
}

</script>

<style lang="scss" scoped>
@import './_TecnologiaView.scss'
</style>