<template>
    <div class="container-fluid">
        <div class="row">
            <barra-perfil-component />
            <InfoPrestadorComponent />

        </div>
    </div>
</template>

<script>

import BarraPerfilComponent from "@/components/BarraPerfilComponent.vue";
import InfoPrestadorComponent from "@/components/InfoPrestadorComponent.vue";

export default {
    name: "ViewInfoPrestador",
    components: {
        BarraPerfilComponent,
        InfoPrestadorComponent
    },
    methods: {


    }
}
</script>

<style scoped>
.btn:hover {
    background-color: var(--purple-primary);
}
</style>