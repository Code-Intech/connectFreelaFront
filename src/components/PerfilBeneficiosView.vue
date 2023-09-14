<template>

    <div class="container-fluid">
        <div class="row">
            <barra-perfil-component />
            <PerfilBeneficiosComponent/>

        </div>
    </div>

</template>

<script>

import BarraPerfilComponent from "@/components/BarraPerfilComponent.vue";
import PerfilBeneficiosComponent from "@/components/PerfilBeneficiosComponent.vue";

export default {
name: "PerfilBeneficiosView",
components: {
BarraPerfilComponent,
PerfilBeneficiosComponent
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
    BarraPerfilComponent