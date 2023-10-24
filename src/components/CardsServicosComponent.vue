<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-4" v-for="(valores, index) in valor" :key="valores[index]">
                <div class="mt-3 ms-2 d-flex gap-4 flex-wrap">
                    <div class="card" style="width: 25rem;">

                        <div class="card-header border-black">
                            <p>{{ valores.servicoInfo.Titulo_Servico }}</p>
                        </div>
                        <div class="card-body">
                            <div clss="container">
                                <div class="row">
                                    <div class="col-md-3">
                                        <AvatarComponent />
                                    </div>
                                    <div class="col">
                                        <text class="fst-italic">{{ valores.contratante.Nome_Completo }}</text>
                                    </div>
                                </div>
                            </div>

                            <div class="container texts">
                                <div class="row">
                                    <div class="col-lg-8 justify-content-start">
                                        <h6 class="fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">
                                            Profissão:
                                        </h6>
                                        <h6 class="fst-italic" style="font-size: smaller;">
                                            <div v-for="(val, index2) in valores.servicoProfessions" :key="val[index2]">
                                                {{ val.Profissao }};<br>
                                            </div>
                                        </h6>
                                    </div>
                                    <div class="col justify-content-start ms-5">
                                        <h6 class="fst-italic" style="font-size: smaller;">
                                            <font-awesome-icon class="me-1" icon="money-bill" />{{
                                                valores.servicoInfo.Estimativa_Valor }}
                                        </h6>
                                        <h6 class="fst-italic" style="font-size: smaller;">
                                            {{ valores.servicoInfo.Remoto_Presencial }}
                                        </h6>
                                    </div>
                                </div>
                            </div>

                            <div class="border-bottom border-black justify-content-start">
                                <div class="container">
                                    <div class="row">
                                        <div>
                                            <h6 class="fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">Data
                                                de
                                                Publicação:
                                            </h6>
                                            <h6 class="fst-italic" style="font-size: smaller;">
                                                12/10/2003
                                            </h6>
                                        </div>
                                        <div class="col-7">
                                            <h6 class="fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">
                                                Data de Início:
                                            </h6>
                                            <h6 class="fst-italic" style="font-size: smaller;">
                                                {{ formattedDate }}
                                            </h6>
                                        </div>

                                        <div class="col">
                                            <h6 class="fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">
                                                Estimativa de Término:
                                            </h6>
                                            <h6 class="fst-italic" style="font-size: smaller;">
                                                {{ valores.servicoInfo.Estimativa_de_termino }}
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="container">
                                <div class="row">
                                    <div class="row">
                                        <p class="col-6 text-success">
                                            Localidade:
                                        </p>
                                        <p class="col text-right">
                                            {{ valores.localidade.Cidade }}, {{ valores.localidade.Estado }},
                                            {{ valores.localidade.Bairro }}
                                        </p>
                                    </div>

                                    <div class="row">
                                        <p class="col-8 text-success">
                                            Distancia estipulada:
                                        </p>
                                        <p class="col">
                                            {{ valores.servicoInfo.Estimativa_de_distancia }}Km
                                        </p>
                                    </div>

                                    <div class="row">
                                        <p class="col-9 text-success">
                                            Estimativa de Idade:
                                        </p>
                                        <p class="col">
                                            {{ valores.servicoInfo.Estimativa_Idade }}
                                        </p>
                                    </div>

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

                            <div class="justify-content-between">
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

                            <div class="container">
                                <div class="row justify-content-between">
                                <div class="col-6 buttuns mt-3">
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        style="background-color: rgb(11, 217, 11); font-size: small; border:none;">Enviar
                                        Proposta</button>
                                </div>
                                <div class="col buttuns mt-3">
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
            originalDate: store.getters.StateServico.Data_Inicio,
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

        formattedDate() {
      return this.formatDate(this.originalDate);
    }
    },

    methods: {
        validateOnBack: Boolean,
        ...mapActions(["getServico", "getInfoServico", "CreateServico", "formatDate"]),
        ...mapGetters([]),

        getAllServicos() {
            this.valor = store.getters.StateServico
        },

        formatDate(dateTimeString) {
      const date = new Date(dateTimeString);
      const day = date.getDate();
      const month = date.getMonth() + 1; // Lembre-se de que os meses em JavaScript começam em 0
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
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
</style>

