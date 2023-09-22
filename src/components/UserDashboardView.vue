<template>
    <div class="container-fluid">

        <div class="row">
            <div class="col-2 p-0">

                <PerfilComponent />
            </div>

            <div class="col-10">

                <UserDashboardComponent />
            </div>
        </div>


    </div>
</template>
    
<script>

import UserDashboardComponent from "@/components/UserDashboardComponent.vue"
import PerfilComponent from "@/components/PerfilComponent.vue"

export default {
    name: "UserDashboardView",
    methods: {

    },
    components: {

        PerfilComponent,
        UserDashboardComponent

    },

}


</script>
    
<style scoped>


</style>