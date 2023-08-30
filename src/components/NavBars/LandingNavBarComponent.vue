<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid d-flex justify-content-between">
      <a class="navbar-brand">Navbar</a>

      <div class="d-flex gap-2">
        <button class="btn btn-secondary" type="button">
          Mamaco
        </button>
        <button class="btn btn-secondary" type="button">
          Mamaco
        </button>

        <div class="dropstart">
          <button class="btn btn-secondary rounded-circle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <font-awesome-icon icon="user"/>
          </button>

          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "LandingNavBarComponent.vue"
}
</script>

<style scoped>

</style>