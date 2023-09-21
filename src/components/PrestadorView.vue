<template>
    <div class="container-fluid">

        <div class="row">
            <div class="col-2 p-0">

                <FiltroServicosComponent />
            </div>

            <div class="col-10">

                <CardsPrestadorComponent />
            </div>
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
    
<style scoped>


</style>