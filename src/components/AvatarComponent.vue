<template>
  <img :src="source" :alt="alt">
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AvatarComponent",
  props: {
    source: String,
    alt: String
  }
})
</script>

<style scoped>
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }
</style>