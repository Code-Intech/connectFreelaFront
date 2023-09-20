<template>
  <img
      :src="source ? source : userDefault"
      :alt="alt ? alt : 'user image'"
      :class="[source ? '' : 'userProfileBg']"
      :style="{'height': height, 'width': width}"
  >
</template>

<script>

import personFill from '@/assets/svg/person-fill.svg'

export default {
  name: "AvatarComponent",
  data() {
    return {
      userDefault: personFill
    }
  },
  props: {
    source: {
      type: String,
      required: false
    },
    width: {
      type: String,
      default: "4rem"
    },
    height: {
      type: String,
      default: "4rem"
    },
    alt: String
  }
}
</script>

<style scoped>
  img {
    border-radius: 50%;
  }

  .userProfileBg {
    background: #d3d3d3;
  }

  .userProfileBg path {
    background-color: red;
  }

</style>