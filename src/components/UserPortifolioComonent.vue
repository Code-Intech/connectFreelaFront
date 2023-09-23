<template >
    <div>




        <div class="card" style="width: 20rem; ">
            <img src="" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">Album de Macaco</h5>
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="../assets/img/mamaco.png" class="d-block w-100" alt="">
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/img/mamaco.png" class="d-block w-100" alt="">
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/img/mamaco.png" class="d-block w-100" alt="">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div>
                    <button class="btn btn-primary mt-3" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                        Ver Album
                    </button>
                </div>
            </div>
        </div>



        <!-- 
        <p>
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample"
                aria-expanded="false" aria-controls="collapseWidthExample">
                Toggle width collapse
            </button>
        </p> -->
        <div style="min-height: 120px;">
            <div class="collapse collapse-horizontal" id="collapseWidthExample">
                <div class="card card-body" style="max-width: 70rem;">
                    <div id="carouselExample" class="carousel slide">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="../assets/img/mamaco.png" class="d-block w-100" alt="">
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/img/mamaco.png" class="d-block w-100" alt="">
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/img/mamaco.png" class="d-block w-100" alt="">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>




    </div>
</template>
        
<script>


export default {
    name: "UserPortifolioComonent",
    methods: {

    },
    components: {



    },

}


</script>
        
<style scoped >@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Lobster&display=swap');</style>