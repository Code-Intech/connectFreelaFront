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
                <button class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal"
                    data-bs-whatever="@getbootstrap">Assinar</button>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Entre com as informações de Pagamento</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
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
