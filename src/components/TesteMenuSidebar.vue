<template>
  <div>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <button
            class="rounded border-0"
            type="button"
            @click="toggleSidebar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>

    <!-- Sidebar -->
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div :class="['sidebar', { 'active': sidebarOpen }]">
            <!-- Botão para fechar a sidebar -->
            <button class="close-sidebar-btn" @click="closeSidebar">
              Fechar Sidebar
            </button>

            <!-- Conteúdo da sidebar aqui -->
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link" href="#">Item 1</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Item 2</a>
              </li>
              <!-- Adicione mais itens conforme necessário -->
            </ul>
          </div>
        </div>
        <div class="col-md-9">
          <!-- Conteúdo principal aqui -->
          <div class="container">
            <h1>Conteúdo Principal</h1>
            <!-- Adicione o conteúdo que você deseja exibir abaixo da navbar e da sidebar -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TesteMenuSidebar',
  data() {
    return {
      sidebarOpen: false
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    closeSidebar() {
      this.sidebarOpen = false;
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  height: 100%;
  position: fixed;
  top: 56px; /* Altura da navbar */
  left: -250px;
  transition: left 0.3s;
  background-color: #f8f9fa;
  padding-top: 20px;
}

.sidebar.active {
  left: 0;
}

.close-sidebar-btn {
  margin: 10px;
}
</style>