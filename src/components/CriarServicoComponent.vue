
<template>
    <div class="d-flex justify-content-center">

        <div class="border rounded p-3 mt-4" style="max-width: 120vh; width: 70%;">


            <div class="d-flex  flex-wrap mb-3">


                <div class="p-2 flex-grow-1">
                    <div class="card flex justify-content-center">
                        <MultiSelect v-model="selectedCities" :options="cities" display="chip" filter optionLabel="name"
                            placeholder="Cidade do serviço" :maxSelectedLabels="3" class="w-full md:w-20rem" />
                    </div>





                </div>
                <div class="p-2 flex-grow-1">
                    <div class="card flex justify-content-center">
                        <MultiSelect v-model="selectedCities" :options="cities" display="chip" filter optionLabel="name"
                            placeholder="Habilidades necessarias" :maxSelectedLabels="3" class="w-full md:w-20rem" />
                    </div>





                </div>
                <div class="p-2 " style="width: 300px;">

                    <select class="form-select" aria-label="Default select example">
                        <option selected>Presencial/Remoto</option>
                        <option value="1">Remoto</option>
                        <option value="2">Hibrido</option>
                        <option value="3">Presencial</option>
                    </select>



                </div>
            </div>


            <!-- <div class="mb-3" style="max-width: 500px;">
                <label for="customRange1" class="form-label">Estimativa de Distancia</label>
                <input type="range" class="form-range" min="0" max="100" id="customRange1" style="">
            </div> -->
            <div class=" flex justify-content-center mb-3" style="max-width: 500px;">
                <label for="">Estimativa de distancia em KM</label>
                <div class="w-14rem">
                    <InputText v-model.number="distancia" class="w-full" style="width: 100%;" />
                    <Slider v-model="distancia" class="w-full" />
                </div>
            </div>




            <div class="">

                <label class="d-block" for="">Digite o Valor do Serviço</label>
                <InputNumber class="" v-model="value1" inputId="stacked-buttons" showButtons mode="currency"
                    currency="BRL" />
            </div>

            <div class="mb-3" style="max-width: 300px;">
                <label class="d-block" for="">Estimativa de idade</label>
                <input class="form-control d-block" type="number" name="" id="">
            </div>



            <div class="d-flex justify-content-between mb-3">


                <div class="card flex justify-content-center" style="min-width: 300px;">
                    <label for="">Data de Inicio</label>
                    <Calendar v-model="date" showIcon />
                </div>
                <div class="card flex justify-content-center" style="min-width: 300px;">
                    <label for="">Data de Termino</label>
                    <Calendar v-model="date" showIcon />
                </div>

            </div>







            <div class="card mb-3">
                <Toast />
                <FileUpload name="demo[]" url="./upload.php" @upload="onAdvancedUpload($event)" :multiple="true"
                    accept="image/*" :maxFileSize="1000000">
                    <template #empty>
                        <p>Carregue suas imagens aqui.</p>
                    </template>
                </FileUpload>
            </div>










            <div class="form-floating mb-3">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                    style="height: 100px"></textarea>
                <label for="floatingTextarea2">Comments</label>
            </div>


            <div class="d-flex flex-row-reverse">

                <button class="btn btn-primary">Criar Serviço</button>
            </div>
        </div>

    </div>
</template>
  
<script>
export default {
    name: "CriarServicoComponent",
    data() {
        return {
            selectedCities: null,
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ],
            distancia: 100,
        };
    },
    methods: {
        onAdvancedUpload() {
            this.$toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
        }
    }
};
</script>