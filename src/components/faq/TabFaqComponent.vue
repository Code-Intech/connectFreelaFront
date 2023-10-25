<template>
  <div class="tab-pane fade show" :class="className" :id="id" role="tabpanel" :aria-labelledby="id + '-tab'" tabindex="0">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'TabFaqComponent',
  props: {
    className: {
      type: String,
      require: false
    },
    id: {
      type: String,
      require: true
    }
  }
}
</script>