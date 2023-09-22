<template>
    <div class="mt-3 ms-3 d-block border rounded" style="height: 88vh; ">
        <div>
            <h2 class="m-3">
                William Victor Soares Silva Marques Fragas
            </h2>
        </div>


        <div class="border rounded m-2 overflow-y-auto" style="height: 25vh; ">
            <h4 class="m-3 h4">
                Sobre
            </h4>


            <div class="m-3">
                <p class="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro asperiores voluptatem laboriosam,
                    voluptas nisi consectetur aut quia perferendis accusamus debitis. Minus officia omnis voluptatum, culpa
                    accusamus aut voluptatibus ipsum labore?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptatem? Aut reprehenderit
                    aspernatur dignissimos nostrum delectus deleniti corrupti unde nihil dolores incidunt. Eum culpa labore,
                    aspernatur dicta autem facere. Vel?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit quas explicabo ab! Deserunt,
                    culpa libero eveniet ipsam quae quas molestiae provident modi, excepturi ipsum neque laudantium nemo
                    suscipit quisquam?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta illum voluptates officiis, sapiente
                    maxime asperiores nesciunt dolorum, voluptas laborum consequuntur nulla quas amet! Deleniti architecto,
                    itaque beatae soluta officiis quasi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quo voluptatem? Adipisci, minima
                    vero iusto atque enim, quibusdam, quisquam illo iure hic velit impedit alias eligendi molestias officia
                    accusamus quod!
                </p>

            </div>


        </div>






        <div class="border rounded m-2 ">


            <div class="border-bottom">
                <h4 class="m-3 h4 ">
                    Habilidades
                </h4>
            </div>

            <div class="m-3 d-flex">

                <ul class="me-5">
                    <li>
                        PHP
                    </li>
                    <li>
                        Jquery
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        SQL
                    </li>
                    <li>
                        WordPress
                    </li>
                </ul>
                
                <ul class="me-5">
                    <li>
                        PHP
                    </li>
                    <li>
                        Jquery
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        SQL
                    </li>
                    <li>
                        WordPress
                    </li>
                </ul>


            </div>



        </div>





        <div class="border rounded m-2" >

            <div class="border-bottom ">
                <h4 class="m-3">
                    Avaliações
                </h4>
            </div>


            <div class="border border-black rounded m-2" style="background-color: rgba(161, 158, 158, 0.671);">
                
                <div class="m-2 d-flex">
                    <Star class="flex-grow-1"/>
                    
                    <h6 class="m-1">
                        Valor do Serviço
                    </h6>
                    
                    <h6 class="m-1">
                        $900,00
                    </h6>
                </div>

                <div class="m-2">
                    <p>
                        Landing Page WorldPress
                    </p>
                </div>



                <div class="m-2">
                    <p>
                        Otimo Profíssional!
                    </p>
                </div>






                <div class="d-flex m-2">
                    <Avatar/>
                    <h6 class="d-flex align-content-center flex-wrap ms-3">
                        Larrisa Santos
                    </h6>
                </div>


            </div>


        </div>





















    </div>
</template>
    
<script>
import Avatar from "@/components/AvatarComponent.vue";
import Star from "@/components/StarComponent.vue"

export default {
    name: "UserPerfilComponent",
    methods: {

    },
    components: {
        Avatar,
        Star


    },

}


</script>
    
<style scoped></style>