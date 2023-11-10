<template>
    <div class="col-10 ">


        <div class="border border-2 rounded m-5">




            <div class="" style="border-bottom: 2px solid black;">



                <button class="btn btn-primary m-2" type="button" data-bs-toggle="modal" data-bs-target="#criarportfolio">
                    Criar Portfolio
                </button>




            </div>





            <div class="" style="min-height: 200px;" v-if="ifgetalbum">
                <div class=" m-4 d-flex flex-wrap p-1" id="" v-if="album != null">
                    <div v-for="(album, index) in albums" :key="album.portifolio.idtb_portifolio" class="m-2">
                        <div class="card" style="width: 20rem; ">
                            <img src="" class="card-img-top" alt="">
                            <div class="card-body">
                                <h5 class="card-title">{{ album.portifolio.Titulo }}</h5>
                                <div :id="'carouselExample' + album.portifolio.idtb_portifolio" class="carousel slide">

                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img :src="album.portifolio.Capa" class="d-block w-100" alt="">
                                        </div>
                                        <div class="carousel-item" v-for="(photo) in album.photos"
                                            :key="photo.idtb_img_video">
                                            <img :src="photo.Img" class="d-block w-100" alt="">
                                        </div>

                                        <!-- Não Apagar -->
                                        <!-- <div class="carousel-item" v-for="(photo, index) in album.photos"
                                            :key="photo.idtb_img_video" :class="[index < 1 ? 'active' : '']">
                                            <img :src="photo.Img" class="d-block w-100" alt="">
                                        </div>Não Apagar  -->

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

                                    <button class="btn btn-danger mt-3"
                                        @click="DellAlbum(album.portifolio.idtb_portifolio), deletarFoto(index)">
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
        <div class="modal fade" id="criarportfolio" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
            data-bs-backdrop="static">
            <div class="modal-dialog modal-xl  modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Criar Portfólio</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                            @click="sair()"></button>
                    </div>
                    <div class="modal-body">

                        <div class=" ">
                            <div class=" ">
                                <div class="" style="width: 100%;">
                                    <div class="border-bottom border-black border-2  " style="min-height: 15rem; ;">
                                        <loading v-if="isLoading" :message="loadingMessage" />



                                        <div class="m-1  d-flex justify-content-center">
                                            <h5 class="h5 ">Seu Portfólio</h5>
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
                                    <div class="">
                                        <div>


                                            <h6>
                                                Carregue Suas Imagens
                                            </h6>


                                            <div class="input-group">
                                                <input type="file" class="form-control btn btn-outline-primary"
                                                    id="inputGroupFile04" aria-describedby="inputGroupFileAddon04"
                                                    aria-label="Upload" multiple @change="handleFileChange">

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div v-if="ifalbum">
                            {{ albumMessage }}
                        </div>
                        <CardErroMessage v-if="erroIf" :errorMessageCard="errorMessage"></CardErroMessage>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                            @click="sair()">Sair</button>
                        <button type="button" class="btn btn-primary" @click="CriarAlbum()">Salvar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from "@/store";
import { mapActions, mapGetters } from 'vuex'
import ModalVerAlbum from "@/components/ModalVerAlbum.vue"
import ModalEditarAlbum from "@/components/ModalEditarAlbum.vue"
import CardErroMessage from "@/components/CardErroMessage.vue"
import loading from "@/components/Loading.vue"


export default {
    name: "PortfolioPerfilComponent",
    components: {
        ModalVerAlbum,
        ModalEditarAlbum,
        loading,
        CardErroMessage
    },
    data() {
        return {
            album: {
                Titulo: "",
                FotoCapa: null,
                Texto: "",
                Fotos: [],

            },
            isLoading: false, // Defina isso como verdadeiro quando estiver carregando
            loadingMessage: "Carregando dados...",
            albumMessage: "Cadastrado com sucesso...",
            ifalbum: false,
            albums: [],
            errorMessage: null,
            erroIf: false,
            ifgetalbum: false,
        }
    },
    computed: {
        store() {
            return store
        },
    },
    created() {
        this.salvealbum();
        this.getalbum();
    },
    methods: {
        validateOnBack: Boolean,
        ...mapActions(["CreateAlbum", "dellAlbum", "showError", "GetAlbum"]),
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
                await this.getalbum()
                this.salvealbum()

            } catch (error) {
                this.isLoading = false;
                const message = error.request.response

                this.errorMessage = JSON.parse(message)

                if (this.errorMessage.error.message == "Prestador não existe") {
                    this.errorMessage = ["Cadastre-Se Como Prestador Antes!! "]
                    this.erroIf = true
                    setTimeout(() => {
                        this.erroIf = false
                    }, 4000);
                }

                this.erroIf = true
                setTimeout(() => {
                    this.erroIf = false
                }, 4000);


            }





        },
        async DellAlbum(id) {


            const avatarPayload = {
                token: this.GetToken(),
                id: id
            };

            try {

                await this.dellAlbum(avatarPayload)
                await this.getalbum()
                this.albums = store.getters.StatealbumMe;

            } catch (error) {
                console.log(error);
            }





        },


        async getalbum() {
            try {

                await this.GetAlbum(await this.GetToken())
                this.ifgetalbum = true
            } catch (error) {
                console.log(error)
                this.ifgetalbum = false
            }
        },

        deletarFoto(index) {
            // Remova a foto do array com base no índice
            this.albums.splice(index, 1);

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
        }
    },

}
</script>

<style scoped></style>
