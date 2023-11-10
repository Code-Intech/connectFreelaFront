<template>
    <!-- Modal -->
    <div class="modal fade" id="PropostasEnvidas" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Proposta Aceita</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div v-if="idProposta">
                        <h3>
                            "Ainda não foi enviada nenhuma proposta até o momento."
                        </h3>
                    </div>
                    <div class="d-inline-flex justify-content-center flex-wrap">

                        <div class="card mt-5 d-flex flex-wrap" style="max-width: 100vh; width: 90%;"
                            v-for="(infos, index) in propostas.proposta" :key="(infos)">
                            <Card>
                                <template #title>


                                    <div class="d-flex ">
                                        <AvatarComponent :source="avatar[index]" />


                                        <div class=" ms-3 " style="width: 90%;">

                                            <div>

                                                <text class="fst-italic">{{ contratante[index] }}</text>

                                            </div>

                                        </div>
                                    </div>
                                </template>
                                <template #content>
                                    <div>

                                        <div class="d-flex justify-content-between">
                                            <div class="d-flex">

                                                <h2 class="text-success ">
                                                    Valor:
                                                </h2>
                                                <h3 class=" ms-2 mt-1 text-success">
                                                    ${{ infos.Valor_Proposta }}
                                                </h3>

                                            </div>


                                            <div>

                                                <h4 class="fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">
                                                    Data de
                                                    Publicação:
                                                </h4>
                                                <h4>
                                                    {{ infos.Data_Proposta }}
                                                </h4>
                                            </div>
                                        </div>











                                        <p class="p-2 mt-4 ">
                                            {{ infos.Comentario }}


                                        </p>


                                    </div>
                                    <div class="border-top border-black">

                                        <button type="button" class="btn btn-primary mt-3 " data-bs-toggle="modal"
                                            data-bs-target="#Avaliar">Avaliar
                                            Contratante</button>
                                    </div>
                                </template>
                            </Card>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sair</button>

                </div>
            </div>
        </div>
    </div>


    <CardAvaliar />
</template>

<script>
import CardAvaliar from "@/components/CardAvaliar";
// import loading from "@/components/Loading.vue"
import { mapActions, mapGetters, mapMutations } from 'vuex'
import store from "@/store";
import AvatarComponent from "@/components/AvatarComponent.vue"


export default {
    name: "CardModalPropostasEnvidas",
    props: {

    },
    data() {
        return {
            propostas: [],
            Servico: [],
            contratante: [],
            avatar: [],
            idProposta: false,
        }
    },
    components: {
        CardAvaliar,
        AvatarComponent,
    },
    component: {
        store() {
            return store
        },
    },
    created() {
        this.getPropostas()
    },
    methods: {
        validateOnBack: Boolean,
        ...mapActions(["GetPropostaEnviadas", "getServicoID", "getAvatarNoToken", ""]),
        ...mapGetters(["GetToken"]),
        ...mapMutations(["", ""]),





        async getPropostas() {
            try {
                await this.GetPropostaEnviadas(this.GetToken())
                this.propostas = store.getters.StateInfoPropostaEnviadas

                this.Servico = []
                for (let index = 0; index < this.propostas.proposta.length; index++) {

                    await this.getServicoID(this.propostas.proposta[index].tb_servico_idtb_servico)

                    this.Servico.push(store.getters.StateServicoByID.infos
                    )
                    this.contratante.push(this.Servico[index].contratante.Nome_Completo)

                    try {
                        await this.getAvatarNoToken(this.Servico[index].servicoInfo.tb_contratante_tb_user_idtb_user)
                        const avata = store.getters.StateAvatarId
                        this.avatar.push(avata)

                    } catch (error) {
                        console.log(error)
                        const avata = null
                        this.avatar.push(avata)

                    }

                }


                this.idProposta = false
            } catch (error) {
                console.log(error)
                this.idProposta = true
            }
        },


        async getavatar(id) {

            try {
                await this.getAvatarNoToken(id)

                return store.getters.StateAvatarId
            } catch (error) {
                console.log(error)
                return null
            }
        },

    },


}
</script>

<style scoped></style>