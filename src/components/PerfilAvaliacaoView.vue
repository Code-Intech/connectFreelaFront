<template>
    <div class="d-flex">
        <BarraPerfilComponent />

        <div class="col-10 d-flex" style="min-height: 80vh; max-height: 80vh">

            <div class="flex-column ">
                <div class="Title">
                    <h1>Teste</h1>
                </div>

            </div>


        </div>
    </div>
</template>

<script>
import BarraPerfilComponent from "@/components/BarraPerfilComponent.vue";


export default {
    name: "PerfilAvaliacao",
    components: {
        BarraPerfilComponent,
    },
    methods: {


    }
}
</script>

<style scoped></style>