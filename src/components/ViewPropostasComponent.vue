
<template>
    <div class="d-flex justify-content-center">


        <div class="">
            <div class="card mt-5" style="max-width: 120vh;">
                <Card>
                    <template #title>
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
                    </template>
                    <template #content>
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








                    </template>
                </Card>
            </div>

























        </div>

    </div>


    <div class="d-inline-flex justify-content-center ">

        <div class="card mt-5 " style="max-width: 100vh; min-width: 80vh;">
            <Card>
                <template #title>


                    <div class="d-flex">

                        <AvatarComponent />


                        <div class=" ms-3 " style="width: 90%;">

                            <div>

                                <text class="fst-italic">Nome de perfil</text>
                                <p class="fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">Profissão:
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

                                <h4 class="fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">Data de
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cum quod veniam, temporibus animi,
                            est officiis iure error consequuntur recusandae facere perspiciatis, a dolor! Dignissimos
                            reiciendis rerum labore aspernatur cum.


                        </p>

                    </div>
                </template>
            </Card>
        </div>
    </div>
</template>
  
<script>


import AvatarComponent from './AvatarComponent.vue';
export default {
    name: "ViewPropostasComponent",
    methods: {

    },
    components: {
        AvatarComponent,


    },

}
</script>





<style scoped></style>>


