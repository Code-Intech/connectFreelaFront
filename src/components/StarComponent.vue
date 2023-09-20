<template>
  <div class="d-flex flex-row">
    <span v-for="index in Number(max)" :key="index">
      <img :src="getStarImage(index)" alt="Star" />
    </span>
  </div>
</template>

<script>

import star from '@/assets/svg/star.svg'
import starFill from '@/assets/svg/star-fill.svg'
import starHalf from '@/assets/svg/star-half.svg'

export default {
  name: "StarComponent",
  data() {
    return {
      star: star,
      starFill: starFill,
      starHalf: starHalf,
    }
  },
  props: {
    stars: {
      type: [Number, String],
      required: true,
      default: 0
    },
    max: {
      type: [String, Number],
      required: false,
      default: 5
    }
  },
  methods: {
    getStarImage(index) {
      if (index <= this.stars) {
        return this.starFill;
      } else if (index - 0.5 <= this.stars) {
        return this.starHalf;
      } else {
        return this.star;
      }
    },
  },
}
</script>

<style scoped>

</style>