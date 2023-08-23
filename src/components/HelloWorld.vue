<template>
    <div class="container">
      <button class="btn btn-primary">
        {{ text }}
        <font-awesome-icon icon="phone" />
      </button>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    text: {
      required: true,
      type: String
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
