<template >
    <div class="border-end border-black border-2 border-top "
        style="height: 88vh; background-color: var(--purple-tertiary);">
        <div class="d-flex justify-content-center ">
            <!-- <img class="mt-4 rounded img-fluid" src="../assets/img/mamaco.jpeg" alt="" style="width: 15rem; height: 15rem;"> -->
            <Avatar class="mt-4 img-fluid" width="15rem" height="15rem" :rounded="false" />
        </div>

        <div class="ms-5 me-5 mt-3 d-grid gap-2">
            <!-- <button @click="$router.push({ path: '/' })" class="d-block btn text-white"
                style="border: 2px solid; border-color: var(--purple-quaternary);">Sobre</button> -->
            <button @click="$router.push({ path: '/UserDashboard' })" class="d-block btn text-white"
                style="border: 2px solid; border-color: var(--purple-quaternary);">DashBoard</button>
            <button @click="$router.push({ path: '/UserPortifolio' })" class="d-block btn text-white"
                style="border: 2px solid; border-color: var(--purple-quaternary);">Portifólio</button>
        </div>

    </div>
    <!-- <img src="../assets/img/imagemAle01.jpeg" alt=""> -->
</template>
    
<script>

import Avatar from "@/components/AvatarComponent.vue"
export default {
    name: "PerfilComponent",
    methods: {

    },
    components: {
        Avatar


    },

}


</script>
    
<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Lobster&display=swap');
</style>