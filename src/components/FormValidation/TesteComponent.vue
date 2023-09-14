<template>

<div class="col-10 h-100 d-inline-block">adwad</div>
</template>

<script>


export default {
  name: "TesteComponent",
  methods: {
    isRequired(value) {
      if (value && value.trim() && value.length > 5) {
        return true;
      }
      return 'This is required';
    }
  }
}
</script>

<style>

</style>