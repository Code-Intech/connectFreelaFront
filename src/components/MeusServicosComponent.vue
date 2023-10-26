<template>
    <div class="col-10 ">
        <div class="border border-2 rounded m-3">
            <div class="d-flex m-2">
                <div class="">
        <div class="d-flex flex-wrap">
            <div class="m-3">
                <div class="">
                    <div class="card" style="width: 25rem;">
                        <div class="card-header border-black d-flex justify-content-between">
                            <div>
                                <h5 class="text-center">Larissa Incrivel</h5>

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
                                                <font-awesome-icon class="me-1" icon="money-bill" /> 50
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
                                            <h6 class="fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">
                                                Data de Início:
                                            </h6>
                                            <h6 class="fst-italic" style="font-size: smaller;">
                                                11/11/1111
                                            </h6>
                                        </div>

                                        <div class="col">
                                            <h6 class="fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">
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
                                                São paulo
                                            </p>
                                        </div>
                                        <div class="d-flex">
                                            <p class=" text-success ps-2">
                                                Estado:
                                            </p>
                                            <p class=" text-right ps-2">
                                                São paulo
                                            </p>
                                        </div>
                                    </div>

                                    <div class="d-flex">
                                        <p class=" text-success">
                                            Bairro:
                                        </p>
                                        <p class=" text-right ps-2">

                                            Lorem ipsum dolor sit amet
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
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut rerum hic
                                    obcaecati veniam ad molestias, sint iure similique quam dolor eius laboriosam, cum quis
                                    deserunt ea minus nihil? Ipsum!
                                </p>
                            </div>

                            <div class="border-bottom border-black justify-content-start p-2"
                                style="overflow-y:scroll;height: 100px;">
                                <h6 class="">
                                    Profissão:
                                </h6>
                                <h6 class="">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga et tenetur sint dolore,
                                    soluta alias illum voluptate aut officia fugit quia voluptates nisi error! Illum
                                    incidunt sit magni possimus delectus.
                                </h6>
                            </div>

                            <div class="border-bottom border-black p-2">
                                <h4>
                                    Habilidade
                                </h4>
                                <div class="" style="overflow-y:scroll;height: 150px;">

                                    <ul class="d-flex gap-4 flex-wrap">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam veniam, amet
                                        quaerat quis nesciunt nulla exercitationem pariatur accusamus nostrum. Veniam
                                        cupiditate placeat autem id fugit ex dicta nihil molestiae culpa?
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, saepe commodi,
                                        dicta consequuntur, porro inventore illo sed aliquam labore eos est atque rerum sint
                                        corrupti! Id deserunt quasi quod neque!
                                    </ul>
                                </div>


                            </div>

                            <div class=" ">
                                <div class=" d-flex align-items-end align-itens-end border-top border-black ">
                                    <div class="col mt-3">
                                        <button type="button" class="btn btn-primary"
                                            style="font-size: small; border:none;">Editar
                                            Serviço</button>
                                    </div>
                                    <div class="col mt-3 text-end">
                                        <button type="button" class="btn btn-danger"
                                            style="font-size: small; border:none;">Deletar</button>
                                    </div>
                                </div>
                            </div>

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



export default {
    name: "MeusServicosComponent",
    components: {

    },
    methods: {


    }
}
</script>

<style scoped></style>