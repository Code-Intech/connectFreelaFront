
<template>
    <div class="col-10 ">
        <div class="border border-2 rounded m-3">
            <div>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#PropostasEnvidas">
                    Propostas Enviadas
                </button>
            </div>
            <div class="m-2">
                <div class="">
                    <!-- {{ valorServico }} -->
                    <div class="">
                        <div class="">
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
                                                        data-bs-target="#VerPropostas"
                                                        style="font-size: small; border:none;">Ver Propostas </button>
                                                </div>
                                                <div class="col mt-3 text-end">
                                                    <button type="button" class="btn btn-info" data-bs-toggle="modal"
                                                        data-bs-target="#PropostasAceita"
                                                        style="font-size: small; border:none;">Proposta Aceita</button>
                                                </div>
                                            </div>
                                        </div>

                                        <CardModalVerPropostas />
                                        <CardModalPropostaAceita />
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






    <!-- 
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

                        <div class="d-flex flex-row-reverse">
                            <button class="btn btn-outline-success" type="submit">Aceitar Proposta</button>
                        </div>
                    </div>
                </template>
            </Card>
        </div>
    </div> -->
</template>
  
<script>


// import AvatarComponent from './AvatarComponent.vue';
import CardModalVerPropostas from './CardModalVerPropostas.vue';
import CardModalPropostaAceita from './CardModalPropostaAceita.vue';
import CardModalPropostasEnvidas from './CardModalPropostasEnvidas.vue';
import store from "@/store";



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
        getinfos() {

            console.log(store.getters.StateServico, "StateServico")
            if (store.getters.StateServico != null || store.getters.StateServico != undefined) {

                this.valorServico = store.getters.StateServico
                this.ifServico = true
                console.log(this.ifServico, "ifServico true")
            }



        }
    },

}
</script>





<style scoped></style>>


