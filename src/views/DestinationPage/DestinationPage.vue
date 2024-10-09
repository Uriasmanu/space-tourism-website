<template>
    <div class="destination-container">
        <header>
            <HeaderMenu />
        </header>
        <main>
            <div class="titulo">
                <h2>01 <strong>ESCOLHA SEU DESTINO</strong></h2>
                <img :src="img" :alt="nomeImagem">
            </div>
            <div class="informacoes-luas">
                <ul>
                    <li 
                        @click="selectDestination('moon', 'LUA')"
                        :class="{ active: img === moonImg }">LUAR</li>
                    <li 
                        @click="selectDestination('mars', 'MARTE')"
                        :class="{ active: img === marsImg }">MARTE</li>
                    <li 
                        @click="selectDestination('europa', 'EUROPA')"
                        :class="{ active: img === europaImg }">EUROPA</li>
                    <li 
                        @click="selectDestination('titan', 'TITAN')"
                        :class="{ active: img === titanImg }">TITAN</li>
                </ul>

                <!-- Componente a ser mostrado baseado na escolha -->
                <component :is="currentComponent" />
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

// Importe as imagens diretamente
import moonImg from '@/image/destination/image-moon.png';
import marsImg from '@/image/destination/image-mars.png';
import europaImg from '@/image/destination/image-europa.png';
import titanImg from '@/image/destination/image-titan.png';

export default {
    name: 'Destination',
    components: {
        HeaderMenu,
        SateliteLua,
        LuaEuropa,
        LuaTitan,
        PlanetMarte,
    },
    data() {
        return {
            img: moonImg, // Imagem inicial
            nomeImagem: 'LUA', // Nome da imagem inicial
            currentComponent: 'SateliteLua', // Componente padrão a ser exibido

            // Imagens
            moonImg,
            marsImg,
            europaImg,
            titanImg,
        };
    },
   
    methods: {
        selectDestination(imageName, nomeImagem) {
            console.log('Função selectDestination chamada com:', imageName, nomeImagem);

            // Selecionar a imagem correta
            switch (imageName) {
                case 'moon':
                    this.img = this.moonImg;
                    this.currentComponent = 'SateliteLua';
                    break;
                case 'mars':
                    this.img = this.marsImg;
                    this.currentComponent = 'PlanetMarte';
                    break;
                case 'europa':
                    this.img = this.europaImg;
                    this.currentComponent = 'LuaEuropa';
                    break;
                case 'titan':
                    this.img = this.titanImg;
                    this.currentComponent = 'LuaTitan';
                    break;
                default:
                    this.img = this.moonImg;
                    this.currentComponent = 'SateliteLua';
            }

            this.nomeImagem = nomeImagem;
            console.log('Imagem selecionada:', this.img);
        }
    }
}
</script>

<style lang="scss" scoped>
@import './_DestinationPage.scss';
@import './_DestinationPageMobile.scss';
</style>
