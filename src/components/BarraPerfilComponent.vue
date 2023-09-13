<template>
    <div class="col-2 border-4 border-top border-black p-0"
        style="min-height: 900px; background-color: var(--purple-tertiary);">
        <div class=" text-emphasis-secondary m-2      h-100 d-inline-block " style="background-color: var(--purple-quaternary); max-height: 880px;">

            <div class="d-flex justify-content-center" >

                <div class="position-relative">
                    <img class="img-fluid border border-2 border-black" src="../assets/img/imagem-user.png" alt="">
                    <a href=""><font-awesome-icon class=" position-absolute bottom-0 end-0 bg-white" icon="pen" style="min-height: 1rem;min-width: 1rem; color: black;" /></a>

                </div>
            </div>

            <div class="mt-3" style="border: solid white; border-radius: 10px;">
                <h4 class="text-white h4 d-flex justify-content-start ms-1" >William Fraga</h4>
            </div>

            <div class="d-grid gap-2 mt-3" >
                <button class="btn btn-outline-primary text-white  border-white">Nome de Perfil</button>
                <button class="btn btn-outline-primary text-white  border-white">Nome de Perfil</button>
                <button class="btn btn-outline-primary text-white  border-white">Nome de Perfil</button>

            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "BarraPerfilComponent",
    methods: {
        
    }
}
</script>

<style scoped>

.btn:hover{
    background-color: var(--purple-primary);
}


</style>