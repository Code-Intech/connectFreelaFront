<template>
  <Form>
    <Field name="field" :rules="isRequired" />
    <ErrorMessage name="field" />
  </Form>
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