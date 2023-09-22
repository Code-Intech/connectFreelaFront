<template>
    <div class="container-fluid">

        <div class="row">
            <div class="col-2 p-0">

                <PerfilComponent />
            </div>

            <div class="col-10">

                <UserPerfilComponent />
            </div>
        </div>


    </div>
</template>
    
<script>

import UserPerfilComponent from "@/components/UserPerfilComponent.vue"
import PerfilComponent from "@/components/PerfilComponent.vue"

export default {
    name: "UserPerfiView",
    methods: {

    },
    components: {

        PerfilComponent,
        UserPerfilComponent

    },

}


</script>
    
<style scoped>


</style>