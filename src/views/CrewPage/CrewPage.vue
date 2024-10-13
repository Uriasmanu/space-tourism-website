<template>
    <div class="crew-container">
        <header>
            <HeaderMenu />
            <div class="menu">
                <MenuMobile/>
            </div>
        </header>
        <main class="tripula">
            <div class="titulo">
                <h2>02 <strong>CONHEÇA SUA TRIPULAÇÃO</strong></h2>

                <div class="chamada">
                    <div class="descricao">
                        <h3>{{ selectedCrewMember.title }}</h3>
                        <h2>{{ selectedCrewMember.name }}</h2>
                        <p>{{ selectedCrewMember.description }}</p>
                    </div>
                </div>

                <div class="guia">
                    <!-- Checkboxes vinculados ao índice dos tripulantes -->
                    <input type="radio" v-for="(crewMember, index) in crew" :key="index" :value="index"
                        v-model="selectedCrewIndex" :name="crewMember.name" :id="'checkbox-' + index" />
                    <label :for="'checkbox-' + index" v-for="(crewMember, index) in crew" :key="'label-' + index">
                    </label>

                </div>

            </div>

            <img :src="getImage(selectedCrewMember.image)" :alt="selectedCrewMember.name" />
        </main>

    </div>
</template>

<script>
import HeaderMenu from '@/assets/shared/Header/HeaderMenu.vue';
import crewData from './tripulacao.json';
import MenuMobile from '@/assets/shared/MenuMobile/MenuMobile.vue';

import douglas from '../../assets/crew/image-douglas-hurley.png';
import mark from '../../assets/crew/image-mark-shuttleworth.png';
import victor from '../../assets/crew/image-victor-glover.png';
import anousheh from '../../assets/crew/image-anousheh-ansari.png';

export default {
    name: 'Crew',
    components: {
        HeaderMenu,
        MenuMobile,
    },
    data() {
        return {
            crew: crewData,
            selectedCrewIndex: 0, // Começa exibindo o primeiro tripulante
            

            // Imagens
            douglas,
            mark,
            victor,
            anousheh,
        };
    },
    computed: {
        selectedCrewMember() {
            return this.crew[this.selectedCrewIndex]; // Retorna o tripulante selecionado
        }
    },
    methods: {
        getImage(imageName) {
            // Retorna a imagem correta com base no nome
            return this[imageName];
        }
    }
};

</script>

<style lang="scss" scoped>
@import './_CrewPage';
@import './_CrewPageMobile';
</style>