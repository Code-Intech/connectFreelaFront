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
        isRequired(value) {
            if (value && value.trim() && value.length > 5) {
                return true;
            }
            return 'This is required';
        }
    }
}
</script>

<style scoped>

.btn:hover{
    background-color: var(--purple-primary);
}


</style>
        BarraPerfilComponent