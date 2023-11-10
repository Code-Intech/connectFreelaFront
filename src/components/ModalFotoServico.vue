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
                    <div :id="'carouselExample' + modalFotoId" class="carousel slide" v-if="iffoto">
                        <div class="carousel-inner" style="">
                            <div class="carousel-item" :class="[index < 1 ? 'active' : '']"
                                v-for="(fotos, index) in foto.fotos" :key="fotos[index]">
                                <img :src="fotos.image_url" class="d-block w-100" alt="">
                            </div>


                        </div>
                        <button class="carousel-control-prev" type="button"
                            :data-bs-target="'#carouselExample' + modalFotoId" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button"
                            :data-bs-target="'#carouselExample' + modalFotoId" data-bs-slide="next">
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
            foto: [],
            iffoto: false
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
        this.getfoto()
    },
    methods: {
        validateOnBack: Boolean,
        ...mapActions(["getFotosServico"]),
        ...mapGetters(["GetToken"]),


        async getfoto() {



            const payload = {
                id: this.modalFotoId,
                token: this.GetToken()
            }



            try {
                await this.getFotosServico(payload)
                this.foto = store.getters.StateFotosServico
                this.iffoto = true
            } catch (error) {
                console.log()
                this.iffoto = false
            }


        },



    }

}
</script>

<style scoped></style>