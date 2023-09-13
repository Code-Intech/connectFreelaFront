<template>
    <div class="col-10 h-100 d-inline-block">
        <form action="">
            <div>
                <div>
                    <h2>Informações Pessoas</h2>
                </div>

                <div class="">
                    <label class="form-label " for="">Nome do Perfil</label>
                    <input class="form-control" type="text" name="" id="" style="max-width: 800px;border-color: var(--purple-primary);">
                </div>

                <div class="row">
                    <div class="col">
                        <label class="form-label" for="">CPF:</label>
                        <input class="form-control" type="text" name="" id="" style="max-width: 800px;border-color: var(--purple-primary);" disabled readonly value="48685877873">
                    </div>
                    <div class="col">
                        <label class="form-label" for="">Data de Nascimento:</label>
                        <input class="form-control" type="text" name="" id="" style="max-width: 800px;border-color: var(--purple-primary);">
                    </div>

                </div>



                <div class="row">
                    <div class="col">
                        <label class="form-label" for="">Gênero</label>
                        <input class="form-control" type="text" name="" id="" style="max-width: 800px;border-color: var(--purple-primary);">
                    </div>

                    <div class="col">
                        <label class="form-label" for="">Telefone:</label>
                        <input class="form-control" type="text" name="" id="" style="max-width: 800px;border-color: var(--purple-primary);">
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label class="form-label" for="">CEP:</label>
                        <input class="form-control" type="text" name="" id="" style="max-width: 800px;border-color: var(--purple-primary);">
                    </div>

                    <div class="col">
                        <label class="form-label" for="">Estado:</label>
                        <input class="form-control" type="text" name="" id="" style="max-width: 800px;border-color: var(--purple-primary);">
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label class="form-label" for="">Cidade:</label>
                        <input class="form-control" type="text" name="" id="" style="max-width: 800px;border-color: var(--purple-primary);">
                    </div>

                    <div class="col">
                        <label class="form-label" for="">Bairro:</label>
                        <input class="form-control" type="text" name="" id="" style="max-width: 800px;border-color: var(--purple-primary);">
                    </div>
                </div>


                <div class="row">
                    <div class="col">
                        <label class="form-label" for="">Endereço:</label>
                        <input class="form-control" type="text" name="" id="" style="border-color: var(--purple-primary);">
                    </div>

                    <div class="col-3">
                        <label class="form-label" for="">Número:</label>
                        <input class="form-control" type="text" name="" id="" style="border-color: var(--purple-primary);">
                    </div>
                </div>



            </div>

            <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-5">
                <input class="btn btn-primary" type="submit" value="Salvar">
            </div>

        </form>


        <form action="" class="mt-3">

            <h2>Área do Prestador</h2>

            <div>

                <div class="row">
                    <div class="col-3">
                        <label class="form-label" for="">Valor da Sua Diária:</label>
                        <input class="form-control" type="text" name="" id="" style="border-color: var(--purple-primary);">
                    </div>

                    <div class="col-3">
                        <label class="form-label" for="">CNPJ:</label>
                        <input class="form-control" type="number" name="" id="" style="border-color: var(--purple-primary);">
                    </div>
                    <div class="col">
                        <label class="form-label" for="">Nome da Sua Empresa:</label>
                        <input class="form-control" type="text" name="" id="" style="border-color: var(--purple-primary);">
                    </div>
                </div>



            </div>

            <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-5">
                <input class="btn btn-primary" type="submit" value="Salvar">
            </div>
        </form>


        <form action="" class="mt-3">

            <h2>Profissões</h2>

            <div>

                <div class="row">
                    <div class="col">
                        <label class="form-label" for="">Profissão:</label>
                        <input class="form-control" type="text" name="" id="" style="border-color: var(--purple-primary);">
                    </div>

                    <div class="col-3">
                        <label class="form-label" for="">Tempo de experiência:</label>
                        <input class="form-control" type="number" name="" id="" style="border-color: var(--purple-primary);">
                    </div>
                </div>




            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-5">
                <input class="btn btn-primary" type="submit" value="Salvar">
            </div>

        </form>


        <form action="" class="mt-3">

            <h2>Informações de conta</h2>

            <div class="row">
                <div class="col">
                    <label class="form-label" for="">E-mail::</label>
                    <input class="form-control" type="text" name="" id="" style="max-width: 800px;border-color: var(--purple-primary);" >
                </div>

                <div class="col">
                    <label class="form-label" for="">Senha:</label>
                    <input class="form-control" type="number" name="" id="" style="max-width: 800px;border-color: var(--purple-primary);">


                    <ul>
                        <li><font-awesome-icon icon="circle" style="max-width: 8px;" /> Deve conter:</li>
                        <li><font-awesome-icon icon="circle" style="max-width: 8px;" /> Letras maiúsculas:</li>
                        <li><font-awesome-icon icon="circle" style="max-width: 8px;" /> Letras minúsculas:</li>
                        <li><font-awesome-icon icon="circle" style="max-width: 8px;" /> Caracter especial:</li>
                        <li><font-awesome-icon icon="circle" style="max-width: 8px;" /> Números: 8 dígitos.</li>
                    </ul>


                </div>


            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
                <input class="btn btn-primary" type="submit" value="Salvar">
            </div>

        </form>


    </div>
</template>

<script>




export default {
    name: "EditarPerfilComponent",
    methods: {
        isRequired(value) {
            if (value && value.trim() && value.length > 5) {
                return true;
            }
            return 'This is required';
        }
    },

}
</script>

<style scoped>




</style>