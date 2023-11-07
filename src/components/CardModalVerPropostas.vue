<template>
    <!-- Modal -->
    <div class="modal fade" :id="'VerPropostas' + idModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Propostas Recebidas:</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" style="overflow-y: auto;height: 80vh;">

                    <div class="d-flex justify-content-center">


                        <div class="">
                            <div class="card mt-5" style="width: 90vh;">
                                <Card>
                                    <template #title>
                                        <AvatarComponent />


                                        <div class="d-flex justify-content-between" style="width: 90%;">

                                            <div>

                                                <text class="fst-italic">{{ valorServico.contratante.Nome_Completo }}</text>
                                                <p class="fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">
                                                    Profissão:
                                                    Programador
                                                </p>
                                            </div>
                                            <div class="">

                                                <h6 class="" style="font-size: 15px;">
                                                    <font-awesome-icon class="me-1" icon="money-bill" />R$: {{
                                                        valorServico.servicoInfo.Estimativa_Valor }}
                                                </h6>
                                                <h6 class="fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">
                                                    Remoto {{
                                                        valorServico.servicoInfo.Remoto_Presencial }}
                                                </h6>
                                            </div>
                                        </div>
                                    </template>
                                    <template #content>
                                        <div class="d-flex justify-content-between" style="border-bottom: 1px solid black;">
                                            <div>

                                                <h6 class="fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">
                                                    Data de
                                                    Publicação:
                                                </h6>
                                                <h6>
                                                    26/09/2023
                                                </h6>
                                            </div>
                                            <div>

                                                <h6 class="fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">
                                                    Data de Inicio:
                                                </h6>
                                                <h6>
                                                    {{ valorServico.servicoInfo.Data_Inicio }}
                                                </h6>
                                            </div>
                                            <div>

                                                <h6 class="fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">
                                                    Data de Termino:
                                                </h6>
                                                <h6>
                                                    {{ valorServico.servicoInfo.Estimativa_de_termino }}
                                                </h6>
                                            </div>
                                        </div>










                                        <div class="d-flex justify-content-between">
                                            <p class="text-info">
                                                Cidade:
                                            </p>

                                            <p class="text-info">
                                                {{ valorServico.localidade.Cidade }}
                                            </p>

                                        </div>
                                        <div class="d-flex justify-content-between">
                                            <p class="text-info">
                                                Estado:
                                            </p>

                                            <p class="text-info">
                                                {{ valorServico.localidade.Estado }}
                                            </p>

                                        </div>
                                        <div class="d-flex justify-content-between">
                                            <p class="text-info">
                                                Bairro:
                                            </p>

                                            <p class="text-info">
                                                {{ valorServico.localidade.Bairro }}
                                            </p>

                                        </div>



                                        <div class="d-flex justify-content-between">


                                            <p>
                                                Estimativa de Idade:
                                            </p>


                                            <p>
                                                {{ valorServico.servicoInfo.Estimativa_Idade }}
                                            </p>

                                        </div>



                                        <div class="d-flex justify-content-between">

                                            <p class="text-success">
                                                Propostas enviadas:
                                            </p>
                                            <p class="text-success">
                                                35
                                            </p>
                                        </div>




                                        <div class="d-flex justify-content-between">





                                        </div>



                                        <p class="card-text border-top border-bottom border-black">{{
                                            valorServico.servicoInfo.Desc }}
                                        </p>




                                        <div class="border-bottom border-black ">
                                            <h4>

                                                Habilidade
                                            </h4>


                                            <div class="">

                                                <ul class="d-flex gap-4 flex-wrap">
                                                    <li v-for="(skill, index) in valorServico.servicoSkills"
                                                        :key="skill[index]">
                                                        {{ skill.Habilidade }}
                                                    </li>

                                                </ul>
                                            </div>


                                        </div>
                                        <div class="border-bottom border-black ">
                                            <h4>

                                                Profissão:
                                            </h4>


                                            <div class="">

                                                <ul class="d-flex gap-4 flex-wrap">
                                                    <li v-for="(skill, index) in valorServico.servicoProfessions"
                                                        :key="skill[index]">
                                                        {{ skill.Profissao }}
                                                    </li>

                                                </ul>
                                            </div>


                                        </div>








                                    </template>
                                </Card>
                            </div>
























                        </div>

                    </div>


                    <div class=" d-flex  flex-wrap justify-content-center ">

                        <div class="card mt-5 " style="max-width: 100vh; width: 90%;" v-for="(proposta, index) in Propostas"
                            :key="proposta.idtb_proposta">
                            <Card>

                                <template #title>


                                    <div class="d-flex">
                                        <avatar :source="avatar[index]" height="50px" width="50px" />

                                        <div class=" ms-3 " style="width: 90%;">

                                            <div>

                                                <text class="fst-italic">Nome de perfil</text>

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
                                                    ${{ proposta.Valor_Proposta }}
                                                </h3>

                                            </div>


                                            <div>

                                                <h4 class="fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">
                                                    Data de
                                                    Publicação:
                                                </h4>
                                                <h4>
                                                    {{ proposta.Data_Proposta }}
                                                </h4>
                                            </div>
                                        </div>



                                        <!-- {{ this.getInfoPrestadorID(proposta.tb_prestador_idtb_prestador) }}
                                        {{ Prestadores }} -->


                                        <div class="border-bottom border-black ">
                                            <h4>

                                                Profissão
                                            </h4>


                                            <div class="">

                                                <ul class="d-flex gap-4 flex-wrap" v-for="Prestado in Prestadores[index]"
                                                    :key="Prestado">
                                                    <li v-for="skill in Prestado.prestadorProfessions" :key="skill">
                                                        {{ skill.Profissao }}

                                                    </li>


                                                </ul>
                                            </div>


                                        </div>












                                        <div class="border-bottom border-black mt-3">
                                            <h4>

                                                Habilidade
                                            </h4>


                                            <div class="">

                                                <ul class="d-flex gap-4 flex-wrap" v-for="Prestado in Prestadores[index]"
                                                    :key="Prestado">
                                                    <li v-for="skill in Prestado.prestadorSkills" :key="skill">
                                                        {{ skill.Habilidade }}
                                                    </li>


                                                </ul>
                                            </div>


                                        </div>




                                        <p class="p-2 mt-4 ">
                                            {{ proposta.Comentario }}


                                        </p>
                                        <div class="d-flex flex-row-reverse">
                                            <button class="btn btn-outline-success" type="submit"
                                                @click="aceitarProposta(proposta.idtb_proposta)"
                                                :disabled="ifAceitar">Aceitar
                                                Proposta</button>
                                        </div>
                                    </div>
                                </template>
                            </Card>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sair</button>
                    <!-- <button type="button" class="btn btn-primary">Understood</button> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
// import loading from "@/components/Loading.vue"
import store from "@/store";
import avatar from "@/components/AvatarComponent.vue"

export default {
    name: "CardModalVerPropostas",
    components: {
        avatar
    },
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
            Propostas: null,
            avatar: [],
            Prestadores: [],
            ifAceitar: false,
        }
    },
    component: {
        store() {
            return store
        },
    },
    created() {
        this.getinfos();
        this.getPropostas();

    },
    methods: {
        validateOnBack: Boolean,
        ...mapActions(["GetProposta", "getInfoPrestadorID", "AceitarProposta", "getAvatarNoToken"]),
        ...mapGetters(["GetToken"]),
        ...mapMutations(["infosPropostaAceita", "LimparinfosPropostaAceita"]),

        getinfos() {




            this.valorServico = this.infoServico


        },
        async getPropostas() {


            const Payload = {
                id: this.idModal,
                token: this.GetToken()
            }


            try {
                await this.GetProposta(Payload)
                this.LimparinfosPropostaAceita([])
                this.Propostas = []
                this.Propostas = store.getters.StateGetProposta
                console.log(this.Propostas, "jjjjjjjjjjjjjjjjjjj")
                this.Prestadores = []
                // console.log(this.Propostas.length, "TRueeeeeeeeeeeeeee")
                for (let index = 0; index < this.Propostas.length; index++) {

                    const id = this.Propostas[index].tb_prestador_idtb_prestador

                    await this.getInfoPrestadorID(id)

                    try {
                        await this.getAvatarNoToken(this.Propostas[index].tb_prestador_tb_user_idtb_user)

                        this.avatar.push(store.getters.StateAvatarId)
                    } catch (error) {
                        console.log(error)
                        this.avatar.push(null)

                    }


                    const valor = []

                    valor.push(store.getters.StatePrestadorID)

                    this.Prestadores[index] = valor



                }
                for (let index = 0; index < this.Propostas.length; index++) {
                    if (this.Propostas[index].Proposta_Aceita == 1) {
                        // console.log("chamando", index)
                        // console.log(this.Propostas[index].Proposta_Aceita)
                        // console.log("TRueeeeeeeeeeeeeee")
                        const valor = []

                        this.ifAceitar = true


                        valor.push({
                            id: this.idModal, proposta: this.Propostas[index], prestador: this.Prestadores[index][0]

                        })
                        this.infosPropostaAceita(valor)
                        // console.log(store.getters.StateInfoPropostaAceita)
                    }

                }


            } catch (error) {
                console.log(error)
            }
        },
        async aceitarProposta(id) {

            const PayLoad = {
                id: id,
                token: this.GetToken()
            }


            try {
                await this.AceitarProposta(PayLoad)
                await this.getPropostas()
                this.ifAceitar = true

            } catch (error) {
                console.log(error)
            }
        },


    },


}
</script>

<style scoped></style>