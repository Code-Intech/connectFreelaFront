<template>
  <nav class="navbar cormain border-bottom border-black border-1">
    <div class="container-fluid d-flex justify-content-between">
      <a class="navbar-brand text-light nome-empresa fs-3 text">ConnectFreela</a>

      <div class="d-flex gap-2">
        <button @click="$router.push({ path: '/' })" class="btn btn-secondary corbotao" type="button">
          Home
        </button>
        <button @click="$router.push({ path: '/FAQ' })" class="btn btn-secondary corbotao" type="button">
          FAQ
        </button>

        <div class="dropstart  ">
          <a class="   " style="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <!-- <font-awesome-icon icon="user" /> -->
            <!-- <img class=" rounded-circle" style="max-width: 30px;max-height: 40px;" src="@/assets/img/avatar.jpg" alt=""> -->
            <avatar width="2rem" height="2rem" />
          </a>

          <ul class="dropdown-menu border border-0 ">

            <div class="card " style="width: 18rem;">
              <img src="../../assets/img/imagem-user.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">William Fraga:</h5>

                <div class="d-flex flex-column mb-1 gap-1">
                  <button @click="$router.push({ path: '/perfilbeneficios' })" class="btn btn-primary"
                    style="background-color: goldenrod;border: none;"><font-awesome-icon :icon="['fas', 'medal']" />
                    Plus</button>
                  <button @click="$router.push({ path: '/userperfil' })" class="btn btn-primary "><font-awesome-icon
                      :icon="['fas', 'user-large']" /> Perfil</button>
                  <button class="btn btn-primary"><font-awesome-icon :icon="['fas', 'envelope']" /> Notificações</button>



                  <button @click="$router.push({ path: '/perfil' }), getinfo()" class="btn btn-primary"><font-awesome-icon
                      :icon="['fas', 'gear']" /> Config</button>




                  <button class="btn btn-primary"><font-awesome-icon :icon="['fas', 'circle-half-stroke']" />
                    Tema</button>
                  <button class="btn btn-primary"><font-awesome-icon :icon="['fas', 'comments-dollar']" />
                    Memsagens</button>
                  <button class="btn btn-primary logoff" style="border: none;"><font-awesome-icon
                      :icon="['fas', 'power-off']" /></button>
                </div>
              </div>
            </div>

          </ul>
        </div>
      </div>
    </div>



  </nav>
</template>

<script>
import avatar from "@/components/AvatarComponent.vue"
import store from "@/store";
import { mapActions, mapGetters } from 'vuex'
export default {
  name: "LandingNavBarComponent.vue",
  components: {
    avatar,
  },
  computed: {
    store() {
      return store
    }
  },
  methods: {
    validateOnBack: Boolean,
    ...mapActions(["getInfoUser"]),
    ...mapGetters(["GetToken"]),
    getinfo() {
      // console.log(this.GetToken());
      this.getInfoUser(this.GetToken());
    },

  },
}
</script>

<style scoped>
.logoff {
  background-color: rgb(211, 35, 35);
}


/* .logoff:hover{
  background-color: rgb(248, 107, 107);
} */



.cormain {
  background-color: var(--purple-tertiary);

}

.corbotao {
  border: none;
  background-color: var(--purple-primary);
}


.btn:hover {
  background-color: var(--purple-quaternary);
}



.user button img {
  width: 30px !important;
  height: 30px !important;
}


.nome-empresa {

  /* font-size: 10px; */
  font-family: 'Dancing Script', cursive;
}
</style>