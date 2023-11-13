<template>
    <div class="container-fluid">

        <div class="row">


            <FiltroServicosComponent />




            <CardsPrestadorComponent />

        </div>


    </div>
</template>
    
<script>

import CardsPrestadorComponent from "@/components/CardsPrestadorComponent.vue"
import FiltroServicosComponent from "@/components/FiltroServicosComponent.vue"

export default {
    name: "PrestadorView",
    methods: {

    },
    components: {

        FiltroServicosComponent,
        CardsPrestadorComponent

    },

}


</script>
    
<style scoped></style>