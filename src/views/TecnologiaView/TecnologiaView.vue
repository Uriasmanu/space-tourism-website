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
                    <div class="textos">
                        <div class="checkbox">
                            <div v-for="(section, index) in sections" :key="section.id">
                                <label 
                                 class="botao-informacoes" 
                                 :for="'checkbox-' + section.id"
                                 :class="{'selecionado': currentIndex === index}"
                                 >{{ index + 1 }}</label>
                                <input type="checkbox" :id="'checkbox-' + section.id" :checked="currentIndex === index"
                                    @change="currentIndex = index">

                            </div>
                        </div>
                        <div class="contain-infos">
                            <h4 class="subtitulo">{{ currentSection.subtitulo }}</h4>
                            <h3 class="titulo">{{ currentSection.titulo }}</h3>
                            <p class="descricao">{{ currentSection.descricao }}</p>
                        </div>
                    </div>
                </div>

            </div>
            <div class="image">
                <img :src="currentImage" alt="">
            </div>
            <div class="imageMobile">
                <img :src="currentImageMobile" alt="">
            </div>
        </main>
    </div>
</template>

<script>
import VeiculoLançamento from '@/assets/components/VeiculoLançamento/VeiculoLançamento.vue';
import HeaderMenu from '@/assets/shared/Header/HeaderMenu.vue';
import MenuMobile from '@/assets/shared/MenuMobile/MenuMobile.vue';

import launch from '../../starter-code/assets/technology/image-launch-vehicle-portrait.jpg';
import launchMobile from '../../starter-code/assets/technology/image-launch-vehicle-landscape.jpg';
import space from '../../starter-code/assets/technology/image-space-capsule-landscape.jpg';
import spaceMobile from '../../starter-code/assets/technology/image-space-capsule-portrait.jpg';
import spaceport from '../../starter-code/assets/technology/image-spaceport-portrait.jpg';
import spaceportMobile from '../../starter-code/assets/technology/image-spaceport-landscape.jpg';

import tecnologiaData from './TecnologiaView.json';

export default {
    name: 'TecnologiaView',
    components: {
        HeaderMenu,
        MenuMobile,
        VeiculoLançamento,
    },

    data() {
        return {
            sections: tecnologiaData.sections,
            currentIndex: 0,
            launch,
            launchMobile,
            space,
            spaceMobile,
            spaceport,
            spaceportMobile,
        };
    },

    computed: {
        currentSection() {
            return this.sections[this.currentIndex];
        },
        currentImage() {
            if (this.currentSection.titulo === 'Launch vehicle') {
                return this.launch;
            } else if (this.currentSection.titulo === 'Space capsule') {
                return this.space;
            } else if (this.currentSection.titulo === 'Spaceport') {
                return this.spaceport;
            }
            return '';
        },
        currentImageMobile() {
            if (this.currentSection.titulo === 'Launch vehicle') {
                return this.launchMobile;
            } else if (this.currentSection.titulo === 'Space capsule') {
                return this.spaceMobile;
            } else if (this.currentSection.titulo === 'Spaceport') {
                return this.spaceportMobile;
            }
            return '';
        }
    }
};
</script>

<style lang="scss" scoped>
@import './_TecnologiaView.scss';
</style>
