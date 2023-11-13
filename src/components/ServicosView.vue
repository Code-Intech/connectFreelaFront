<template>
    <div class="container-fluid">

        <div class="row">


            <FiltroServicosComponent />




            <CardsServicos />

        </div>


    </div>
</template>
    
<script>

import CardsServicos from "@/components/CardsServicosComponent.vue"
import FiltroServicosComponent from "@/components/FiltroServicosComponent.vue"

export default {
    name: "ServicosView",
    methods: {

    },
    components: {

        FiltroServicosComponent,
        CardsServicos

    },

}


</script>
    
<style scoped></style>