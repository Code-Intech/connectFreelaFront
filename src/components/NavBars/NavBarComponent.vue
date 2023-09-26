<template>

  <LandingNavBarComponent/>

  <nav class="navbar cormain">
    <div class="container-fluid " >
      
      <div></div>
      <div class="d-flex justify-content-between align-items-center gap-2">
        <div class="d-block">
          <form class="d-flex" role="search">
            <input class="form-control form-control-sm" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success corbotao " style="color: white;" type="submit"><font-awesome-icon icon="search" /></button>
          </form>
        </div>
        <div class="dropstart ">
          <button class="btn btn-secondary corbotao" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </button>
          <ul class="dropdown-menu btcat">
            <div class="d-flex flex-column">
              <div class="d-flex">
                <div>
                  <!-- <img style="max-width: 450px;max-height: 500px;margin-left: 8px;" src="../../assets/img/imagem-user.png" alt="" srcset=""> -->
                  <Avatar class="m-2" height="20rem" width="20rem" :rounded="false" src="https://img.freepik.com/fotos-premium/imagem-3d-de-uma-forma-de-ilha-tropical-flutuante_665280-6955.jpg"/>
                </div>
                <div class="border-end "> 
                  <li><a class="dropdown-item " href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </div>
                <div class="border-end">
                  <li><a class="dropdown-item " href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </div>
                <div>
                  <li><a class="dropdown-item " href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </div>
              </div>
            </div>
          </ul>
        </div>
        <button class="btn btn-secondary corbotao" type="button">
          Desenvolvedor
        </button>
        <button class="btn btn-secondary corbotao" type="button">
          Pintor
        </button>
      </div>

    </div>
  </nav>
</template>

<script>
import LandingNavBarComponent from "@/components/NavBars/LandingNavBarComponent.vue";
import Avatar from "@/components/AvatarComponent.vue"


export default {
  name: 'TesteMenuSidebar',
  components: {
    LandingNavBarComponent,
    Avatar
  },
}
</script>

<style scoped>

.btcat{
  background-color: var(--purple-primary);
  color: white;
  border-radius: 5px;
}


.dropdown-item:hover{
  background-color: var(--purple-quaternary);
}



.btn:hover{
  background-color: var(--purple-quaternary);
}



.cormain{
  background-color: var(--purple-tertiary);

}

.corbotao {
  border: none;
  background-color: var(--purple-primary);
}


.cormain a {
  color: white;

}









/* --purple-primary: #5A00D1;
    --purple-secondary: #25004E;
    --purple-tertiary: #7711F0;
    --purple-quaternary: #9749FE;
    --white-primary: #EFEDF8; */





</style>