<template>

  <NavBarComponent />
  <router-view />

</template>

<script>

import NavBarComponent from "@/components/NavBars/NavBarComponent.vue";


export default {
  name: 'App',
  components: {
    NavBarComponent
  }
}
</script>

<style>
@import "./assets/css/main.css";
</style>
