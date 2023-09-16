<template>
    <div class="d-flex">
        <BarraPerfilComponent />
        <PerfilAvaliacaoComponent/>



        
    </div>
</template>

<script>
import BarraPerfilComponent from "@/components/BarraPerfilComponent.vue";
import PerfilAvaliacaoComponent from "@/components/PerfilAvaliacaoComponent.vue";


export default {
    name: "PerfilAvaliacao",
    components: {
        BarraPerfilComponent,
        PerfilAvaliacaoComponent,
    },
    methods: {


    }
}
</script>

<style scoped></style>