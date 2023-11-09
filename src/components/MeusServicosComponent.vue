<template>
    <div class="col-10 ">
        <div class="border border-2 rounded m-3">
            <div class="d-flex m-2">
                <div class="">
                    <div class="d-flex flex-wrap">
                        <div class="m-3">
                            <div class="" v-if="ifServico">
                                <div class="d-flex flex-wrap">
                                    <div class="m-auto ms-2" v-for="(servico, index) in valorServico" :key="servico[index]">
                                        <div class="card mt-4" style="width: 25rem;">
                                            <div class="card-header border-black d-flex justify-content-between">
                                                <div>
                                                    <h5 class="text-center">{{ servico.servicoInfo.Titulo_Servico }}</h5>

                                                </div>
                                                <div>
                                                    <h6 class="fst-italic"
                                                        style="font-size: smaller; color:rgb(103, 102, 102)">
                                                        Data
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
                                                                    {{ formatData(servico.servicoInfo.Data_Inicio) }}
                                                                </h6>
                                                            </div>

                                                            <div class="col">
                                                                <h6 class="fst-italic"
                                                                    style="font-size: smaller; color:rgb(103, 102, 102)">
                                                                    Estimativa de Término:
                                                                </h6>
                                                                <h6 class="fst-italic" style="font-size: smaller;">
                                                                    {{ formatData(servico.servicoInfo.Estimativa_de_termino)
                                                                    }}
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
                                                            <li v-for="(skill, index) in servico.servicoSkills"
                                                                :key="skill[index]">

                                                                {{ skill.Habilidade }}
                                                            </li>
                                                        </ul>
                                                    </div>


                                                </div>

                                                <div class=" ">
                                                    <div
                                                        class=" d-flex align-items-end align-itens-end border-top border-black ">
                                                        <div class="col mt-3">
                                                            <button type="button" class="btn btn-primary"
                                                                style="font-size: small; border:none;"
                                                                data-bs-toggle="modal"
                                                                :data-bs-target="'#exampleModal' + servico.servicoInfo.idtb_servico"
                                                                @click="reset()">Editar
                                                                Serviço</button>
                                                        </div>
                                                        <div class="col mt-3 text-end">
                                                            <button type="button" class="btn btn-danger"
                                                                style="font-size: small; border:none;"
                                                                @click="dellServico(servico.servicoInfo.idtb_servico)">Deletar</button>
                                                        </div>
                                                    </div>
                                                </div>



                                            </div>
                                        </div>




                                        <CardModalEditarServico :idModal="servico.servicoInfo.idtb_servico"
                                            :infoServico="servico">
                                        </CardModalEditarServico>


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

import store from "@/store";
import CardModalEditarServico from "@/components/CardModalEditarServico.vue";
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
    name: "MeusServicosComponent",
    components: {
        CardModalEditarServico,
    },
    data() {
        return {
            ifServico: false,
            valorServico: [],
            ifEditarServico: false
        }
    },
    created() {
        this.getinfos();
        this.getServicoMeuServico();
    },
    methods: {
        validateOnBack: Boolean,
        ...mapActions(["deleteServico", "getInfoServico", "getcategory", "getProfessions", "getSkills"]),
        ...mapGetters(["GetToken"]),
        ...mapMutations(["setServicoEditSkill"]),
        reset() {
            this.setServicoEditSkill(null)
        },
        getinfos() {

            if (store.getters.StateServico != null || store.getters.StateServico != undefined) {

                this.valorServico = store.getters.StateServico
                this.ifServico = true
            }



        },
        EditarServico() {
            this.ifEditarServico = true
        },
        formatData(data) {
            // Converter a string para um objeto Date
            const dataObj = new Date(data);

            // Extrair o dia, mês e ano da data
            const dia = dataObj.getDate(); // Retorna o dia do mês (1-31)
            const mes = dataObj.getMonth() + 1; // O mês é baseado em zero (0-11), então somamos 1
            const ano = dataObj.getFullYear();

            // Formatar a data no formato desejado (dia/mês/ano)
            const dataFormatada = `${ano}-${mes}-${dia}`;

            return dataFormatada;
        },
        async getServicoMeuServico() {
            try {
                await this.getInfoServico(this.GetToken());
                await this.getcategory(this.GetToken());
                await this.getProfessions(this.GetToken());
                await this.getSkills(this.GetToken());
                this.$router.push({ path: '/MeuServico' })
            } catch (error) {

                this.$router.push({ path: '/MeuServico' })
            }
        },
        async dellServico(id) {

            const payload = {
                id: id,
                token: this.GetToken()
            }


            try {

                await this.deleteServico(payload);
                await this.getInfoServico(this.GetToken());
                await this.getcategory(this.GetToken());
                await this.getProfessions(this.GetToken());
                await this.getSkills(this.GetToken());
                this.getinfos();
                this.$router.push({ path: '/MeuServico' })
            } catch (error) {

                this.$router.push({ path: '/MeuServico' })
            }
        },

    }
}
</script>

<style scoped></style>