
<template>
    <div class="col-10 ">
        <div class="border border-2 rounded m-3">
            <div>
                <button class="btn btn-primary m-4" data-bs-toggle="modal" data-bs-target="#PropostasEnvidas">
                    Propostas Enviadas
                </button>
            </div>
            <div class="m-2">
                <div class="">
                    <!-- {{ valorServico }} -->
                    <div class="">
                        <div class="">
                            <div v-if="ifServico == false">
                                <h3>
                                    Nem Serviço Cadastrado!!.
                                </h3>
                            </div>
                            <div class="d-flex flex-wrap" v-if="ifServico">
                                <div class="card m-auto mt-4" style="width: 25rem;" v-for="(servico, index) in valorServico"
                                    :key="servico[index]">
                                    <div class="card-header border-black d-flex justify-content-between">
                                        <div>
                                            <h5 class="text-center">{{ servico.contratante.Nome_Completo }}</h5>

                                        </div>
                                        <div>
                                            <h6 class="fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">Data
                                                de
                                                Publicação:
                                            </h6>
                                            <h6 class="fst-italic" style="font-size: smaller;">
                                                12/10/2003
                                            </h6>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="container">
                                            <div class="row">

                                                <div class="col-7">

                                                    <h6 class="fst-italic" style="font-size: smaller;">
                                                        <font-awesome-icon class="me-1" icon="money-bill" /> R$:{{
                                                            servico.servicoInfo.Estimativa_Valor }}
                                                    </h6>
                                                </div>

                                                <div class="col">
                                                    <h6 class="fst-italic text-end" style="font-size: smaller;">
                                                        50
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="border-bottom border-black justify-content-start">
                                            <div class="container">
                                                <div class="row">

                                                    <div class="col-7">
                                                        <h6 class="fst-italic"
                                                            style="font-size: smaller; color:rgb(103, 102, 102)">
                                                            Data de Início:
                                                        </h6>
                                                        <h6 class="fst-italic" style="font-size: smaller;">
                                                            11/11/1111
                                                        </h6>
                                                    </div>

                                                    <div class="col">
                                                        <h6 class="fst-italic"
                                                            style="font-size: smaller; color:rgb(103, 102, 102)">
                                                            Estimativa de Término:
                                                        </h6>
                                                        <h6 class="fst-italic" style="font-size: smaller;">
                                                            22/22/22
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="container">
                                            <div class="row">
                                                <div class="d-flex justify-content-between">
                                                    <div class="d-flex ">
                                                        <p class=" text-success ">
                                                            Cidade:
                                                        </p>
                                                        <p class=" text-right ps-2">
                                                            {{ servico.localidade.Cidade }}
                                                        </p>
                                                    </div>
                                                    <div class="d-flex">
                                                        <p class=" text-success ps-2">
                                                            Estado:
                                                        </p>
                                                        <p class=" text-right ps-2">
                                                            {{ servico.localidade.Estado }}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div class="d-flex">
                                                    <p class=" text-success">
                                                        Bairro:
                                                    </p>
                                                    <p class=" text-right ps-2">

                                                        {{ servico.localidade.Bairro }}
                                                    </p>
                                                </div>

                                                <!-- <div class="row">
                                    <p class="col-8 text-success">
                                        Distancia estipulada:
                                    </p>
                                    <p class="col">
                                        {{ valores.servicoInfo.Estimativa_de_distancia }}Km
                                    </p>
                                </div> -->


                                                <div class="row">
                                                    <p class="col-9 text-success">
                                                        Propostas enviadas:
                                                    </p>
                                                    <p class="col">
                                                        35
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="justify-content-between overflow-y-auto border-top border-bottom border-black"
                                            style="height: 150px;">
                                            <p class="card-text  p-2">
                                                {{ servico.servicoInfo.Desc }}
                                            </p>
                                        </div>

                                        <div class="border-bottom border-black justify-content-start p-2"
                                            style="overflow-y:scroll;height: 100px;">
                                            <h6 class="">
                                                Profissão:
                                            </h6>
                                            <div v-for="(profission, index) in servico.servicoProfessions"
                                                :key="profission[index]">

                                                <h6 class="">{{ profission.Profissao }}

                                                </h6>
                                            </div>
                                        </div>

                                        <div class="border-bottom border-black p-2">
                                            <h4>
                                                Habilidade
                                            </h4>
                                            <div class="" style="overflow-y:scroll;height: 150px;">

                                                <ul class=" gap-4 ">
                                                    <li v-for="(skill, index) in servico.servicoSkills" :key="skill[index]">

                                                        {{ skill.Habilidade }}
                                                    </li>
                                                </ul>
                                            </div>


                                        </div>

                                        <div class=" ">
                                            <div class=" d-flex align-items-end align-itens-end border-top border-black ">
                                                <div class="col mt-3">
                                                    <button type="button" class="btn btn-warning" data-bs-toggle="modal"
                                                        :data-bs-target="'#VerPropostas' + servico.servicoInfo.idtb_servico"
                                                        style="font-size: small; border:none;">Ver Propostas </button>
                                                </div>
                                                <div class="col mt-3 text-end">
                                                    <button type="button" class="btn btn-info" data-bs-toggle="modal"
                                                        :data-bs-target="'#PropostasAceita' + servico.servicoInfo.idtb_servico"
                                                        style="font-size: small; border:none;">Proposta
                                                        Aceita</button>
                                                </div>
                                            </div>

                                        </div>

                                        <CardModalVerPropostas :infoServico="servico"
                                            :idModal="servico.servicoInfo.idtb_servico" />
                                        <CardModalPropostaAceita :infoServico="servico"
                                            :idModal="servico.servicoInfo.idtb_servico" />
                                        <CardModalPropostasEnvidas />

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>


// import AvatarComponent from './AvatarComponent.vue';
import CardModalVerPropostas from './CardModalVerPropostas.vue';
import CardModalPropostaAceita from './CardModalPropostaAceita.vue';
import CardModalPropostasEnvidas from './CardModalPropostasEnvidas.vue';
import store from "@/store";
import { mapActions, mapGetters } from 'vuex'


export default {
    name: "ViewPropostaContratanteComponent",
    data() {
        return {
            ifServico: false,

            valorServico: [],
        }
    },
    components: {
        // AvatarComponent,
        CardModalPropostaAceita,
        CardModalVerPropostas,
        CardModalPropostasEnvidas,


    },
    component: {
        store() {
            return store
        },
    },
    created() {
        this.getinfos();

    },
    methods: {
        validateOnBack: Boolean,
        ...mapActions(["GetPropostaAceita", "", ""]),
        ...mapGetters(["GetToken"]),
        getinfos() {

            if (store.getters.StateServico != null || store.getters.StateServico != undefined) {

                this.valorServico = store.getters.StateServico
                this.ifServico = true
            }



        },

    },

}
</script>





<style scoped></style>


