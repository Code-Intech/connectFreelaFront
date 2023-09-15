<template>
    <div class="col-10 d-inline-block" style="min-height: 80vh; max-height: 80vh">
        <div class="col-10 d-inline-block" style="min-height: 80vh; max-height: 80vh">
            <div class="d-flex">

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

                <div class="" style="padding: 450px">
                    <div class="d-md-flex justify-content-md-end mt-5">
                        <button class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal"
                            data-bs-whatever="@getbootstrap">Assinar</button>
                    </div>
                </div>
            </div>
            <div class="container text-center">
                <div class="row">
                    <div class="col-12 d-inline-block">
                        1 of 3
                    </div>
                    <div class="col-2 d-inline-block">
                        3 of 3
                    </div>
                </div>
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
    <!-- ¡hola, mamaco! -->
<script>


export default {
    name: "PerfilBeneficiosComponent",
    methods: {

    }
}
</script>
  
<style scoped>
.Title {
    padding-left: 30px;
    font-style: italic;
}

.bttt {
    border-radius: 20px;
    border: 1px solid #9749FE;
    background: #7711F0;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
}


.btn {
    background-color: var(--purple-primary);
    border: none;

}

.btn:hover {
    background-color: #9749FE;
}
</style>