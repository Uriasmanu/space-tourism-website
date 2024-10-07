<template>
    <nav>
        <ul>
            <li :class="{active: route.name === 'Home'}">00 <strong>Home</strong></li>
            <li>01 <strong>Destination</strong></li>
            <li>02 <strong>Crew</strong></li>
            <li>03 <strong>Technology</strong></li>
        </ul>
    </nav>
</template>

<script>
import { useRoute } from 'vue-router';


export default{
    setup(){
        const route = useRoute(); // Acessa a rota atual
        return {route}
    }
}
</script>

<style lang="scss" scoped>
@import './_NavMenu'
</style>