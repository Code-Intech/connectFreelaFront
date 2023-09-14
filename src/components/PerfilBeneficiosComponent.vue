<template>
    <div class="col-10 d-inline-block" style="min-height: 80vh; max-height: 80vh">
        <div class="d-flex">

            <div class="flex-column ">
                <div class="Title">
                    <h1>Benefícios</h1>
                </div>

                <div class="beneficiosList">
                    <ul>
                        <li>Beneficio 1</li>
                        <li>Beneficio 2</li>
                        <li>Beneficio 3</li>
                        <li>Beneficio 4</li>
                    </ul>
                </div>
            </div>

            <div class="" style="padding: 450px">
                <div class="d-md-flex justify-content-md-end mt-5">
                <button class="btn btn-primary " type="button">Assinar</button>
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