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
                                    {{ albomModal }}

                                    <div class="d-flex align-items-center">
                                        <div class="flex-grow-1 ms-3">
                                            Titulo: Calango lindo </div>
                                    </div>

                                    <div class="input-group p-3 ">
                                        <span class="input-group-text " id="inputGroup-sizing-default">Titulo</span>
                                        <input type="text" class="form-control " aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-default"
                                            :value="albomModal.portifolio.Titulo">
                                    </div>


                                    <div class="d-flex align-items-center">
                                        <div class="flex-grow-1 ms-3">
                                            Sua Capa </div>
                                    </div>



                                    <div class="d-flex justify-content-center">

                                        <!-- Card -->
                                        <div class="card  m-2 border border-black border-1" style="width: 25rem;">


                                            <div class="border-bottom border-black border-1">
                                                <img :src="albomModal.portifolio.Capa" class="card-img-top" alt="">

                                            </div>

                                        </div>
                                    </div>


                                    <div class="m-3 border-bottom border-2 border-black">

                                        <div class="input-group mb-3">
                                            <input type="file" class="form-control" id="inputGroupFile02">
                                            <label class="input-group-text" for="inputGroupFile02">Upload</label>
                                        </div>
                                    </div>


                                    <h6 class="ms-3 mt-4">
                                        texto
                                    </h6>

                                    <div class="form-floating m-3">
                                        <textarea class="form-control mb-3" placeholder="Leave a comment here"
                                            id="floatingTextarea2" style="height: 100px"
                                            :value="albomModal.portifolio.Descricao"></textarea>
                                        <label for="floatingTextarea2">Comments</label>
                                    </div>


                                    <div class="m-3 mb-3 border-bottom border-2 border-black">
                                        <div class="d-flex justify-content-end">

                                            <h5>
                                                Salvar informações do Album
                                            </h5>
                                        </div>
                                        <div class="d-flex justify-content-end">

                                            <button class="btn btn-success mb-3 ">
                                                Salvar
                                            </button>
                                        </div>
                                    </div>



                                    <h6 class="ms-3">
                                        Suas Imagens
                                    </h6>



                                    <div class="card-group flex-row alling-center mt-3 g-4 d-flex justify-content-center">


                                        <div class="col" v-for="(photo) in albomModal.photos" :key="photo.idtb_img_video">

                                            <!-- Card -->
                                            <div class="card  m-2 border border-black border-1" style="width: 18rem;">


                                                <div class="border-bottom border-black border-1">
                                                    <img :src="photo.Img" class="card-img-top" alt="">

                                                </div>
                                                <div class="card-body d-grid gap-2">

                                                    <button type="button" class="btn btn-danger"><font-awesome-icon
                                                            icon="trash" :value="photo.idtb_img_video" />
                                                        Deletar</button>
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
                                                id="inputGroupFile04" aria-describedby="inputGroupFileAddon04"
                                                aria-label="Upload">
                                            <button class="btn btn-outline-secondary btn-success text-white" type="submit"
                                                id="inputGroupFileAddon04">Enviar</button>
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