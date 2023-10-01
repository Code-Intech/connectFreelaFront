<template>
    <div class="mt-3 ms-2 d-flex gap-4 flex-wrap">
        <div class="card" style="width: 25rem;">
            <div class="card-header border-black">
                <!-- <div class="col-1">

                <div class="flex">

                    <avatar src="../assets/img/avatar.jpg" alt="calango" />
                </div>

            </div> -->
                <AvatarComponent />
                <div class="d-flex texts">


                    <div>

                        <text class="fst-italic">Nome de perfil</text>
                        <p class="fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">Profissão: Programador
                        </p>
                    </div>
                    <div class="ms-5">

                        <h6 class="" style="font-size: 15px;">
                            <font-awesome-icon class="me-1" icon="money-bill" />R$: 9000,00
                        </h6>
                        <h6 class="fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">
                            Remoto
                        </h6>
                    </div>
                </div>
            </div>
            <div class="m-2 border-bottom border-black d-flex justify-content-between">
                <div>

                    <h6 class="fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">Data de Publicação: </h6>
                    <h6>
                        26/09/2023
                    </h6>
                </div>
                <div>

                    <h6 class="fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">Data de Inicio: </h6>
                    <h6>
                        25/11/2023
                    </h6>
                </div>
            </div>
            <div class="card-body">
                <!-- <img src="../assets/img/CardServico.png" class="card-img-top" alt=""> -->


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



                <p class="card-text border-top border-bottom border-black">Some quick example text to build on the card
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




                <div class="d-flex justify-content-between">

                    <div class="buttuns mt-3">
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                            style="background-color: rgb(11, 217, 11); font-size: small; border:none;">Enviar
                            Proposta</button>
                    </div>
                    <div class="buttuns mt-3">
                        <button type="button" class="btn btn-primary"
                            style="background-color: rgb(247, 162, 5); font-size: small; border:none;">Ver
                            Propostas</button>
                    </div>
                    <!-- <div class="buttuns mt-3">
                        <button type="button" class="btn btn-primary"
                            style="background-color: rgb(0, 26, 255); font-size: small; border:none;">Ver Mais
                            Detalhes</button>
                    </div> -->
                </div>


            </div>
        </div>















        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
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
                            <Galleria v-model:visible="displayBasic" :value="images" :responsiveOptions="responsiveOptions"
                                :numVisible="9" containerStyle="max-width: 50%" :circular="true" :fullScreen="true"
                                :showItemNavigators="true">
                                <template #item="slotProps">
                                    <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt"
                                        style="width: 100%; display: block" />
                                </template>
                                <template #thumbnail="slotProps">
                                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt"
                                        style="display: block" />
                                </template>
                            </Galleria>

                            <div class="d-grid gap-2">

                                <!-- <Button label="Show" icon="pi pi-external-link" @click="displayBasic = true" /> -->
                                <button class=" rounded btnfotos" @click="displayBasic = true">Fotos</button>
                            </div>
                        </div>








                        <p class="card-text border-top border-bottom border-black">Some quick example text to build on the
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
                                style="height: 100px;font-size:small;"></textarea>
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
                    <!-- <div class="modal-footer">
                    
                </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AvatarComponent from './AvatarComponent.vue';

import { PhotoService } from '@/service/PhotoService';

export default {
    name: "CardsServiçosComponent",
    methods: {

    },
    components: {
        AvatarComponent
    },
    data() {
        return {
            images: null,
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
    mounted() {
        PhotoService.getImages().then((data) => (this.images = data));
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
}
</style>

