<template >
    <div class="">


        <div class=" bgc rounded-bottom" style="min-height: 88vh ;border: 1px solid; border-color: var(--purple-tertiary);">
            <div class="d-flex justify-content-center text-white p-2 border-top font fs-3"
                style="border-color:  var(--purple-primary);">
                Categorias
            </div>
            <!-- <nav class="navbar bg-body-tertiary" style="border-bottom: 1px solid; border-color: var(--purple-primary);">
                <div class="container-fluid ">
                    <form class="d-flex pb-1" role="search">
                        <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search"
                            style="border-color:  var(--purple-tertiary);">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav> -->

            <span class="p-input-icon-left d-grid gap-1 ">

                <font-awesome-icon icon="magnifying-glass" class="pi " />
                <InputText v-model="value1" placeholder="Search" style="min-width: 100px;" />
            </span>



            <div class="p-1">

                <div class="card flex justify-content-center">
                    <MultiSelect v-model="selectedCity" :options="cidades" filter optionLabel="name"
                        placeholder="Pesquisar por Cidades" :maxSelectedLabels="3" class="w-full md:w-20rem sizew " />
                </div>
            </div>



            <div class="p-1">

                <div class="card flex justify-content-center">
                    <MultiSelect v-model="selectedHabilidade" :options="habilidades" filter optionLabel="name"
                        placeholder="Pesquisar por Habilidades" :maxSelectedLabels="3" class="w-full md:w-20rem sizew" />
                </div>
            </div>




            <!-- <div class="d-flex">


                <div style="border-bottom: 1px solid; border-color:  var(--purple-tertiary);">

                    <div class="input-group ">
                        <span class="input-group-text">$</span>
                        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"
                            placeholder="Min">
                        <span class="input-group-text">.00</span>
                    </div>


                </div>
                <div style="border-bottom: 1px solid; border-color:  var(--purple-tertiary);">

                    <div class="input-group ">
                        <span class="input-group-text ">$</span>
                        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"
                            placeholder="Max">
                        <span class="input-group-text ">.00</span>
                    </div>


                </div>
            </div> -->



            <div class="flex-auto p-inputgroup flex-1 p-1">
                <!-- <span class="p-inputgroup-addon"
                    style="border-bottom: 1px solid;border-color: var(--purple-primary);">$</span> -->
                <InputNumber class="sizew " style="width: 100%;" v-model="value1" inputId="currency-us" mode="currency"
                    currency="USD" locale="en-US" placeholder="Valor min $500,00" />
            </div>
            <div class="flex-auto p-inputgroup flex-1 p-1">
                <!-- <span class="p-inputgroup-addon"
                    style="border-bottom: 1px solid;border-color: var(--purple-primary);">$</span> -->
                <InputNumber class="sizew" style="width: 100%;" v-model="value1" inputId="currency-us" mode="currency"
                    currency="USD" locale="en-US" placeholder="Valor Max $5.000,00" />
            </div>



            <div class="p-1">

                <div class="card flex justify-content-center ">
                    <MultiSelect v-model="cat1" :options="cats" optionLabel="name" placeholder="Categoria 1"
                        :maxSelectedLabels="3" class="w-full md:w-20rem" />
                </div>
            </div>




            <!-- 
            <ul class="list-group list-group-flush">
                <li class="list-group-item rounded" style="border-top: 1px solid; border-color:  var(--purple-tertiary);">
                    <div>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed p-1  " type="button" data-bs-toggle="collapse"
                                        data-bs-target="#categoria1" aria-expanded="false" aria-controls="categoria1">
                                        Categoria 1
                                    </button>
                                </h2>
                                <div id="categoria1" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <div class="form-check">

                                            <div>
                                                <input type="checkbox" name="" id="">
                                                <label for="" class="ps-2">Profissão 1</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="" id="">
                                                <label for="" class="ps-2">Profissão 1</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="" id="">
                                                <label for="" class="ps-2">Profissão 1</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="" id="">
                                                <label for="" class="ps-2">Profissão 1</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="" id="">
                                                <label for="" class="ps-2">Profissão 1</label>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>




                
            </ul> -->



        </div>
    </div>



























    <!-- <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Accordion Item #1
                </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
                    <code>.accordion-flush</code> class. This is the first item's accordion body.
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Accordion Item #2
                </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
                    <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being
                    filled with some actual content.
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Accordion Item #3
                </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
                    <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the space to make it look, at least at first
                    glance, a bit more representative of how this would look in a real-world application.
                </div>
            </div>
        </div>




        
    </div> -->
</template>

<script>

import MultiSelect from 'primevue/multiselect';


export default {
    name: "FiltroServicosComponent",
    // data() {
    //     return {
    //         cities: [
    //             { id: 1, name: 'São Paulo' },
    //             { id: 2, name: 'Rio de Janeiro' },
    //             { id: 3, name: 'Belo Horizonte' },
    //             { id: 4, name: 'Brasília' },
    //             { id: 5, name: 'Salvador' },
    //             { id: 6, name: 'Curitiba' },
    //             { id: 7, name: 'Fortaleza' },
    //             { id: 8, name: 'Recife' },
    //             { id: 9, name: 'Porto Alegre' },
    //             { id: 10, name: 'Manaus' },
    //             { id: 11, name: 'Natal' },
    //             { id: 12, name: 'Goiânia' },
    //             { id: 13, name: 'Florianópolis' },
    //             { id: 14, name: 'Vitória' },
    //             { id: 15, name: 'Campinas' },
    //             { id: 16, name: 'João Pessoa' },
    //             { id: 17, name: 'São Luís' },
    //             { id: 18, name: 'Maceió' },
    //             { id: 19, name: 'Teresina' },
    //             { id: 20, name: 'Cuiabá' },
    //             // Adicione mais cidades conforme necessário
    //         ],
    //         searchQuery: '',
    //         selectedCity: '',
    //     };
    // },
    // computed: {
    //     filteredCities() {
    //         const query = this.searchQuery.toLowerCase();
    //         return this.cities.filter(city => city.name.toLowerCase().includes(query));
    //     },
    // },
    // watch: {
    //     searchQuery() {
    //         // Atualiza a seleção para a primeira cidade correspondente à pesquisa
    //         const firstMatchingCity = this.filteredCities[0];
    //         if (firstMatchingCity) {
    //             this.selectedCity = firstMatchingCity.id;
    //         } else {
    //             this.selectedCity = ''; // Define como vazio se nenhuma cidade correspondente for encontrada
    //         }
    //     },
    // },

    components: {
        MultiSelect
    },
    data() {
        return {
            cidades: [
                { id: 1, name: 'São Paulo' },
                { id: 2, name: 'Rio de Janeiro' },
                { id: 3, name: 'Belo Horizonte' },
                // Adicione mais cidades conforme necessário
            ],
            selectedCity: null,
            habilidades: [
                { id: 1, name: 'PHP' },
                { id: 2, name: 'JAVA' },
                { id: 3, name: 'JAVASCRIPT' },
                { id: 4, name: 'CSS' },
                { id: 5, name: 'HTML' },
                { id: 6, name: 'VUE' },
                { id: 7, name: 'C#' },
                { id: 8, name: 'C' },
            ],
            selectedHabilidade: null,
            cat1: null,
            cats: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ]

        };
    },
    addTag(newTag) {
        const tag = {
            name: newTag,
            code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
        }
        this.habilidades.push(tag)
        this.selectedHabilidade.push(tag)
    }






}


</script>

<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Lobster&display=swap');



.font {
    font-family: 'Dancing Script', cursive;
    font-family: 'Lobster', cursive;
}


.bgc {
    background-color: var(--purple-tertiary);
}


.ttt {
    background-color: red;
}

.hh:hover {
    background-color: blueviolet;
}
</style>