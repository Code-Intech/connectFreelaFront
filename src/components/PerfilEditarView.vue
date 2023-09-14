<template>
        <div class="container-fluid">
            <div class="row">
                <barra-perfil-component />
                <EditarPerfilComponent/>

            </div>
        </div>
</template>

<script>

import BarraPerfilComponent from "@/components/BarraPerfilComponent.vue";
import EditarPerfilComponent from "@/components/EditarPerfilComponent.vue";

export default {
    name: "TesteComponent",
    components: {
    BarraPerfilComponent,
    EditarPerfilComponent
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