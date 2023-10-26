<template>
    <div class="container-fluid">
        <div class="row">
            <barra-perfil-component />
            <ViewPropostaContratanteComponent />

        </div>
    </div>
</template>

<script>

import BarraPerfilComponent from "@/components/BarraPerfilComponent.vue";
import ViewPropostaContratanteComponent from "@/components/ViewPropostaContratanteComponent.vue";

export default {
    name: "ViewPropostas",
    components: {
        BarraPerfilComponent,
        ViewPropostaContratanteComponent
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