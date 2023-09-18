<template>
    <div class="col-10 ">
        <div class="flex-column" style="font-style: italic; padding-left: 10px;">
            <h1 class="Title">Avaliações</h1>
        </div>
        <div class="d-flex justify-content-center mt-5">
            <img src="../assets/img/GraficoAvaliacao.png" class="img-fluid" alt="Imagem responsiva"
                style="max-width: 75vh; max-height: 50vh;">
        </div>
        <div style="font-style: italic; padding-left: 10px;">
            <h2>Comentarios</h2>
        </div>

        <div class="justify-content-center mt-5" style="padding-left: 5%;">
            <div class="card border-1  rounded-3" style="max-width: 60rem; border-color:black;">
                <div class="" style="min-height: 15rem;">
                    <div class="card container text-center">
                        <div class="card-header">
                            Nome de Perfil
                        </div>
                        <div class="row">

                            <div class="card-body">
                                <div class="img-star">
                                    <!-- <img src="../assets/img/Stars.png" alt="Imagem responsiva"
                                        style="max-width: 25vh; max-height: 25vh; "> -->
                                    <Rating size="lg" :rating="4" />
                                </div>

                                <div class="alinhando ">

                                    <div class="col-1">

                                        <div class="flex">
                                            <Avatar size="lg" status="online"  rounded
                                                img="https://img.freepik.com/fotos-premium/um-macaco-preto-com-um-grande-sorriso-no-rosto_902338-24205.jpg?w=2000"
                                                class="mr-2.5" />
                                            
                                        </div>


                                        <!-- <img class=" rounded-circle" style="max-width: 40px;max-height: 50px;"
                                            src="@/assets/img/avatar.jpg" alt=""> -->
                                    </div>


                                    <div class="ms-2 border border-black rounded-2 col-9"
                                        style="background-color: rgb(213, 214, 214);">
                                        <p class="card-text" style="font-size: larger; padding-left: 2vh;">O comentario vem
                                            aqui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                                            corporis soluta sit perspiciatis vel eum mollitia velit, exercitationem culpa
                                            placeat, sed quibusdam dignissimos officiis? Dicta, eveniet cumque. Quisquam,
                                            veniam doloremque.</p>
                                    </div>

                                    <div class=" col-2">
                                        <div class="d-flex denun ms-4">
                                            <a href=""><img src="../assets/img/Bandeira.svg" class="img-den"
                                                alt="Imagem responsiva" style="max-width: 5vh; max-height: 5vh; "></a>
                                                <p class="text-den" style="font-style: italic; font-size: small;">Denunciar
                                                </p>
                                        </div>
                                        <div class="d-flex" style="text-align: right;">
        
                                            <a href="" class="p-3 "> <img src="../assets/img/maopositiva.png" alt="Imagem responsiva"
                                                    style="max-width: 5vh; max-height: 5vh;"></a>
                                            <a href=""><img src="../assets/img/maonegativa.png" alt="Imagem responsiva"
                                                    style="max-width: 5vh; max-height: 5vh;"></a>
                                        </div>
                                    </div>

                                </div>





                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- <div class="col-10 ">
        <Rating size="sm" :rating="4" class="bg-gray-600"/>
    </div> -->
</template>

<script>
import { Rating } from 'flowbite-vue'
import { Avatar } from 'flowbite-vue'
export default {
    name: "PerfilAvaliacaoComponent",
    methods: {

    },
    components: {
        Rating,
        Avatar
    },

}
</script>

<style scoped>
.alinhando {
    display: flex;
    padding-top: 1vh;
}

.denuncia {
    padding-left: 70%;
}

.denun {
    display: flex;
}

.img-star {
    align-self: self-start;
    padding-left: 8vh;
}

/* .container {
    display: flexbox;
} */
</style>