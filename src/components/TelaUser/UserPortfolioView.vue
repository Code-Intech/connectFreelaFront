<template>
    <div class="container-fluid">

        <div class="row">
            <div class="col-2 p-0">

                <PerfilComponent :id="$route.params.id" />
            </div>

            <div class="col-10">

                <UserPortifolioComonent :id="$route.params.id" />
            </div>
        </div>


    </div>
</template>
    
<script>

import UserPortifolioComonent from "@/components/TelaUser/PortfolioUserComponent.vue"
import PerfilComponent from "@/components/TelaUser/PerfilUserBarraComponent.vue"

export default {
    name: "UserPortfolioView",
    methods: {

    },
    components: {

        PerfilComponent,
        UserPortifolioComonent

    },

}


</script>
    
<style scoped></style>