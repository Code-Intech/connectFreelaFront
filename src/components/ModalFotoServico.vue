<template>
    <!-- Modal Ver Album -->
    <div class="modal-dialog modal-fullscreen-xxl-down fade" tabindex="-1" aria-labelledby="veralbum" aria-hidden="true">
        <div class="modal-dialog  modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" :id="'verModalServicoImg' + modalId"></h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- {{ albomModal }} -->
                    <div class="carousel slide">
                        <div class="carousel-inner" style="max-height: 40rem;">
                            <div class="carousel-item active">
                                <img src="../assets/img2/img1.jpg" class="d-block w-100" alt="">
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/img2/img2.jpg" class="d-block w-100" alt="">
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/img2/img3.jpg" class="d-block w-100" alt="">
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/img2/img4.jpg" class="d-block w-100" alt="">
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/img2/img5.jpg" class="d-block w-100" alt="">
                            </div>

                        </div>
                        <button class="carousel-control-prev" type="button" :data-bs-target="'#carouselEx' + modalId"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" :data-bs-target="'#carouselEx' + modalId"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>


                    <div class="border-top border-2 border-black mt-3">
                        <p>
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
    name: "ModalFotoServico",
    props: {
        modalId: {
            type: String,
            require: true
        },
        fotoServicoModal: {
            type: Array,
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