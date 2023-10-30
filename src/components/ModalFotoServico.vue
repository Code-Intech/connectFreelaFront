<template>
    <!-- Modal Ver Album -->
    <div class="modal fade" :id="'FotoServico' + modalFotoId" tabindex="-1" aria-labelledby="veralbum" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" :id="'FotoServico'">Fotos do Serviço</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="row modal-body">
                    <!-- {{ albomModal }} -->
                    <div id="carouselExample" class="carousel slide" >
                        <div class="carousel-inner" style="max-height: 40rem; max-width: 60rem;">
                            <div class="carousel-item active">
                                <img src="https://fisiocarepet.com.br/wp-content/uploads/2022/02/cachorro.png" class="d-block" alt="">
                            </div>
                            <div class="carousel-item">
                                <img src="https://s2.glbimg.com/nvjFq8VRjyrpdQqaOeywz-5DFwY=/e.glbimg.com/og/ed/f/original/2021/08/27/captura_de_tela_2021-08-27_as_11.01.15.png" class="d-block" alt="">
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/img2/img3.jpg" class="d-block" alt="">
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/img2/img4.jpg" class="d-block" alt="">
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/img2/img5.jpg" class="d-block" alt="">
                            </div>

                        </div>
                        <button class="carousel-control-prev" type="button" :data-bs-target="'#carouselExample'"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" :data-bs-target="'#carouselExample'"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
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
    name: "ModalFotoServico",
    props: {
        modalFotoId: {
            type: String,
            require: true
        },


    },
    data() {
        return {

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

    methods: {
        validateOnBack: Boolean,
        ...mapActions(["CreateAlbum"]),
        ...mapGetters(["GetToken"]),
    }

}
</script>

<style scoped></style>