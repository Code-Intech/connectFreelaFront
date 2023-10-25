<template>
  <button class="nav-link" :class="className" :id="id + '-tab'" data-bs-toggle="tab" :data-bs-target="'#' + id"
          type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
    {{text}}
  </button>
</template>
<script>
export default {
  name: 'FaqButtonComponent',
  props: {
    id: {
      type: String,
      require: true
    },
    className: {
      type: String,
      require: true
    },
    text: {
      type: String,
      require: true
    },
  }
}
</script>