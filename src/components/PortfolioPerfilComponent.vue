<template>
    <div class="col-10 ">


        <div class="border border-2 rounded m-5">




            <div class="" style="border-bottom: 2px solid black;">



                <button class="btn btn-primary m-2" type="button" data-bs-toggle="modal" data-bs-target="#criarportfolio">
                    Criar Portfolio
                </button>




            </div>





            <div class="" style="min-height: 200px;">
                <div class=" m-4" id="">
                    <div v-for="(album) in albums" :key="album.portifolio.idtb_portifolio">
                        {{ album }}
                        <div class="card" style="width: 20rem; ">
                            <img src="" class="card-img-top" alt="">
                            <div class="card-body">
                                <h5 class="card-title">{{ album.portifolio.Titulo }}</h5>
                                <div :id="'carouselExample' + album.portifolio.idtb_portifolio" class="carousel slide">

                                    <div class="carousel-inner">
                                        <div class="carousel-item" v-for="(photo, index) in album.photos"
                                            :key="photo.idtb_img_video" :class="[index < 1 ? 'active' : '']">
                                            <img :src="photo.Img" class="d-block w-100" alt="">
                                        </div>

                                        <!-- <div class="carousel-item">
                                            <img src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg"
                                                class="d-block w-100" alt="">
                                        </div> -->
                                    </div>
                                    <button class="carousel-control-prev" type="button"
                                        :data-bs-target="'#carouselExample' + album.portifolio.idtb_portifolio"
                                        data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button"
                                        :data-bs-target="'#carouselExample' + album.portifolio.idtb_portifolio"
                                        data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <button class="btn btn-primary mt-3" data-bs-toggle="modal"
                                        :data-bs-target="'#veralbum' + album.portifolio.idtb_portifolio">
                                        Ver Album
                                    </button>
                                    <button type="button" class="btn btn-warning mt-3" data-bs-toggle="modal"
                                        :data-bs-target="'#editarportfolio' + album.portifolio.idtb_portifolio">Editar</button>

                                    <button class="btn btn-danger mt-3">
                                        Deletar
                                    </button>


                                </div>
                            </div>
                        </div>





                        <ModalVerAlbum :modal-id="album.portifolio.idtb_portifolio" :albomModal="album" />
                        <ModalEditarAlbum :modal-id="album.portifolio.idtb_portifolio" :albomModal="album" />













                    </div>
                </div>

            </div>
        </div>






        <!-- Modal Criar Album-->












        <!-- Modal Criar Album-->
        <div class="modal fade" id="criarportfolio" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
            data-bs-backdrop="static">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Criar Portfólio</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                            @click="sair()"></button>
                    </div>
                    <div class="modal-body">

                        <div class="d-flex justify-content-center mt-5">
                            <div class=" ">
                                <div class="card border-5  rounded-3"
                                    style="max-width: 60rem; border-color: var(--purple-primary);width: 100vh">
                                    <div class="border-bottom border-black border-2  " style="min-height: 15rem; ;">
                                        <loading v-if="isLoading" :message="loadingMessage" />

                                        <div v-if="ifalbum">
                                            {{ albumMessage }}
                                        </div>

                                        <div class="m-1 rounded-3 d-flex justify-content-center"
                                            style="background-color: var(--purple-primary);">
                                            <h5 class="h5 text-white">Seu Portfólio</h5>
                                        </div>



                                        <div class="input-group p-3 ">
                                            <span class="input-group-text " id="inputGroup-sizing-default">Titulo</span>
                                            <input type="text" class="form-control " aria-label="Sizing example input"
                                                aria-describedby="inputGroup-sizing-default" v-model="album.Titulo">
                                        </div>

                                        <div>
                                            <div class="m-3">
                                                <h6>
                                                    Foto de Capa
                                                </h6>
                                            </div>
                                            <div class="input-group p-3">
                                                <input type="file" class="form-control btn btn-outline-primary"
                                                    id="inputGroupFile04" aria-describedby="inputGroupFileAddon04"
                                                    aria-label="Upload" @change="handleFileChange2">
                                                <button class="btn btn-outline-secondary btn-success text-white"
                                                    type="submit" id="inputGroupFileAddon04">Enviar</button>
                                            </div>
                                        </div>


                                        <h6 class="ms-3 mt-4">
                                            Texto
                                        </h6>

                                        <div class="form-floating m-3 border-bottom border-2 border-black">
                                            <textarea class="form-control mb-3" placeholder="Leave a comment here"
                                                id="floatingTextarea2" style="height: 100px"
                                                v-model="album.Texto"></textarea>
                                            <label for="floatingTextarea2">Comments</label>
                                        </div>




                                    </div>
                                    <div class="card-body">
                                        <div>


                                            <h6>
                                                Carregue Suas Imagens
                                            </h6>


                                            <div class="input-group">
                                                <input type="file" class="form-control btn btn-outline-primary"
                                                    id="inputGroupFile04" aria-describedby="inputGroupFileAddon04"
                                                    aria-label="Upload" multiple @change="handleFileChange">
                                                <button class="btn btn-outline-secondary btn-success text-white"
                                                    type="submit" id="inputGroupFileAddon04">Enviar</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                            @click="sair()">Sair</button>
                        <button type="button" class="btn btn-primary" @click="CriarAlbum()">Salvar</button>
                    </div>
                </div>
            </div>
        </div>






        <!-- Modal Ver Album -->
        <!-- <div class="modal fade" id="veralbum" tabindex="-1" aria-labelledby="veralbum" aria-hidden="true">
            <div class="modal-dialog  modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="veralbum">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <div id="carouselEx" class="carousel slide">
                            <div class="carousel-inner" style="max-height: 40rem;">
                                <div class="carousel-item active">
                                    <img src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg"
                                        class="d-block w-100" alt="">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg"
                                        class="d-block w-100" alt="">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg"
                                        class="d-block w-100" alt="">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselEx"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselEx"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>


                        <div class="border-top border-2 border-black mt-3">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem magnam
                                accusantium, laborum suscipit repellendus iure natus voluptatem necessitatibus
                                error nam sint! Blanditiis alias molestiae molestias quidem officiis,
                                perferendis voluptates sunt.
                            </p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sair</button>

                    </div>
                </div>
            </div>
        </div> -->

        <button @click="teste()">
            teste
        </button>

    </div>
</template>

<script>
import store from "@/store";
import { mapActions, mapGetters } from 'vuex'
import loading from "@/components/Loading.vue"
import ModalVerAlbum from "@/components/ModalVerAlbum.vue"
import ModalEditarAlbum from "@/components/ModalEditarAlbum.vue"


export default {
    name: "PortfolioPerfilComponent",
    components: {
        ModalVerAlbum,
        ModalEditarAlbum,
        loading
    },
    data() {
        return {
            album: {
                Titulo: null,
                FotoCapa: null,
                Texto: null,
                Fotos: [],

            },
            isLoading: false, // Defina isso como verdadeiro quando estiver carregando
            loadingMessage: "Carregando dados...",
            albumMessage: "Cadastrado com sucesso...",
            ifalbum: false,
            albums: [],
        }
    },
    computed: {
        store() {
            return store
        },
    },
    created() {
        this.salvealbum();
    },
    methods: {
        validateOnBack: Boolean,
        ...mapActions(["CreateAlbum"]),
        ...mapGetters(["GetToken"]),


        handleFileChange(event) {
            const maxFileCount = 5; // Define o número máximo de arquivos permitidos

            if (event.target.files.length > maxFileCount) {
                alert(`Você pode selecionar no máximo ${maxFileCount} arquivos.`);
                event.target.value = ''; // Limpa a seleção
            }

            this.album.Fotos = event.target.files


        },
        handleFileChange2(event) {
            const maxFileCount = 5; // Define o número máximo de arquivos permitidos

            if (event.target.files.length > maxFileCount) {
                alert(`Você pode selecionar no máximo ${maxFileCount} arquivos.`);
                event.target.value = ''; // Limpa a seleção
            }


            this.album.FotoCapa = event.target.files[0]

        },


        async CriarAlbum() {
            this.isLoading = true;
            const album = new FormData();

            for (let i = 0; i < this.album.Fotos.length; i++) {
                album.append('portifolioPhotos[]', this.album.Fotos[i]);
            }

            album.append("title", this.album.Titulo);
            album.append("portifolioCover", this.album.FotoCapa);
            album.append("description", this.album.Texto);
            // album.append("portifolioPhotos[]", this.album.Fotos);

            const avatarPayload = {
                token: this.GetToken(),
                album: album
            };

            try {

                await this.CreateAlbum(avatarPayload)
                // alert(`Album Cadastrado com sucesso`);
                this.isLoading = false;
                this.ifalbum = true;
                console.log(this.isLoading, "loading")

            } catch (error) {
                console.log(error);
            }





        },


        salvealbum() {
            if (store.getters.StatealbumMe != undefined || store.getters.StatealbumMe != null) {
                this.albums = store.getters.StatealbumMe;
            }
        },


        sair() {
            this.ifalbum = false;
        },


















        teste() {
            console.log(this.album.Fotos)
        }
    },

}
</script>

<style scoped></style>