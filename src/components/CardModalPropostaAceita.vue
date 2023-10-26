<template>
    <!-- Modal -->
    <div class="modal fade" id="PropostasAceita" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
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





                    <div class="d-inline-flex justify-content-center ">

                        <div class="card mt-5 " style="max-width: 100vh; width: 90%;">
                            <Card>
                                <template #title>


                                    <div class="d-flex">

                                        <AvatarComponent />


                                        <div class=" ms-3 " style="width: 90%;">

                                            <div>

                                                <text class="fst-italic">Nome de perfil</text>
                                                <p class="fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">
                                                    Profissão:
                                                    Programador
                                                </p>
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
                                                    $15.500,00
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
                                                    <li>
                                                        DEV
                                                    </li>
                                                    <li>
                                                        Dev Front-end
                                                    </li>
                                                    <li>
                                                        Dev Back-end
                                                    </li>

                                                </ul>
                                            </div>


                                        </div>












                                        <div class="border-bottom border-black mt-3">
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




                                        <p class="p-2 mt-4 ">
                                            Texto da Proposta enviada
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cum quod veniam,
                                            temporibus animi,
                                            est officiis iure error consequuntur recusandae facere perspiciatis, a dolor!
                                            Dignissimos
                                            reiciendis rerum labore aspernatur cum.


                                        </p>

                                        <div class="d-flex flex-row-reverse">
                                            <button class="btn btn-outline-success" type="submit">Aceitar Proposta</button>
                                        </div>
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
    },
    methods: {
        getinfos() {

            if (store.getters.StateServico != null || store.getters.StateServico != undefined) {

                this.valorServico = store.getters.StateServico
            }



        }
    },


}
</script>

<style scoped></style>