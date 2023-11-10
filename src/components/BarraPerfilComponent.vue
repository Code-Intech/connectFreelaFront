<template>
    <div class="col-2 border-4 border-top border-black p-0"
        style="min-height: 900px; background-color: var(--purple-tertiary);">
        <div class=" text-emphasis-secondary m-2      h-100 d-inline-block "
            style="background-color: var(--purple-quaternary); max-height: 880px; width: 95%;">

            <div class="d-flex mt-2">

                <div class="position-relative justify-content-center">
                    <!-- <img class="img-fluid border border-2 border-black" src="../assets/img/imagem-user.png" alt="">
                    <a href=""><font-awesome-icon class=" position-absolute bottom-0 end-0 bg-white" icon="pen" style="min-height: 1rem;min-width: 1rem; color: black;" /></a> -->
                    <Avatar class="img-fluid" :source="store.getters.StateAvatar" height="auto" width="500px"
                        :rounded="false" />
                </div>
                <div class="position-absolute opacity-75">
                    <img class="" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap"
                        src="../assets/img/lapis.svg" alt="" style="height:2rem; width:2rem;" />
                </div>
            </div>


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Foto de Perfil</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <h2>
                                Foto de Perfil
                            </h2>

                            <div class="justify-content-center" style="">
                                <Avatar :source="store.getters.StateAvatar" height="30rem" width="30rem" :rounded="false" />
                            </div>
                            <div style="margin-top: 5px">
                                <!-- Input de arquivo -->
                                <input type="file" ref="fileInput" @change="handleFileChange" />

                                <!-- Mostrar informações do arquivo selecionado (opcional) -->
                                <div v-if="selectedFile">
                                    <h4>Arquivo selecionado:</h4>
                                    <p>Nome: {{ selectedFile.name }}</p>
                                    <p>Tipo: {{ selectedFile.type }}</p>
                                    <p>Tamanho: {{ selectedFile.size }} bytes</p>
                                </div>
                            </div>










                        </div>
                        <div class="modal-footer">
                            <button @click="getFoto()" type="button" class="btn btn-primary">Salvar</button>
                        </div>
                    </div>
                </div>
            </div>


            <div class="mt-3" @click="$router.push({ path: '/perfil' })">
                <h5 class="text-white d-flex justify-content-start ms-3 "><font-awesome-icon icon="user" class="me-3" />
                    {{ nome }}
                </h5>
            </div>

            <div class="d-grid gap-2 mt-3">
                <button @click="$router.push({ path: '/perfilbeneficios' })"
                    class="btn btn-outline-primary text-white  border-white">Premium</button>
                <button @click="$router.push({ path: '/PerfilAvaliacao' })"
                    class="btn btn-outline-primary text-white  border-white">Avaliações</button>
                <button @click=" getalbum()" class="btn btn-outline-primary text-white  border-white">Portfólio</button>
                <button @click="$router.push({ path: '/' })"
                    class="btn btn-outline-primary text-white  border-white">Dashboard</button>
                <button @click="getServicoPropostas()" class="btn btn-outline-primary text-white  border-white">Ver
                    Propostas</button>
                <button @click="getServicoMeuServico()" class="btn btn-outline-primary text-white  border-white">Meus
                    Serviços</button>
                <button @click=" getskill()" class="btn btn-outline-primary text-white  border-white">Informações do
                    Prestador</button>

            </div>
        </div>
    </div>
</template>

<script>
import Avatar from "@/components/AvatarComponent.vue"
import store from "@/store";
import { mapActions, mapGetters } from 'vuex'
export default {
    name: "BarraPerfilComponent",
    components: {
        Avatar,
    },
    data() {
        return {
            nome: null,
            fotoData: {
                FTAvatar: "",
            },
            selectedFile: null,

        }
    },

    computed: {
        store() {
            return store
        },
    },
    created() {
        this.getNome();
    },
    methods: {
        validateOnBack: Boolean,
        ...mapActions(["getUser", "upInfoUser", "getSkills", "GetFoto", "getProfessions", "getcategory", "getInfoPrestador", "getInfoUser", "GetAlbum", "getInfoServico"]),
        ...mapGetters(["GetToken"]),

        async getFoto() {

            const foto = new FormData();

            foto.append("avatar", this.selectedFile);

            const avatarPayload = {
                token: await this.GetToken(),
                avatar: foto
            };

            try {
                await this.GetFoto(avatarPayload)
            } catch (error) {
                console.log(error);
            }
        },

        handleFileChange(event) {
            // Capturar o arquivo selecionado quando o usuário escolhe um arquivo
            this.selectedFile = event.target.files[0];
        },

        async getinfo() {
            try {
                await this.getInfoUser(await this.GetToken());
            } catch (error) {
                this.$router.push("/");
            }
        },
        async getskill() {



            const payload = {
                token: await this.GetToken()
            }
            try {

                await this.getInfoPrestador(payload);
                await this.getSkills(await this.GetToken());
                await this.getProfessions(await this.GetToken());
                await this.getcategory(await this.GetToken());
                setTimeout(() => {
                    // Função a ser executada após 2 segundos
                    this.$router.push({ path: '/ViewInfoPrestador' })
                }, 1000);
            } catch (error) {
                console.log(error)
            }




        },

        async getalbum() {
            try {

                const payload = {
                    token: await this.GetToken()
                }

                await this.GetAlbum(payload);


                this.$router.push({ path: '/PerfilPortfolio' })
            } catch (error) {
                console.log(error)
                this.$router.push({ path: '/PerfilPortfolio' })
            }
        },
        async getServicoMeuServico() {
            try {
                await this.getInfoServico(await this.GetToken());
                await this.getcategory(await this.GetToken());
                await this.getProfessions(await this.GetToken());
                await this.getSkills(await this.GetToken());
                this.$router.push({ path: '/MeuServico' })
            } catch (error) {

                this.$router.push({ path: '/MeuServico' })
            }
        },
        async getServicoPropostas() {
            try {
                await this.getInfoServico(await this.GetToken());
                this.$router.push({ path: '/ViewPropostaContratante' })
            } catch (error) {

                this.$router.push({ path: '/ViewPropostaContratante' })
            }
        },



        async getNome() {
            await this.getInfoUser(await this.GetToken());
            if (store.getters.StateEditUser.idtb_user > 0) {
                this.nome = store.getters.StateEditUser.Nome_completo
            }
        },

        teste() {
            console.log(this.nome)
        },

    },
}
</script>

<style scoped>
.btn:hover {
    background-color: var(--purple-primary);
}
</style>