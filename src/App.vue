<template>

  <NavBarComponent v-if="!currentPage==='/login'"/>
  <router-view />

</template>

<script>

import NavBarComponent from "@/components/NavBars/NavBarComponent.vue";


export default {
  name: 'App',
  components: {
    NavBarComponent
  },
  data() {
    return {
      currentPage: window.location.pathname,
   }
}
}
</script>

<style>
@import "./assets/css/main.css";
</style>
