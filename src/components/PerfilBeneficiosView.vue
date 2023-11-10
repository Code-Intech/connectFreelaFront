<template>
    <div class="d-flex">
        <BarraPerfilComponent />

        <div class="col-10 d-flex" style="min-height: 80vh; max-height: 80vh">

            <div class="flex-column ">
                <div class="Title">
                    <h1>Benefícios</h1>
                </div>

                <div class="flex-colum">
                    <ul>
                        <li>Acesso antecipado a serviços;</li>
                        <li>Prioridade no envio de propostas;</li>
                        <li>Visualização do valor das propostas.</li>
                    </ul>
                </div>
            </div>

            <div class="w-100 d-flex align-items-end justify-content-end">
                <button class="btn btn-primary me-3" data-bs-toggle="modal" data-bs-target="#assinar"
                    data-bs-whatever="@getbootstrap">Assinar</button>
            </div>

            <div class="modal fade" id="assinar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Entre com as informações de Pagamento</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">




                            <div class="rounded" style="background-color: blueviolet; width: 100%; height: 220px;">


                                <div style="height: 20px;">

                                </div>

                                <div class="" style="background-color: black; height: 37px;">
                                    a
                                </div>

                                <div class="ms-3 mt-2">
                                    <h5 class="text-white">

                                        Nome do titular do cartão
                                    </h5>
                                </div>


                                <div class="ms-3 mt-4">
                                    <h4 class="text-white">

                                        XXXX XXXX XXXX XXXX
                                    </h4>
                                </div>


                                <div class="d-flex mt-4">


                                    <div class="ms-3">

                                        <h6 class="text-white">
                                            Valid
                                        </h6>
                                        <h5 class="text-white">
                                            XX/XX
                                        </h5>
                                    </div>

                                    <div class="ms-5">
                                        <h6 class="text-white">
                                            CVV
                                        </h6>
                                        <h5 class="text-white">
                                            XXX
                                        </h5>
                                    </div>



                                </div>


                            </div>



                            <form>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Número do Cartão:</label>
                                    <input type="number" class="form-control" id="recipient-name">
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <label for="recipient-name" class="col-form-label">Data de Validade:</label>
                                        <input type="date" class="form-control">
                                    </div>
                                    <div class="col">
                                        <label for="recipient-name" class="col-form-label">CVV:</label>
                                        <input type="number" class="form-control">
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Nome do titular:</label>
                                    <input type="text" class="form-control" id="recipient-name">
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">Assinar</button>
                        </div>
                    </div>
                </div>
            </div>




        </div>



    </div>
</template>

<script>

import BarraPerfilComponent from "@/components/BarraPerfilComponent.vue";


export default {
    name: "PerfilBeneficiosView",
    components: {
        BarraPerfilComponent,

    },
    methods: {

    }
}













</script>

<style scoped>
.btn {
    background-color: var(--purple-primary);
    border: none;

}

.btn:hover {
    background-color: #9749FE;
}
</style>
