<template>
    <!-- Modal Ver Album -->
    <div class="modal fade" :id="'veralbum' + modalId" tabindex="-1" aria-labelledby="veralbum" aria-hidden="true">
        <div class="modal-dialog  modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" :id="'veralbum' + modalId">{{ albomModal.portifolio.Titulo }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- {{ albomModal }} -->
                    <div id="carouselEx" class="carousel slide">
                        <div class="carousel-inner" style="max-height: 40rem;">
                            <div class="carousel-item active">
                                <img :src="albomModal.portifolio.Capa" class="d-block w-100" alt="">
                            </div>
                            <div class="carousel-item" v-for="(album) in albomModal.photos" :key="album.idtb_img_video">
                                <img :src="album.Img" class="d-block w-100" alt="">
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
                            {{ albomModal.portifolio.Descricao }}
                        </p>
                    </div>
                    <!-- <div class="border-top border-2 border-black mt-3">

                        <input type="date" name="" id="" v-model="albomModal.portifolio.created_at">
                    </div> -->
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sair</button>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from "@/store";
import { mapActions, mapGetters } from 'vuex'
// import loading from "@/components/Loading.vue"



export default {
    name: "ModalVerAlbum",
    props: {
        modalId: {
            type: String,
            require: true
        },
        albomModal: {
            type: Array,
            require: true
        },


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
    components: {
        // loading
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