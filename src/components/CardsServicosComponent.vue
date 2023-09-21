<template>
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            <!-- <div class="col-1">

                <div class="flex">

                    <avatar src="../assets/img/avatar.jpg" alt="calango" />
                </div>

            </div> -->
            <AvatarComponent />
            <div class="texts">
                <text class="fst-italic">Nome de perfil</text>
                <p class="fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">Tipo de post</p>
            </div>
        </div>
        <div class="card-body">
            <img src="../assets/img/CardServico.png" class="card-img-top" alt="">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            <div class="buttuns">
                <button class="btn btn-primary"
                    style="background-color: rgb(11, 217, 11); font-size: small; border:none;">Enviar Proposta</button>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                    style="background-color: rgb(1, 119, 245); font-size: small; border:none;">
                    Mais Detalhes
                </button>
            </div>
        </div>
    </div>


    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                     <AvatarComponent />
            <div class="texts">
                <text class="fst-italic">Nome de perfil</text>
                <p class="fst-italic" style="font-size: smaller; color:rgb(103, 102, 102)">Tipo de post</p>
            </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <img src="../assets/img/CardServico.png" class="card-img-top" alt="">
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia praesentium fugiat quia, facilis nemo error esse, expedita nostrum consequuntur accusamus molestias, quas at eius ut hic nulla illo accusantium. Quidem.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quis, non nihil mollitia, voluptatum consequuntur deserunt possimus repellendus sunt commodi numquam eos? Quidem harum beatae numquam inventore in dolorem ipsam.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem voluptatem tempore rem autem accusamus molestias illo ratione sed molestiae beatae officiis, nihil maxime, modi, aliquam sint ipsum explicabo omnis hic.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, perspiciatis? Amet, mollitia molestias, nesciunt velit tempora hic corrupti, vitae debitis rerum animi rem veritatis asperiores officiis ex laborum! Illum, totam!
    
            </p>
            <div class="buttuns">
                <button class="btn btn-primary"
                    style="background-color: rgb(11, 217, 11); font-size: small; border:none;">Enviar Proposta</button>
            </div>
                </div>
                <!-- <div class="modal-footer">
                    
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import AvatarComponent from './AvatarComponent.vue';



export default {
    name: "CardsServiçosComponent",
    methods: {

    },
    components: {
        AvatarComponent
    },

}


</script>

<style scoped>
.buttuns {
    display: flex;
}

.texts {
    padding-top: 1rem;
    padding-left: 1rem;
}

.card-header {
    display: flex;
}
</style>

