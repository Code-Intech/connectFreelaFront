
<template>
    <div class="modal fade" :id="'exampleModal' + idModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg  modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header border-black">
                    <AvatarComponent />
                    <div class="d-flex justify-content-between" style="width: 90%;">
                        <div>
                            <text class="fst-italic">Nome de perfil</text>
                            <p class="fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">Profissão:
                                Programador
                            </p>
                        </div>
                        <div class="">
                            <h6 class="" style="font-size: 15px;">
                                <font-awesome-icon class="me-1" icon="money-bill" />R$: 9000,00
                            </h6>
                            <h6 class="fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">
                                Remoto
                            </h6>
                        </div>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <CardErroMessage v-if="erroIf" :errorMessageCard="errorMessage"></CardErroMessage>
                    <div v-if="Cadastrado" class="alert alert-success" role="alert">
                        Proposta Enviada!!
                    </div>
                    <loading v-if="isLoading" :message="loadingMessage" />
                    <div class="d-flex justify-content-between" style="border-bottom: 1px solid black;">
                        <div>
                            <h6 class="fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">Data de
                                Publicação:
                            </h6>
                            <h6>
                                26/09/2023
                            </h6>
                        </div>
                        <div>
                            <h6 class="fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">Data de Inicio:
                            </h6>
                            <h6>
                                25/11/2023
                            </h6>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p class="text-info">
                            Localidade:
                        </p>
                        <p class="text-info">
                            São Paulo
                        </p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p>
                            Estimativa de Idade:
                        </p>
                        <p>
                            23
                        </p>
                    </div>
                    <div class="d-flex justify-content-between border-bottom border-black">
                        <p class="text-success">
                            Propostas enviadas:
                        </p>
                        <p class="text-success">
                            35
                        </p>
                    </div>
                    <div class="d-flex justify-content-between">
                    </div>
                    <div class="card flex justify-content-center mb-3 mt-3">
                        <!-- <Galleria v-model:visible="displayBasic" :value="images"
                                                    :responsiveOptions="responsiveOptions" :numVisible="9"
                                                    containerStyle="max-width: 50%" :circular="true" :fullScreen="true"
                                                    :showItemNavigators="true">
                                                    <template #item="slotProps">
                                                        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt"
                                                            style="width: 100%; display: block" />
                                                    </template>
                                                    <template #thumbnail="slotProps">
                                                        <img :src="slotProps.item.thumbnailImageSrc"
                                                            :alt="slotProps.item.alt" style="display: block" />
                                                    </template>
                                                </Galleria> -->
                        <div class="d-grid gap-2">
                            <!-- <Button label="Show" icon="pi pi-external-link" @click="displayBasic = true" /> -->
                            <button type="button" class="btn btnfotos" data-bs-toggle="modal"
                                :data-bs-target="'#FotoServico' + idModal"
                                style="font-size: small; border:none;">Fotos</button>

                        </div>
                    </div>
                </div>
                <p class="card-text border-top border-bottom border-black">Some quick example
                    text to build on the
                    card
                    title
                    and make up the bulk of the card's
                    content. and make up the bulk of the card's
                    content. and make up the bulk of the card's
                    content. and make up the bulk of the card's
                    content.
                </p>
                <div class="border-bottom border-black ">
                    <h4>
                        Habilidade
                    </h4>
                    <div class="">
                        <ul class="d-flex gap-4 flex-wrap">
                            <li>
                                php
                            </li>
                            <li>
                                Java
                            </li>
                            <li>
                                JavaScript
                            </li>
                            <li>
                                WorldPress
                            </li>
                            <li>
                                Linux
                            </li>
                            <li>
                                HTML5
                            </li>
                            <li>
                                CSS3
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- <p class="card-text border-top border-bottom border-black">Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Mollitia praesentium fugiat quia, facilis nemo error esse, expedita nostrum
                            consequuntur accusamus molestias, quas at eius ut hic nulla illo accusantium. Quidem.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quis, non nihil mollitia,
                            voluptatum consequuntur deserunt possimus repellendus sunt commodi numquam eos? Quidem harum
                            beatae
                            numquam inventore in dolorem ipsam.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem voluptatem tempore rem autem
                            accusamus molestias illo ratione sed molestiae beatae officiis, nihil maxime, modi, aliquam sint
                            ipsum explicabo omnis hic.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, perspiciatis? Amet, mollitia
                            molestias, nesciunt velit tempora hic corrupti, vitae debitis rerum animi rem veritatis
                            asperiores
                            officiis ex laborum! Illum, totam!
                        </p>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label"></label>
                            <input type="email" class="form-control" id="exampleFormControlInput1"
                                placeholder="Proposta(R$): 0000,00">
                        </div> -->
                <h4 class="mt-3">
                    Texto da Propostas
                </h4>
                <div class="form-floating mt-3">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                        style="height: 100px;font-size:small;" v-model="dados.Texto"></textarea>
                    <label for="floatingTextarea2">Comments</label>
                </div>
                <div class="d-flex mt-3">
                    <div class="input-group mb-3">
                        <span class="input-group-text">$</span>
                        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"
                            v-model="dados.Valor">
                        <span class="input-group-text">.00</span>
                    </div>
                    <button class="btn btn-primary ms-3 " type="submit"
                        style="background-color: rgb(11, 217, 11); font-size: small; border:none;"
                        @click="createProposta()">Enviar
                        Proposta</button>
                </div>
            </div>
        </div>
    </div>
    <ModalFotoServico :modalFotoId="idModal" />
    <!-- <CardErroMessage v-if="erroIf" :errorMessageCard="errorMessage"></CardErroMessage> -->
</template>

<script>
import store from "@/store";
import { mapActions, mapGetters } from 'vuex'
import ModalFotoServico from "@/components/ModalFotoServico.vue"
import CardErroMessage from "@/components/CardErroMessage.vue"


export default {
    name: "ModalEnviarProposta",
    components: {
        ModalFotoServico,
        CardErroMessage,
    },
    props: {
        idModal: {
            type: String,
            required: true,
        },

    },
    data() {
        return {
            dados: {
                Texto: null,
                Valor: null,
                Data: "2023-10-10",
            },
            erroIf: false,
            isLoading: false,
            Cadastrado: false,
        };
    },
    computed: {
        store() {
            return store
        },

    },
    created() {
        // const hoje = new Date();
        // const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        // this.dados.Data = hoje.toLocaleDateString("pt-BR", options);

        const hoje = new Date();
        const ano = hoje.getFullYear();
        const mes = (hoje.getMonth() + 1).toString().padStart(2, '0');
        const dia = hoje.getDate().toString().padStart(2, '0');
        this.dados.Data = `${ano}-${mes}-${dia}`;

    },
    watch: {
        cep() {
            console.log(this.cep)
            this.handleCep()
        },
    },
    methods: {
        validateOnBack: Boolean,
        ...mapActions(["CreateProposta"]),
        ...mapGetters(["GetToken"]),


        async createProposta() {
            this.isLoading = true

            const Proposta = new FormData()

            Proposta.append("Texto", this.dados.Texto);
            Proposta.append("Valor", this.dados.Valor);
            Proposta.append("Data", this.dados.Data);


            const PayLoad = {
                id: this.idModal,
                token: await this.GetToken(),
                infoProposta: Proposta
            }



            try {
                await this.CreateProposta(PayLoad);

                this.isLoading = false;
                this.Cadastrado = true;
                setTimeout(() => {

                    this.Cadastrado = false;
                }, 4000);


            } catch (error) {
                this.isLoading = false;
                if (error.request && error.request.response) {
                    const message = error.request.response;
                    this.errorMessage = JSON.parse(message);
                    this.erroIf = true;
                    setTimeout(() => {
                        this.erroIf = false;
                    }, 4000);
                } else {
                    console.error("Erro inesperado:", error);
                }
            }



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
    }
};
</script>