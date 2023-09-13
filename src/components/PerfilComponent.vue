<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-2 border-4 border-top border-black p-0"  style="min-height: 900px; background-color: var(--purple-tertiary);">
                <div class=" text-emphasis-secondary m-2      h-100 d-inline-block " style="background-color: var(--purple-quaternary);">

                    <div class="d-flex justify-content-center">

                            <div class="position-relative">
                                <img class="img-fluid border border-2 border-black" src="../assets/img/img.png" alt="" >
                                <a href=""><font-awesome-icon class="position-absolute bottom-0 end-0 bg-white" icon="pen" style="min-height: 1rem;min-width: 1rem;"/></a>

                            </div>
                        

                    </div>

                    <div class="d-grid gap-2 mt-3">
                        <button class="btn btn-outline-primary text-white  border-white" >Nome de Perfil</button>
                        <button class="btn btn-outline-primary text-white  border-white">Nome de Perfil</button>
                        <button class="btn btn-outline-primary text-white  border-white" >Nome de Perfil</button>
                        <button class="btn btn-outline-primary text-white  border-white">Nome de Perfil</button>
                        <button class="btn btn-outline-primary text-white  border-white">Nome de Perfil</button>
                        <button class="btn btn-outline-primary text-white  border-white">Nome de Perfil</button>
                        <button class="btn btn-outline-primary text-white  border-white">Nome de Perfil</button>
                        <button class="btn btn-outline-primary text-white  border-white">Nome de Perfil</button>
                        <button class="btn btn-outline-primary text-white  border-white">Nome de Perfil</button>
                        <button class="btn btn-outline-primary text-white  border-white">Nome de Perfil</button>
                        

                    </div>


                </div>
            </div>
            <div class="col-10 h-100 d-inline-block">
                2 of 2
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: "TesteComponent",
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