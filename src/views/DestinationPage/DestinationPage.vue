<template>
    <div class="destination-container">
        <header>
            <HeaderMenu />
        </header>
        <main>
            <div class="escolha-imagens">
                <h2>01 <strong>ESCOLHA SEU DESTINO</strong></h2>
                <img src="../../assets/destination/image-moon.png" alt="">
            </div>
            <div class="informacoes-luas">
                <ul>
                    <li>LUAR</li>
                    <li>MARTE</li>
                    <li>EUROPA</li>
                    <li>TITAN</li>
                </ul>

              <!-- <SateliteLua/> -->
              <!-- <LuaEuropa/> -->
               <!-- <LuaTitan/> -->
                <PlanetMarte/>
            </div>
        </main>
    </div>
</template>

<script>
import LuaEuropa from '@/assets/components/LuaEuropa/LuaEuropa.vue';
import LuaTitan from '@/assets/components/LuaTitan/LuaTitan.vue';
import PlanetMarte from '@/assets/components/PlanetMarte/PlanetMarte.vue';
import SateliteLua from '@/assets/components/SateliteLua/SateliteLua.vue';
import HeaderMenu from '@/assets/shared/Header/HeaderMenu.vue';

export default {
    name: 'Destination',
    components: {
        HeaderMenu,
        SateliteLua,
        LuaEuropa,
        LuaTitan,
        PlanetMarte,
    }
}
</script>

<style lang="scss" scoped>
@import './_DestinationPage.scss';
</style>