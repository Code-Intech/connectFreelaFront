<template>
  <Field name="field" placeholder="teste" :rules="isRequired" />
  <ErrorMessage name="field" />
</template>

<script>


export default {
  name: "TesteComponent",
  methods: {
    isRequired(value) {
      console.log('teste')
      if (value && value.trim() && value.length > 5) {
        return true;
      }
      console.log('teste1')
      return 'This is required';
    }
  }
}
</script>

<style>

</style>