<template>
    <div class="row">
        <div class="col-sm-3 mb-3 mb-sm-0 m-3 " v-for="(valores, index) in valor" :key="valores[index]">
            <div class="mt-3 ms-2 d-flex gap-4 flex-wrap">
                <div class="card" style="width: 25rem;">
                    <div class="card-header border-black">
                        <p>{{ valores.servicoInfo.Titulo_Servico }}</p>
                    </div>
                    <div class="card-body">
                        <AvatarComponent />
                        <div class="d-flex texts">
                            <div>
                                <text class=" fst-italic">{{ valores.contratante.Nome_Completo }}</text>
                                <h6 class="fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">Profissão:
                                    <div v-for="(val, index2) in valores.servicoProfessions" :key="val[index2]">
                                        {{ val.Profissao }};<br>
                                    </div>
                                </h6>
                            </div>
                            <div class="ms-5">

                                <h6 class="" style="font-size: 15px;">
                                    <font-awesome-icon class="me-1" icon="money-bill" />{{
                                        valores.servicoInfo.Estimativa_Valor }}
                                </h6>
                                <h6 class="fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">
                                    {{ valores.servicoInfo.Remoto_Presencial }}
                                </h6>
                            </div>
                        </div>
                        <div class="m-2 border-bottom border-black justify-content-between">
                            <div>
                                <h6 class="fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">Data de
                                    Publicação:
                                </h6>
                                <h6>
                                    12/10/2003
                                </h6>
                            </div>
                            <div class="d-flex">
                                <div>
                                    <h6 class="d-flex fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">Data
                                        de
                                        Inicio:
                                    </h6>
                                    <h6>
                                        {{ valores.servicoInfo.Data_Inicio }}
                                    </h6>
                                </div>

                                <div>
                                    <h6 class="d-flex fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">
                                        Estimativa de Término:
                                    </h6>
                                    <h6>
                                        {{ valores.servicoInfo.Estimativa_de_termino }}
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p class="text-info">
                                Localidade:
                            </p>
                            <div>
                                <p class="text-info">
                                    {{ valores.localidade.Cidade }}, {{ valores.localidade.Estado }}, {{
                                        valores.localidade.Bairro }}
                                </p>
                            </div>
                        </div>

                        <div class="d-flex justify-content-between">
                            <p>
                                Distancia estipulada:
                            </p>
                            <p>
                                {{ valores.servicoInfo.Estimativa_de_distancia }}
                            </p>
                        </div>

                        <div class="d-flex justify-content-between">
                            <p>
                                Estimativa de Idade:
                            </p>
                            <p>
                                {{ valores.servicoInfo.Estimativa_Idade }}
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

                        <p class="card-text border-top border-bottom border-black">{{ valores.servicoInfo.Desc }}
                        </p>


                        <div class="border-bottom border-black ">
                            <h4>
                                Habilidade
                            </h4>
                            <div class="">

                                <ul class="d-flex gap-4 flex-wrap">
                                    <li v-for="(val2, index3)    in valores.servicoSkills" :key="val2[index3]">
                                        {{ val2.Habilidade }}
                                    </li>
                                </ul>
                            </div>


                        </div>

                        <div class="d-flex justify-content-between">
                            <div class="buttuns mt-3">
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    style="background-color: rgb(11, 217, 11); font-size: small; border:none;">Enviar
                                    Proposta</button>
                            </div>
                            <div class="buttuns mt-3">
                                <button @click="$router.push({ path: '/ViewPropostas' })" type="button"
                                    class="btn btn-primary"
                                    style="background-color: rgb(247, 162, 5); font-size: small; border:none;">Ver
                                    Propostas</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import AvatarComponent from './AvatarComponent.vue';
import store from "@/store";
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "CardsServiçosComponent",
    components: {
        AvatarComponent
    },
    data() {
        return {
            images: null,
            valor: [],
            responsiveOptions: [
                {
                    breakpoint: '1500px',
                    numVisible: 5
                },
                {
                    breakpoint: '1024px',
                    numVisible: 3
                },
                {
                    breakpoint: '768px',
                    numVisible: 2
                },
                {
                    breakpoint: '560px',
                    numVisible: 1
                }
            ],
            displayBasic: false
        };
    },

    created() {
        this.getAllServicos();
    },
    computed: {
        store() {
            return store
        },
    },

    methods: {
        validateOnBack: Boolean,
        ...mapActions(["getServico", "getInfoServico", "CreateServico"]),
        ...mapGetters([]),

        getAllServicos() {
            this.valor = store.getters.StateServico
        },
    },

}


</script>

<style scoped>
.btn {
    display: flex;
}

.texts {
    padding-top: 1rem;
    padding-left: 1rem;
}

.card-header {
    display: flex;
}


.btnfotos {
    border: 2px solid;
    border-color: black;
    color: black;
    background: aqua;

}

.btnfotos:hover {

    background: rgb(18, 146, 146);
    color: white;
}</style>

