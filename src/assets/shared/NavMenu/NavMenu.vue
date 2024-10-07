<template>
    <nav>
        <ul>
            <li :class="{active: route.name === 'Home'}" @click="navigateTo('Home')" >00 <strong>Home</strong></li>
            <li :class="{active: route.name === 'Destination'}" @click="navigateTo('Destination')">01 <strong>Destination</strong></li>
            <li>02 <strong>Crew</strong></li>
            <li>03 <strong>Technology</strong></li>
        </ul>
    </nav>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';


export default{
    setup(){
        const route = useRoute(); // Acessa a rota atual
        const router =  useRouter(); 

        const navigateTo = (routeName) => {
            router.push({  name: routeName });

        }

        return {route,  navigateTo }

    }
}
</script>

<style lang="scss" scoped>
@import './_NavMenu'
</style>