<template >
    <div class="">


        <div class=" bgc rounded-bottom" style="min-height: 88vh ;border: 1px solid; border-color: var(--purple-tertiary);">
            <div class="d-flex justify-content-center text-white p-2 border-top font fs-3"
                style="border-color:  var(--purple-primary);">
                Categorias
            </div>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid ">
                    <form class="d-flex pb-1" role="search">
                        <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search"
                            style="border-color:  var(--purple-tertiary);">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>

            <!-- <div>
                <input type="text" v-model="searchQuery" placeholder="Pesquisar cidade" />
                <select v-model="selectedCity">
                    <option value="">Selecione uma cidade</option>
                    <option v-for="city in filteredCities" :key="city.id" :value="city.id">{{ city.name }}</option>
                </select>
            </div> -->





            <!-- 
            <div class="border rounded p-1" style="background-color: rgb(212, 211, 208);">
                <VueMultiselect class="p-1 rounded " style="background-color: white; border-bottom: 1px solid black; "
                    v-model="selectedCity" :options="cidades" label="name" placeholder="Pesquisar por cidade">
                </VueMultiselect>
            </div> -->


            <!-- 
            <div class="border rounded p-1 "
                style="border-bottom: 1px solid; border-color:  var(--purple-tertiary); background-color: rgb(212, 211, 208);">

                <VueMultiselect class="p-1 rounded " v-model="selectedHabilidade" :options="habilidades"
                    :close-on-select="true" :clear-on-select="false" placeholder="Pesquisar por Habilidade" label="name"
                    track-by="name" style="background-color: white; border-bottom: 1px solid black; ">


                </VueMultiselect>

            </div> -->



            <!-- 
            <div>
                <label class="typo__label">Tagging</label>
                <multiselect v-model="selectedHabilidade" tag-placeholder="Add this as new tag"
                    placeholder="Search or add a tag" label="name" track-by="code" :options="habilidades" :multiple="true"
                    :taggable="true" @tag="addTag">
                </multiselect>
                <pre class="language-json"><code>{{ selectedHabilidade }}</code></pre>
            </div> -->



            <div class="card flex justify-content-center">
                <MultiSelect v-model="selectedHabilidade" :options="habilidades" filter optionLabel="name"
                    placeholder="Select Cities" :maxSelectedLabels="3" class="w-full md:w-20rem" />
            </div>








            <div class="d-flex">


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
            </div>






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




                <!-- Até essa LI é a categoria -->




                <li class="list-group-item rounded" style="border-color:  var(--purple-tertiary);">
                    <div>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed p-1  " type="button" data-bs-toggle="collapse"
                                        data-bs-target="#categoria2" aria-expanded="false" aria-controls="categoria2">
                                        Categoria 2
                                    </button>
                                </h2>
                                <div id="categoria2" class="accordion-collapse collapse"
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
                <li class="list-group-item" style="border-color:  var(--purple-tertiary);">
                    <div>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed p-1  " type="button" data-bs-toggle="collapse"
                                        data-bs-target="#categoria2" aria-expanded="false" aria-controls="categoria2">
                                        Categoria 2
                                    </button>
                                </h2>
                                <div id="categoria2" class="accordion-collapse collapse"
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
                <li class="list-group-item" style="border-color:  var(--purple-tertiary);">
                    <div>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed p-1  " type="button" data-bs-toggle="collapse"
                                        data-bs-target="#categoria2" aria-expanded="false" aria-controls="categoria2">
                                        Categoria 2
                                    </button>
                                </h2>
                                <div id="categoria2" class="accordion-collapse collapse"
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
                <li class="list-group-item" style="border-color:  var(--purple-tertiary);">
                    <div>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed p-1  " type="button" data-bs-toggle="collapse"
                                        data-bs-target="#categoria2" aria-expanded="false" aria-controls="categoria2">
                                        Categoria 2
                                    </button>
                                </h2>
                                <div id="categoria2" class="accordion-collapse collapse"
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
                <li class="list-group-item" style="border-color:  var(--purple-tertiary);">
                    <div>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed p-1  " type="button" data-bs-toggle="collapse"
                                        data-bs-target="#categoria2" aria-expanded="false" aria-controls="categoria2">
                                        Categoria 2
                                    </button>
                                </h2>
                                <div id="categoria2" class="accordion-collapse collapse"
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
                <li class="list-group-item" style="border-color:  var(--purple-tertiary);">
                    <div>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed p-1  " type="button" data-bs-toggle="collapse"
                                        data-bs-target="#categoria2" aria-expanded="false" aria-controls="categoria2">
                                        Categoria 2
                                    </button>
                                </h2>
                                <div id="categoria2" class="accordion-collapse collapse"
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
                <li class="list-group-item" style="border-color:  var(--purple-tertiary);">
                    <div>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed p-1  " type="button" data-bs-toggle="collapse"
                                        data-bs-target="#categoria2" aria-expanded="false" aria-controls="categoria2">
                                        Categoria 2
                                    </button>
                                </h2>
                                <div id="categoria2" class="accordion-collapse collapse"
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
                <li class="list-group-item" style="border-color:  var(--purple-tertiary);">
                    <div>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed p-1  " type="button" data-bs-toggle="collapse"
                                        data-bs-target="#categoria2" aria-expanded="false" aria-controls="categoria2">
                                        Categoria 2
                                    </button>
                                </h2>
                                <div id="categoria2" class="accordion-collapse collapse"
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
                <li class="list-group-item" style="border-color:  var(--purple-tertiary);">
                    <div>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed p-1  " type="button" data-bs-toggle="collapse"
                                        data-bs-target="#categoria2" aria-expanded="false" aria-controls="categoria2">
                                        Categoria 2
                                    </button>
                                </h2>
                                <div id="categoria2" class="accordion-collapse collapse"
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
                <li class="list-group-item" style="border-color:  var(--purple-tertiary);">
                    <div>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed p-1  " type="button" data-bs-toggle="collapse"
                                        data-bs-target="#categoria2" aria-expanded="false" aria-controls="categoria2">
                                        Categoria 2
                                    </button>
                                </h2>
                                <div id="categoria2" class="accordion-collapse collapse"
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
                <li class="list-group-item" style="border-color:  var(--purple-tertiary);">
                    <div>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed p-1  " type="button" data-bs-toggle="collapse"
                                        data-bs-target="#categoria2" aria-expanded="false" aria-controls="categoria2">
                                        Categoria 2
                                    </button>
                                </h2>
                                <div id="categoria2" class="accordion-collapse collapse"
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
                <li class="list-group-item" style="border-color:  var(--purple-tertiary);">
                    <div>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed p-1  " type="button" data-bs-toggle="collapse"
                                        data-bs-target="#categoria2" aria-expanded="false" aria-controls="categoria2">
                                        Categoria 2
                                    </button>
                                </h2>
                                <div id="categoria2" class="accordion-collapse collapse"
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
                <li class="list-group-item" style="border-color:  var(--purple-tertiary);">
                    <div>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed p-1  " type="button" data-bs-toggle="collapse"
                                        data-bs-target="#categoria2" aria-expanded="false" aria-controls="categoria2">
                                        Categoria 2
                                    </button>
                                </h2>
                                <div id="categoria2" class="accordion-collapse collapse"
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
                <li class="list-group-item" style="border-color:  var(--purple-tertiary);">
                    <div>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed p-1  " type="button" data-bs-toggle="collapse"
                                        data-bs-target="#categoria2" aria-expanded="false" aria-controls="categoria2">
                                        Categoria 2
                                    </button>
                                </h2>
                                <div id="categoria2" class="accordion-collapse collapse"
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
                <!-- <li class="list-group-item " style="border-color:  var(--purple-tertiary);">A second item</li>
                <li class="list-group-item" style="border-color:  var(--purple-tertiary);">A third item</li> -->
            </ul>
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