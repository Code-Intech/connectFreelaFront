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
                                    <div class="col-md-3">
                                        <AvatarComponent />
                                    </div>
                                    <div class="col ">
                                        <text class="fst-italic  ">{{ valores.contratante.Nome_Completo }}</text>
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
                                <h6 class="">
                                    Profissão:
                                </h6>
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

                                    <ul class="d-flex gap-4 flex-wrap">
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

                            <div class="modal fade" :id="'exampleModal' + valores.servicoInfo.idtb_servico" tabindex="-1"
                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header border-black">
                                            <AvatarComponent />
                                            <div class="d-flex justify-content-between" style="width: 90%;">
                                                <div>
                                                    <text class="fst-italic">Nome de perfil</text>
                                                    <p class="fst-italic"
                                                        style="font-size: smaller; color:rgb(103, 102, 102)">Profissão:
                                                        Programador
                                                    </p>
                                                </div>
                                                <div class="">
                                                    <h6 class="" style="font-size: 15px;">
                                                        <font-awesome-icon class="me-1" icon="money-bill" />R$: 9000,00
                                                    </h6>
                                                    <h6 class="fst-italic"
                                                        style="font-size: smaller; color:rgb(103, 102, 102)">
                                                        Remoto
                                                    </h6>
                                                </div>
                                            </div>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="d-flex justify-content-between"
                                                style="border-bottom: 1px solid black;">
                                                <div>
                                                    <h6 class="fst-italic"
                                                        style="font-size: smaller; color:rgb(103, 102, 102)">Data de
                                                        Publicação:
                                                    </h6>
                                                    <h6>
                                                        26/09/2023
                                                    </h6>
                                                </div>
                                                <div>
                                                    <h6 class="fst-italic"
                                                        style="font-size: smaller; color:rgb(103, 102, 102)">Data de Inicio:
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
                                            
                                                class="m-2">
                                                <div class="card flex justify-content-center mb-3 mt-3">
                                                    <Galleria v-model:visible="displayBasic" :value="images"
                                                        :responsiveOptions="responsiveOptions" :numVisible="9"
                                                        containerStyle="max-width: 50%" :circular="true" :fullScreen="true"
                                                        :showItemNavigators="true">
                                                        <template #item="slotProps">
                                                            <img :src="slotProps.item.itemImageSrc"
                                                                :alt="slotProps.item.alt"
                                                                style="width: 100%; display: block" />
                                                        </template>
                                                        <template #thumbnail="slotProps">
                                                            <img :src="slotProps.item.thumbnailImageSrc"
                                                                :alt="slotProps.item.alt" style="display: block" />
                                                        </template>
                                                    </Galleria>

                                                    <div class="d-grid gap-2">
                                                        <!-- <Button label="Show" icon="pi pi-external-link" @click="displayBasic = true" /> -->
                                                        <button class=" rounded btnfotos" data-bs-toggle="modal"
                                            data-bs-target="#modalServicoFoto" data-bs-whatever="@getbootstrap">Fotos</button>

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
                                            <textarea class="form-control" placeholder="Leave a comment here"
                                                id="floatingTextarea2" style="height: 100px;font-size:small;"></textarea>
                                            <label for="floatingTextarea2">Comments</label>
                                        </div>
                                        <div class="d-flex mt-3">
                                            <div class="p-inputgroup flex-1">
                                                <span class="p-inputgroup-addon" style="font-size:small;">$</span>
                                                <InputNumber class="" placeholder="Valor" style="font-size:small;" />
                                                <span class="p-inputgroup-addon" style="font-size:small;">.00</span>
                                            </div>
                                            <button class="btn btn-primary ms-3 " type="submit"
                                                style="background-color: rgb(11, 217, 11); font-size: small; border:none;">Enviar
                                                Proposta</button>
                                        </div>
                                    </div>

                                    <div class="modal-dialog modal-fullscreen-xxl-down fade" id="modalServicoFoto" tabindex="-1" aria-labelledby="veralbum" aria-hidden="true">
        <div class="modal-dialog  modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" :id="'verModalServicoImg' + modalId"></h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- {{ albomModal }} -->
                    <div class="carousel slide">
                        <div class="carousel-inner" style="max-height: 40rem;">
                            <div class="carousel-item active">
                                <img src="../assets/img2/img1.jpg" class="d-block w-100" alt="">
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/img2/img2.jpg" class="d-block w-100" alt="">
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/img2/img3.jpg" class="d-block w-100" alt="">
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/img2/img4.jpg" class="d-block w-100" alt="">
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/img2/img5.jpg" class="d-block w-100" alt="">
                            </div>

                        </div>
                        <button class="carousel-control-prev" type="button" :data-bs-target="'#carouselEx' + modalId"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" :data-bs-target="'#carouselEx' + modalId"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>


                    <div class="border-top border-2 border-black mt-3">
                        <p>
                        </p>
                    </div>
                    <!-- <div class="border-top border-2 border-black mt-3">

                        <input type="date" name="" id="" v-model="albomModal.portifolio.created_at">
                    </div> -->
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sair</button>

                </div>
            </div>
        </div>
    </div>
                                    <!-- <div class="modal-footer">
                    
                </div> -->
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
            originalDate: null,
            tttt: null,

        };
    },

    created() {
        this.getAllServicos();
        this.formatData();
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

