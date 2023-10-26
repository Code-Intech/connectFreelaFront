<template>
    <div class="container-fluid">
        <div class="row">
            <barra-perfil-component />
            <MeusServicosComponent/>

        </div>
    </div>
</template>

<script>

import BarraPerfilComponent from "@/components/BarraPerfilComponent.vue";
import MeusServicosComponent from "@/components/MeusServicosComponent.vue";

export default {
name: "MeusServicosView",
components: {
BarraPerfilComponent,
MeusServicosComponent,
},
methods: {


}
}
</script>

<style scoped>

.btn:hover{
background-color: var(--purple-primary);
}


</style>