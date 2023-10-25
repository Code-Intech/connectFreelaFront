<template>
    <!-- Modal Editar Album -->
    <div class="modal fade" :id="'editarportfolio' + modalId" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true" data-bs-backdrop="static">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Editar Portfólio</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div class="d-flex justify-content-center mt-5">
                        <div class=" ">
                            <div class="card border-5  rounded-3"
                                style="max-width: 60rem; border-color: var(--purple-primary);">
                                <div class="border-bottom border-black border-2  " style="min-height: 15rem; ">

                                    <div class="m-1 rounded-3 d-flex justify-content-center"
                                        style="background-color: var(--purple-primary);">
                                        <h5 class="h5 text-white">Seu Portfólio</h5>
                                    </div>

                                    <div class="d-flex align-items-center">
                                        <div class="flex-grow-1 ms-3">
                                            Titulo: Calango lindo </div>
                                    </div>

                                    <div class="input-group p-3 ">
                                        <span class="input-group-text " id="inputGroup-sizing-default">Titulo</span>
                                        <input type="text" class="form-control " aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-default"
                                            :value="dadosModal.portifolio.Titulo">
                                    </div>


                                    <div class="d-flex align-items-center">
                                        <div class="flex-grow-1 ms-3">
                                            Sua Capa </div>
                                    </div>



                                    <div class="d-flex justify-content-center">

                                        <!-- Card -->
                                        <div class="card  m-2 border border-black border-1" style="width: 25rem;">


                                            <div class="border-bottom border-black border-1">
                                                <img :src="dadosModal.portifolio.Capa" class="card-img-top" alt="">

                                            </div>

                                        </div>
                                    </div>


                                    <div class="m-3 border-bottom border-2 border-black">

                                        <div class="input-group mb-3">
                                            <input type="file" class="form-control" id="inputGroupFile02"
                                                @change="adicionarCapa">
                                        </div>
                                    </div>


                                    <h6 class="ms-3 mt-4">
                                        texto
                                    </h6>

                                    <div class="form-floating m-3">
                                        <textarea class="form-control mb-3" placeholder="Leave a comment here"
                                            id="floatingTextarea2" style="height: 100px"
                                            :value="dadosModal.portifolio.Descricao"></textarea>
                                        <label for="floatingTextarea2">Comments</label>
                                    </div>


                                    <div class="m-3 mb-3 border-bottom border-2 border-black">
                                        <div class="d-flex justify-content-end">

                                            <h5>
                                                Salvar informações do Album
                                            </h5>
                                        </div>
                                        <div class="d-flex justify-content-end">

                                            <button class="btn btn-success mb-3 " @click="UpAlbum()">
                                                Salvar
                                            </button>
                                        </div>
                                    </div>



                                    <h6 class="ms-3">
                                        Suas Imagens
                                    </h6>



                                    <div class="card-group  mt-3 g-4 d-flex flex-wrap">


                                        <div class="" v-for="(photo, index) in dadosModal.photos"
                                            :key="photo.idtb_img_video">
                                            <!-- Card -->
                                            <div class="card m-2 border border-black border-1" style="width: 18rem;">
                                                <div class="border-bottom border-black border-1">
                                                    <img :src="photo.Img" class="card-img-top" alt="">
                                                </div>
                                                <div class="card-body d-grid gap-2">
                                                    <button type="button" class="btn btn-danger"
                                                        @click="deletarFoto(index, photo.idtb_img_video), DellFoto()">
                                                        <font-awesome-icon icon="trash" />
                                                        Deletar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>





                                    </div>





                                </div>
                                <div class="card-body">
                                    <div>


                                        <h6>
                                            Carregue Sua Imagem (Uma por vez)
                                        </h6>



                                        <div class="input-group">
                                            <input type="file" class="form-control btn btn-outline-primary"
                                                @change="adicionarFoto" :disabled="inputBloqueado" aria-label="Upload"
                                                ref="fileInput">
                                            <button class="btn btn-outline-secondary btn-success text-white" type="submit"
                                                id="inputGroupFileAddon04" @click=" AddFoto()"
                                                :disabled="inputBloqueado">Enviar</button>

                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sair</button>
                    <button type="button" class="btn btn-primary">Salvar</button>
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
    name: "ModalEditarAlbum",
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
                Texto: null,
                FotoCapa: null,

            },
            FotoCapa: null,
            dadosModal: [],
            isLoading: false, // Defina isso como verdadeiro quando estiver carregando
            loadingMessage: "Carregando dados...",
            albumMessage: "Cadastrado com sucesso...",
            ifalbum: false,
            albums: [],
            inputBloqueado: false,
            editaralbum: {
                foto: null,
                id: null,

            }
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
        this.dados();
        this.salvealbum();

    },
    methods: {
        validateOnBack: Boolean,
        ...mapActions(["CreateAlbum", "Delfoto", "addfoto", "getfotos", "GetAlbum", "upalbum"]),
        ...mapGetters(["GetToken"]),

        adicionarCapa(event) {
            // Lógica para adicionar a foto ao array
            // ...


            // Atualiza o objeto editaralbum.foto com a nova foto
            this.FotoCapa = event.target.files[0];
            // Bloqueie o input se houver 5 fotos no array
            // if (this.dadosModal.photos.length >= 5) {
            //     this.inputBloqueado = true;
            //     this.$refs.fileInput.value = null;

            // }
        },

        async UpAlbum() {
            this.isLoading = true;
            const album = new FormData();



            album.append("title", this.dadosModal.portifolio.Titulo);
            album.append("portifolioCover", this.FotoCapa);
            album.append("description", this.dadosModal.portifolio.Descricao);
            // album.append("portifolioPhotos[]", this.album.Fotos);

            const avatarPayload = {
                token: this.GetToken(),
                album: album,
                id: this.dadosModal.portifolio.idtb_portifolio
            };
            const getPayload = {
                token: this.GetToken(),
                id: this.dadosModal.portifolio.idtb_portifolio
            };

            try {

                await this.upalbum(avatarPayload)

                // alert(`Album Cadastrado com sucesso`);
                this.isLoading = false;
                this.ifalbum = true;
                console.log(this.isLoading, "loading")
                await this.getfotos(getPayload)
                this.FotoCapa = this.dadosModal.portifolio.Capa

            } catch (error) {
                console.log(error);
            }





        },
        async AddFoto() {

            console.log(this.editaralbum.foto)
            this.isLoading = true;
            const foto = new FormData();



            foto.append("photo", this.editaralbum.foto[0]);

            const Payload = {
                token: this.GetToken(),
                photo: foto,
                id: this.editaralbum.id
            };
            const getPayload = {
                token: this.GetToken(),
                id: this.editaralbum.id
            };
            try {

                await this.addfoto(Payload)
                // alert(`Album Cadastrado com sucesso`);
                this.isLoading = false;
                this.ifalbum = true;
                console.log(this.isLoading, "loading")
                await this.getfotos(getPayload)
                this.dadosModal = store.getters.StatealbumMe;
                console.log(store.getters.StatealbumMe, "dadossss")
                if (this.dadosModal.photos.length >= 5) {
                    this.inputBloqueado = true;
                }

            } catch (error) {
                console.log(error);
            }





        },
        async DellFoto() {


            const avatarPayload = {
                token: this.GetToken(),
                id: this.editaralbum.id
            };

            try {

                await this.Delfoto(avatarPayload)
                // alert(`Album Cadastrado com sucesso`);
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



        adicionarFoto(event) {
            // Lógica para adicionar a foto ao array
            // ...


            // Atualiza o objeto editaralbum.foto com a nova foto
            this.editaralbum.foto = event.target.files;
            this.editaralbum.id = this.dadosModal.portifolio.idtb_portifolio;
            // Bloqueie o input se houver 5 fotos no array
            if (this.dadosModal.photos.length >= 5) {
                this.inputBloqueado = true;
                this.$refs.fileInput.value = null;

            }
        },
        deletarFoto(index, idtb_img_video) {
            // Remova a foto do array com base no índice
            this.dadosModal.photos.splice(index, 1);

            // Libere o input de fotos se houver menos de 5 fotos no array
            if (this.dadosModal.photos.length < 5) {
                this.inputBloqueado = false;
            }

            // Aqui você pode adicionar a lógica para deletar a foto no backend usando o ID idtb_img_video
            this.editaralbum.id = idtb_img_video
        },


        async dados() {
            this.dadosModal = this.albomModal
            this.FotoCapa = this.dadosModal.portifolio.Capa
            if (this.dadosModal.photos.length >= 5) {
                this.inputBloqueado = true;
            }
            await this.GetAlbum(this.GetToken())
        },











        teste() {
            console.log(this.album.Fotos)
        }
    },

}
</script>

<style scoped></style>