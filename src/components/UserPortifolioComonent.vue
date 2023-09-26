<template >
    <div class="">

        <div class="border rounded  d-flex flex-wrap m-3 mt-4" >

            <div class="" style="min-height: 200px;">
                <div class=" m-4" id="">
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
                                <div class="d-flex justify-content-between">
                                    <button class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#veralbum">
                                        Ver Album
                                    </button>
    
    
    
    
                                </div>
                            </div>
                        </div>
    
                    </div>
                </div>
    
            </div>
    
    
    




            <!-- Modal -->
    
            <div class="modal fade" id="veralbum" tabindex="-1" aria-labelledby="veralbum" aria-hidden="true">
                <div class="modal-dialog  modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="veralbum">Album de Macaco</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
    
                            <div id="carouselEx" class="carousel slide">
                                <div class="carousel-inner" style="max-height: 40rem;">
                                    <div class="carousel-item active">
                                        <img src="../assets/img/mamaco.png" class="d-block w-100" alt="">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="../assets/img/mamaco.png" class="d-block w-100" alt="">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://media.gettyimages.com/id/1404088233/pt/foto/celebes-crested-macaque.jpg?s=612x612&w=0&k=20&c=jM8J85vVSK5YE3ryqEoYc2ARbLOAy-oq4iyv94m-xJk="
                                            class="d-block w-100" alt="">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselEx"
                                    data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselEx"
                                    data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
    
    
                            <div class="border-top border-2 border-black mt-3">
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem magnam
                                    accusantium, laborum suscipit repellendus iure natus voluptatem necessitatibus
                                    error nam sint! Blanditiis alias molestiae molestias quidem officiis,
                                    perferendis voluptates sunt.
                                </p>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sair</button>
    
                        </div>
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