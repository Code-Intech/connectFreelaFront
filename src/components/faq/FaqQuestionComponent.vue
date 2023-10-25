<template>
  <p>
    <button class="btn btn-outline-dark btn-faq" type="button" data-bs-toggle="collapse" :data-bs-target="'#'+id + 'collapse'"
            aria-expanded="false" :aria-controls="id + 'collapse'">
      {{ question }}
    </button>
  </p>
  <div class="mb-2">
    <div class="collapse" :id="id + 'collapse'">
      <div class="card card-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FaqQuestionComponent',
  props: {
    id: {
      type: String,
      require: true
    },
    question: {
      type: String,
      require: true
    }
  }
}
</script>

<style scoped>

.btn-faq {
  max-width: 100%;
  width: 100%;
  text-align: justify;
  transition: ease-in-out 1s;
}

.card.card-body {
  max-width: 100%;
  width: 100%;
  text-align: justify;
  transition: ease-in-out 1s;
}

.btn-faq:hover {
  background: var(--purple-quaternary);
}

@media screen and (max-width: 750px) {
  .btn-faq {
    max-width: 100%;
  }

  .card.card-body {
    max-width: 100%;
  }

}
</style>