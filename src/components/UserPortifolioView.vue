<template>
    <div class="container-fluid">

        <div class="row">
            <div class="col-2 p-0">

                <PerfilComponent />
            </div>

            <div class="col-10">

                <UserPortifolioComonent />
            </div>
        </div>


    </div>
</template>
    
<script>

import UserPortifolioComonent from "@/components/UserPortifolioComonent.vue"
import PerfilComponent from "@/components/PerfilComponent.vue"

export default {
    name: "UserPerfiView",
    methods: {

    },
    components: {

        PerfilComponent,
        UserPortifolioComonent

    },

}


</script>
    
<style scoped>


</style>