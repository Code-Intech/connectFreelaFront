<template>
    <div class="container-fluid">

        <div class="row">
            <div class="col-2 p-0">

                <PerfilComponent :id="$route.params.id" :idPrestador="$route.params.idPrestador" />
            </div>

            <div class="col-10">

                <UserPerfilComponent :id="$route.params.id" :idPrestador="$route.params.idPrestador"/>
            </div>
        </div>


    </div>
</template>
    
<script>

import UserPerfilComponent from "@/components/TelaUser/PerfilUserComponent.vue"
import PerfilComponent from "@/components/TelaUser/PerfilUserBarraComponent.vue"

export default {
    name: "UserPerfilSobreView",
    methods: {

    },
    components: {

        PerfilComponent,
        UserPerfilComponent

    },
    created() {
    }

}


</script>
    
<style scoped></style>