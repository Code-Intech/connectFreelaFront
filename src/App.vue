<template>
  <NavBarComponent />
  <router-view />
  <!-- <FooterComponent/> -->
</template>

<script>

import NavBarComponent from "@/components/NavBars/NavBarComponent.vue";
// import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: 'App',
  components: {
    NavBarComponent,
    // FooterComponent,
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
