<template>
    <div>





        <div class="row">
            <div class="col-sm-3 mb-3 mb-sm-0 m-3 ">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex flex-row mb-3 ">
                            <Avatar class=""
                                source="https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png" />
                            <h6 class="card-title d-flex align-content-center flex-wrap ms-3">William Victor Soares Silva
                                Marques Fraga</h6>

                            <Star class="ms-2" stars="4.5" />
                        </div>

                        <div class="d-flex justify-content-between border-top border-black">

                            <p class="">
                                Valor da Hora de Serviço
                            </p>
                            <p class="">
                                35
                            </p>
                        </div>

                        <div class="d-flex justify-content-between border-bottom border-black">

                            <p class="">
                                Valor da diaria
                            </p>
                            <p class="">
                                35
                            </p>
                        </div>


                        <div class="border-top border-black">
                            <div class="d-flex flex-row mt-1">
                                <h6>
                                    Profissões:
                                </h6>
                                <h6 class="text-info ms-2">
                                    Desenvolvedor
                                </h6>

                            </div>
                            <div class="d-flex" style="max-height: 110px;">




                                <ul>
                                    <li>
                                        <p class="m-0 text-success">
                                            Dev Web
                                        </p>
                                    </li>
                                    <li>
                                        <p class="m-0 text-success">
                                            Dev Web
                                        </p>
                                    </li>
                                    <li>
                                        <p class="m-0 text-success">
                                            Dev Web
                                        </p>
                                    </li>
                                    <li>
                                        <p class="m-0 text-success">
                                            Dev Web
                                        </p>
                                    </li>
                                    <li>
                                        <p class="m-0 text-success">
                                            Dev Web
                                        </p>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <p class="m-0 text-success">
                                            Dev Web
                                        </p>
                                    </li>
                                    <li>
                                        <p class="m-0 text-success">
                                            Dev Web
                                        </p>
                                    </li>
                                    <li>
                                        <p class="m-0 text-success">
                                            Dev Web
                                        </p>
                                    </li>
                                    <li>
                                        <p class="m-0 text-success">
                                            Dev Web
                                        </p>
                                    </li>
                                    <li>
                                        <p class="m-0 text-success">
                                            Dev Web
                                        </p>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <p class="m-0 text-success">
                                            Dev Web
                                        </p>
                                    </li>
                                    <li>
                                        <p class="m-0 text-success">
                                            Dev Web
                                        </p>
                                    </li>
                                    <li>
                                        <p class="m-0 text-success">
                                            Dev Web
                                        </p>
                                    </li>
                                    <li>
                                        <p class="m-0 text-success">
                                            Dev Web
                                        </p>
                                    </li>
                                    <li>
                                        <p class="m-0 text-success">
                                            Dev Web
                                        </p>
                                    </li>
                                </ul>



                            </div>
                        </div>
                        <div class="mt-2 mb-2 border-top border-bottom border-black">
                            <p class="card-text">Programador a 10 anos Lorem ipsum dolor sit, amet consectetur adipisicing
                                elit. Dignissimos amet ad enim nam vitae minima fugiat, totam praesentium eos mollitia,
                                expedita debitis vel quibusdam nulla deleniti? Fuga rerum quia distinctio?</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <a href=""
                                class="text-decoration-none text-black btn btn-outline-secondary">Comentários<font-awesome-icon
                                    class="ms-2" icon="comments" />
                            </a>


                            <!-- <button class="btn btn-outline-secondary text-black ">
                                <font-awesome-icon icon="reply" flip="horizontal" />
                            </button> -->






                            <!-- Button trigger modal -->
                            <button type="button" class="btn btn-outline-secondary text-black" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">
                                <font-awesome-icon icon="reply" flip="horizontal" />
                            </button>

                            <!-- Modal -->
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">

                                            <div class="d-flex flex-row mb-3 ">
                                                <Avatar class="" />
                                                <h5 class="card-title d-flex align-content-center flex-wrap ms-3">William
                                                    Victor Soares Silva
                                                    Marques Fraga</h5>
                                                <font-awesome-icon icon="circle-check" class="" size="lg" />
                                                <Star class="ms-2" />
                                            </div>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="form-floating">
                                                <textarea class="form-control" placeholder="Leave a comment here"
                                                    id="floatingTextarea2" style="height: 100px"></textarea>
                                                <label for="floatingTextarea2">Comments</label>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger"
                                                data-bs-dismiss="modal">Sair</button>
                                            <button type="submit" class="btn btn-primary">Enviar</button>
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
import Avatar from "@/components/AvatarComponent.vue";
import Star from "@/components/StarComponent.vue"

export default {
    name: "CardsPrestadorComponent",
    methods: {

    },
    components: {
        Avatar,
        Star


    },

}


</script>
    
<style scoped></style>