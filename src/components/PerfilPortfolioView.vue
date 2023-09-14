<template>
    <div class="container-fluid">
        <div class="row">
            <barra-perfil-component />
            <PortfolioPerfilComponent />

        </div>
    </div>
</template>

<script>

import BarraPerfilComponent from "@/components/BarraPerfilComponent.vue";
import PortfolioPerfilComponent from "@/components/PortfolioPerfilComponent.vue";

export default {
    name: "PerfilPortfolioview",
    components: {
        BarraPerfilComponent,
        PortfolioPerfilComponent
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