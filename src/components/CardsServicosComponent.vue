<template>
    <div class="">
        <div class="d-flex flex-wrap">
            <div class=" m-auto" v-for="(valores, index) in valor" :key="valores[index]">
                <div class="mt-3 ms-2 ">
                    <div class="card" style="width: 25rem;">
                        <div class="card-header border-black d-flex justify-content-between">
                            <div>
                                <h5 class="text-center">{{ valores.servicoInfo.Titulo_Servico }}</h5>

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
                            <div clss="container">
                                <div class="row">
                                    <div class="col-md-3" @click="VerPerfilUser(valores.servicoInfo.idtb_servico)">
                                        <AvatarComponent :source="avatar[index]" />
                                    </div>
                                    <div class="col ">
                                        <text class="fst-italic" v-if="valores.contratante !== null"> {{
                                            valores.contratante.Nome_Completo
                                        }}</text>
                                    </div>
                                    <div class="col justify-content-start ms-5">
                                        <h6 class="fst-italic" style="font-size: smaller;">
                                            <font-awesome-icon class="me-1" icon="money-bill" />{{
                                                valores.servicoInfo.Estimativa_Valor }}
                                        </h6>
                                        <h6 class="fst-italic" style="font-size: smaller;">
                                            <div v-if="valores.servicoInfo.Remoto_Presencial == 1">
                                                Remoto
                                            </div>
                                            <div v-if="valores.servicoInfo.Remoto_Presencial == 2">
                                                Hibrido
                                            </div>
                                            <div v-if="valores.servicoInfo.Remoto_Presencial == 3">
                                                Presencial
                                            </div>

                                        </h6>
                                    </div>
                                </div>
                            </div>

                            <div class="container texts">
                                <div class="row">


                                </div>
                            </div>

                            <div class="border-bottom border-black justify-content-start">
                                <div class="container">
                                    <div class="row">

                                        <div class="col-7">
                                            <h6 class="fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">
                                                Data de Início:
                                            </h6>
                                            <h6 class="fst-italic" style="font-size: smaller;">
                                                {{ formatData(valores.servicoInfo.Data_Inicio) }}
                                            </h6>
                                        </div>

                                        <div class="col">
                                            <h6 class="fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">
                                                Estimativa de Término:
                                            </h6>
                                            <h6 class="fst-italic" style="font-size: smaller;">
                                                {{ formatData(valores.servicoInfo.Estimativa_de_termino) }}
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
                                                {{ valores.localidade.Cidade }}
                                            </p>
                                        </div>
                                        <div class="d-flex">
                                            <p class=" text-success ps-2">
                                                Estado:
                                            </p>
                                            <p class=" text-right ps-2">
                                                {{ valores.localidade.Estado }}
                                            </p>
                                        </div>
                                    </div>

                                    <div class="d-flex">
                                        <p class=" text-success">
                                            Bairro:
                                        </p>
                                        <p class=" text-right ps-2">

                                            {{ valores.localidade.Bairro }}
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
                                <p class="card-text  p-2">{{ valores.servicoInfo.Desc
                                }}
                                </p>
                            </div>

                            <div class="border-bottom border-black justify-content-start p-2"
                                style="overflow-y:scroll;height: 100px;">
                                <h4 class="">
                                    Profissão:
                                </h4>
                                <h6 class="">
                                    <div v-for="(val, index2) in valores.servicoProfessions" :key="val[index2]">
                                        {{ val.Profissao }};<br>
                                    </div>
                                </h6>
                            </div>

                            <div class="border-bottom border-black p-2">
                                <h4>
                                    Habilidade
                                </h4>
                                <div class="" style="overflow-y:scroll;height: 150px;">

                                    <ul class="">
                                        <li v-for="(val2, index3)    in valores.servicoSkills" :key="val2[index3]">
                                            {{ val2.Habilidade }}
                                        </li>
                                    </ul>
                                </div>


                            </div>

                            <div class=" ">
                                <div class=" d-flex justify-content-between border-top border-black ">
                                    <div class="buttuns mt-3 align-self-end">
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                            :data-bs-target="'#exampleModal' + valores.servicoInfo.idtb_servico"
                                            style="background-color: rgb(11, 217, 11); font-size: small; border:none;">Enviar
                                            Proposta</button>
                                    </div>
                                    <div class=" buttuns mt-3">
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
                <ModalEnviarProposta :idModal="valores.servicoInfo.idtb_servico" />
                <!-- <ModalFotoServico :modalFotoId="valores[index]" /> -->
            </div>

        </div>
    </div>
</template>

<script>
import AvatarComponent from './AvatarComponent.vue';
// import ModalFotoServico from './ModalFotoServico.vue';
import ModalEnviarProposta from './ModalEnviarProposta.vue';
import store from "@/store";
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "CardsServiçosComponent",
    components: {
        AvatarComponent,
        // ModalFotoServico,
        ModalEnviarProposta,
    },
    data() {
        return {
            images: null,
            valor: [],
            originalDate: null,
            tttt: null,
            avatar: [],
        };
    },

    created() {
        this.getAllServicos();
        this.formatData();

        this.getsallservicos();
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
        ...mapActions(["getServico", "getInfoServico", "CreateServico", "formatDate", "getAvatarNoToken"]),
        ...mapGetters([]),

        getAllServicos() {
            this.valor = store.getters.StateServico
            // console.log(this.valor)
        },

        formatData(data) {
            // Converter a string para um objeto Date
            const dataObj = new Date(data);

            // Extrair o dia, mês e ano da data
            const dia = dataObj.getDate(); // Retorna o dia do mês (1-31)
            const mes = dataObj.getMonth() + 1; // O mês é baseado em zero (0-11), então somamos 1
            const ano = dataObj.getFullYear();

            // Formatar a data no formato desejado (dia/mês/ano)
            const dataFormatada = `${dia}/${mes}/${ano}`;

            return dataFormatada;
        },

        VerPerfilUser(id) {
            this.$router.push({ name: `UserPerfilSobreView`, params: { id: id } });
        },

        async getsallservicos() {

            this.avatar = []

            try {
                await this.getServico()
                for (let index = 0; index < this.valor.length; index++) {
                    // console.log(this.valor[index])
                    try {
                        await this.getAvatarNoToken(this.valor[index].servicoInfo.tb_contratante_tb_user_idtb_user)

                        this.avatar.push(store.getters.StateAvatarId)
                    } catch (error) {
                        console.log(error)

                        this.avatar.push(null)
                    }
                }
            } catch (error) {
                console.log(error)
            }

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

