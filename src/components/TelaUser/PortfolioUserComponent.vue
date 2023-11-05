<template>
    <div class="col-10 ">


        <div class="border border-2 rounded m-5">


            <div class="" style="min-height: 200px;">
                <div class=" m-4 d-flex flex-wrap p-1" id="" v-if="album != null">
                    <div v-for="(album) in albums" :key="album.portifolio.idtb_portifolio" class="m-2">
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



                                </div>
                            </div>
                        </div>


                        <ModalVerAlbum :modal-id="album.portifolio.idtb_portifolio" :albomModal="album" />

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


export default {
    name: "PortfolioUserComponent",
    components: {
        ModalVerAlbum,
    },
    props: {
        id: {
            type: String
        }
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
        }
    },
    computed: {
        store() {
            return store
        },
    },
    created() {
        this.salvealbum()
    },
    methods: {
        validateOnBack: Boolean,
        ...mapActions(["CreateAlbum", "dellAlbum", "showError", "GetAlbum"]),
        ...mapGetters(["GetToken"]),



        salvealbum() {
            if (store.getters.StatealbumMe != undefined || store.getters.StatealbumMe != null) {
                this.albums = store.getters.StatealbumMe;
            }
        },


    },

}
</script>

<style scoped></style>
