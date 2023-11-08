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
                    <div class="col-sm-3 mb-3 mb-sm-0 m-3 " style="width: auto;">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-row mb-3 ">
                                    <Avatar class="" source="" />
                                    <h6 class="card-title d-flex align-content-center flex-wrap ms-3">
                                    </h6>

                                    <Star class="ms-2" stars="4.5" />
                                </div>

                                <div class="d-flex justify-content-between border-top border-black">

                                    <p class="">
                                        Valor da Hora de Serviço
                                    </p>
                                    <p class="">

                                    </p>
                                </div>

                                <div class="d-flex justify-content-between border-bottom border-black">

                                    <p class="">
                                        Valor da diaria
                                    </p>
                                    <p class="">

                                    </p>
                                </div>


                                <div class="border-top border-black  ">
                                    <div class="d-flex flex-row mt-1 overflow-y-auto border-bottom border-black"
                                        style="height: 110px;">
                                        <h6>
                                            Profissões:
                                        </h6>
                                        <h6 class="text-info ms-2">
                                            <div>
                                                <br>
                                            </div>
                                        </h6>

                                    </div>
                                    <div class="d-flex overflow-y-auto " style="max-height: 110px;">

                                        <ul>
                                            <li>
                                                <p class="m-0 text-success">

                                                </p>
                                            </li>
                                        </ul>



                                    </div>
                                </div>
                                <div class="mt-2 mb-2 border-top border-bottom border-black overflow-y-auto"
                                    style="height: 150px;">
                                    <p class="card-text"></p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <button @click="tttt">
                        ttttt
                    </button>

                    <!-- {{ idModal }} -->
                    {{ prestador }}
                    <div v-for="valores in valor " :key="(valores)">
                        {{ valores.Data_Proposta }}
                    </div>
                    <br><br><br>



                    <div class="d-inline-flex justify-content-center ">

                        <div class="card mt-5 " style="max-width: 100vh; width: 90% ;" v-for="valores in valor "
                            :key="(valores)">
                            <Card>
                                <template #title>



                                    <div class="d-flex">

                                        <AvatarComponent />


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






                                        <div class="border-bottom border-black ">
                                            <h4>

                                                Profissão
                                            </h4>


                                            <div class="">

                                                <ul class="d-flex gap-4 flex-wrap">
                                                    <!-- <li v-for="valores, index in valor.prestador.prestadorProfessions"
                                                        :key="valores[index]">
                                                        {{ valores.Profissao }}
                                                    </li> -->


                                                </ul>
                                            </div>


                                        </div>











                                        <div class="border-bottom border-black mt-3">
                                            <h4>

                                                Habilidade
                                            </h4>


                                            <div class="">

                                                <ul class="d-flex gap-4 flex-wrap">
                                                    <!-- <li v-for="valores, index in valor.prestador.prestadorSkills"
                                                        :key="valores[index]">
                                                        {{ valores.Habilidade }}
                                                    </li> -->

                                                </ul>
                                            </div>


                                        </div>




                                        <p class="p-2 mt-4 ">
                                            {{ valores.Comentario }}


                                        </p>


                                    </div>
                                </template>

                            </Card>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sair</button>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Avaliar">Avaliar
                        Prestadora</button>
                </div>
            </div>
        </div>
    </div>


    <CardAvaliar />
</template>

<script>
import CardAvaliar from "@/components/CardAvaliar";
// import store from "@/store";
// import { mapActions, mapGetters } from 'vuex'
// import loading from "@/components/Loading.vue"
import store from "@/store";
import { mapActions, mapGetters, mapMutations } from 'vuex'

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
        }
    },
    components: {
        CardAvaliar,
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
        ...mapActions(["GetPropostaAceita", "getInfoPrestadorID", "", ""]),
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
                token: this.GetToken()
            }


            try {
                await this.GetPropostaAceita(payload)

                this.valor = store.getters.StateInfoPropostaAceita




                await this.getInfoPrestadorID(this.valor.proposta.tb_prestador_idtb_prestador)

                this.prestador = store.getters.StatePrestadorID



            } catch (error) {
                console.log(error)
            }


        },


        tttt() {
            console.log(this.valor, "!!!!!!!!!!!!!!!!!!!!!!!!")

        }

    },


}
</script>

<style scoped></style>