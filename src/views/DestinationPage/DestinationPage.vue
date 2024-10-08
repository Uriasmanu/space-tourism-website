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

                <div class="luas">
                    <h3>LUA</h3>
                    <p> Veja nosso planeta como você nunca viu antes. Uma viagem relaxante perfeita para ajudar
                        a recuperar a perspectiva e voltar renovado(a). Enquanto estiver lá, conheça um pouco da
                        história
                        visitando os locais de pouso do Luna 2 e Apollo 11.</p>
                    <div class="linha"></div>

                    <div class="infos-distancia">
                        <div class="inform distancia">
                            <p> Distância média</p>
                            <p>384.400 km</p>
                        </div>

                        <div class="inform dias">
                            <p> Tempo estimado de viagem</p>
                            <p>3 dias</p>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    </div>
</template>

<script>
import HeaderMenu from '@/assets/shared/Header/HeaderMenu.vue';

export default {
    name: 'Destination',
    components: {
        HeaderMenu
    }
}
</script>

<style lang="scss" scoped>
@import './_DestinationPage.scss';
</style>