<template>
    <!-- Modal -->
    <div class="modal fade" :id="'PropostasAceita' + idModal" data-bs-backdrop="static" data-bs-keyboard="false"
        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Proposta Aceita</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">


                    <div class=" ">

                        <div class=" mt-5 " style="max-width: 100vh; width: 100% ;" v-for="valores in valor "
                            :key="(valores)">




                            <div class="d-flex">

                                <avatar :source="avatar" />


                                <div class=" ms-3 " style="width: 90%;">

                                    <div v-for="(nome, index) in infoprestador" :key="nome[index]">

                                        <h5 class="fst-italic">{{ nome.Nome_completo }}</h5>


                                    </div>

                                </div>
                            </div>

                            <div class="mt-3">

                                <div class="d-flex justify-content-between">
                                    <div class="d-flex">

                                        <h2 class="text-success ">
                                            Valor:
                                        </h2>
                                        <h3 class=" ms-2 mt-1 text-success">
                                            ${{ valores.Valor_Proposta }}
                                        </h3>

                                    </div>


                                    <div>

                                        <h4 class="fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">
                                            Data de
                                            Publicação:
                                        </h4>
                                        <h4>
                                            26/09/2023
                                        </h4>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between">

                                    <div class="d-flex">

                                        <h3 class=" ">
                                            Nome da Empresa:
                                        </h3>
                                        <h4 class=" ms-2 mt-1 " v-for="(nomeEmpresa, index) in infoprestador"
                                            :key="nomeEmpresa[index]">
                                            {{ nomeEmpresa.Nome_Empresa }}
                                        </h4>

                                    </div>
                                    <div class="d-flex">

                                        <h3 class=" ">
                                            CNPJ:
                                        </h3>
                                        <h4 class=" ms-2 mt-1 " v-for="(cnpj, index) in infoprestador" :key="cnpj[index]">
                                            {{ cnpj.CNPJ }}
                                        </h4>

                                    </div>
                                </div>
                                <div class="d-flex justify-content-between">

                                    <div class="d-flex">

                                        <h3 class=" ">
                                            Email:
                                        </h3>
                                        <h4 class=" ms-2 mt-1 " v-for="(Email, index) in infoprestador" :key="Email[index]">
                                            {{ Email.Email }}
                                        </h4>

                                    </div>
                                    <div class="d-flex">

                                        <h3 class=" ">
                                            Telefone:
                                        </h3>
                                        <h4 class=" ms-2 mt-1 " v-for="(Telefone, index) in infoprestador"
                                            :key="Telefone[index]">
                                            {{ Telefone.Telefone }}
                                        </h4>

                                    </div>
                                </div>





                                <div class="border-bottom border-black ">
                                    <h4>

                                        Profissão
                                    </h4>


                                    <div class="">

                                        <ul class="d-flex gap-4 flex-wrap">
                                            <li v-for="valores, index in prestador.prestadorProfessions"
                                                :key="valores[index]">
                                                {{ valores.Profissao }} - Experiencia: {{ valores.Experiencia }}
                                                (anos)
                                            </li>


                                        </ul>
                                    </div>


                                </div>



                                <div class="border-bottom border-black mt-3">
                                    <h4>

                                        Habilidade
                                    </h4>


                                    <div class="">

                                        <ul class="d-flex gap-4 flex-wrap">
                                            <li v-for="valores, index in prestador.prestadorSkills" :key="valores[index]">
                                                {{ valores.Habilidade }}
                                            </li>

                                        </ul>
                                    </div>


                                </div>



                                <p class="p-2 mt-4 ">
                                    {{ valores.Comentario }}


                                </p>


                            </div>



                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sair</button>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Avaliar">Avaliar
                        Prestador</button>
                </div>
            </div>
        </div>
    </div>


    <CardAvaliar />
</template>

<script>
import CardAvaliar from "@/components/CardAvaliar";
import store from "@/store";
import { mapActions, mapGetters, mapMutations } from 'vuex'
import avatar from "@/components/AvatarComponent.vue"
export default {
    name: "CardModalPropostaAceita",
    props: {
        idModal: {
            type: String,
            require: true,
        },
        infoServico: {
            type: Array,
            require: true
        }
    },
    data() {
        return {
            valorServico: [],
            valor: [],
            prestador: [],
            infoprestador: [],
            avatar: null,
        }
    },
    components: {
        CardAvaliar,
        avatar,
    },
    component: {
        store() {
            return store
        },
    },
    created() {
        this.getinfos();
        this.getPropostaAceita()
    },
    methods: {
        validateOnBack: Boolean,
        ...mapActions(["GetPropostaAceita", "getInfoPrestadorID", "getAvatarNoToken", ""]),
        ...mapGetters(["GetToken"]),
        ...mapMutations(["", ""]),
        getinfos() {

            // const valorProposta = []






            if (store.getters.StateServico != null || store.getters.StateServico != undefined) {

                this.valorServico = store.getters.StateServico
            }



        },

        async getPropostaAceita() {

            const payload = {
                id: this.idModal,
                token: await this.GetToken()
            }


            try {
                await this.GetPropostaAceita(payload)

                this.valor = store.getters.StateInfoPropostaAceita



                await this.getInfoPrestadorID(this.valor.proposta.tb_prestador_idtb_prestador)

                this.prestador = store.getters.StatePrestadorID

                this.infoprestador.push(this.prestador.prestadorInfo)
                try {
                    await this.getAvatarNoToken(this.valor.proposta.tb_prestador_tb_user_idtb_user)
                    this.avatar = store.getters.StateAvatarId
                } catch (error) {
                    console.log(error)
                    this.avatar = null
                }

            } catch (error) {
                console.log(error)
            }


        },


        tttt() {

        }

    },


}
</script>

<style scoped></style>