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
                    <div class="card">
                        <div class="card-header">
                            Nome de Perfil
                        </div>
                        <div class="card-body">
                            <div class="img-star">
                                <img src="../assets/img/Stars.png" alt="Imagem responsiva"
                                    style="max-width: 25vh; max-height: 25vh; ">
                            </div>

                            <div class="alinhando">

                                <img class=" rounded-circle" style="max-width: 40px;max-height: 50px;"
                                    src="@/assets/img/avatar.jpg" alt="">

                                <p class="card-text" style="font-size: larger; padding-left: 2vh;">O comentario vem aqui.
                                </p>

                                <div class="denuncia">
                                    <div class="denun">
                                        <p class="text-den" style="font-style: italic; font-size: small;">Denunciar
                                        </p>
                                        <img src="../assets/img/Bandeira.svg" class="img-den" alt="Imagem responsiva"
                                            style="max-width: 5vh; max-height: 5vh; ">
                                    </div>
                                </div>

                            </div>

                            <div class="" style="text-align: right;">
                                <img src="../assets/img/Like.svg" alt="Imagem responsiva"
                                    style="max-width: 5vh; max-height: 5vh;">
                                <img src="../assets/img/Deslike.svg" alt="Imagem responsiva"
                                    style="max-width: 5vh; max-height: 5vh;">
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PerfilAvaliacaoComponent",
    methods: {

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

.denun{
    display:flex;
}

.img-star {
    align-self: self-start;
    padding-left: 8vh;
}

/* .container {
    display: flexbox;
} */
</style>