<template>
    <div class="container-fluid">

        <div class="row">
            <div class="col-2">

                <FiltroServicosComponent />
            </div>

            <div class="col-10">

                <CardsServicos />
            </div>
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