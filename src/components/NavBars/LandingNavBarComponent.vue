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


        <div>

          <div v-if="store.getters.GetToken == null">

            <div class="  " @click="$router.push({ path: '/login' })">
              <a class="   " style="" type="button">
                <!-- <font-awesome-icon icon="user" /> -->
                <!-- <img class=" rounded-circle" style="max-width: 30px;max-height: 40px;" src="@/assets/img/avatar.jpg" alt=""> -->
                <avatar :source="store.getters.StateAvatar" width="2rem" height="2rem" />
              </a>

            </div>
          </div>


          <div v-else class="dropstart  " @click="getinfo()">
            <a class="   " style="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <!-- <font-awesome-icon icon="user" /> -->
              <!-- <img class=" rounded-circle" style="max-width: 30px;max-height: 40px;" src="@/assets/img/avatar.jpg" alt=""> -->
              <avatar :source="store.getters.StateAvatar" width="2rem" height="2rem" />
            </a>

            <ul class="dropdown-menu border border-0 ">

              <div class="card" style="width: 18r">
                <avatar :source="store.getters.StateAvatar" height="300px" width="284px" class="card-img-top"
                  :rounded="false" />
                <div class="card-body">
                  <h5 class="card-title">William Fraga:</h5>

                  <div class="d-flex flex-column mb-1 gap-1">
                    <button @click="$router.push({ path: '/perfilbeneficios' })" class="btn btn-primary"
                      style="background-color: goldenrod;border: none;"><font-awesome-icon :icon="['fas', 'medal']" />
                      Plus</button>
                    <button @click="$router.push({ path: '/userperfil' })" class="btn btn-primary "><font-awesome-icon
                        :icon="['fas', 'user-large']" /> Perfil</button>
                    <button class="btn btn-primary"><font-awesome-icon :icon="['fas', 'envelope']" />
                      Notificações</button>



                    <button @click="$router.push({ path: '/perfil' })" class="btn btn-primary"><font-awesome-icon
                        :icon="['fas', 'gear']" /> Config</button>




                    <button class="btn btn-primary"><font-awesome-icon :icon="['fas', 'circle-half-stroke']" />
                      Tema</button>
                    <button class="btn btn-primary"><font-awesome-icon :icon="['fas', 'comments-dollar']" />
                      Memsagens</button>
                    <button @click="LogOutM()" class="btn btn-primary logoff" style="border: none;"><font-awesome-icon
                        :icon="['fas', 'power-off']" /></button>
                  </div>
                </div>
              </div>

            </ul>
          </div>

        </div>





      </div>
    </div>



  </nav>
</template>

<script>
import avatar from "@/components/AvatarComponent.vue"
import store from "@/store";
import { mapActions, mapGetters, mapMutations } from 'vuex'
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
    ...mapActions(["getInfoUser", "getAvatar"]),
    ...mapGetters(["GetToken"]),
    ...mapMutations(["LogOut", "LogOutAvatar", "LogOutUpUser", "LogOutPrestador"]),
    getinfo() {
      try {
        this.getInfoUser(this.GetToken());
      } catch (error) {
        // console.log(this.GetToken());
      }
    },
    LogOutM() {
      this.$router.push("/");

      setTimeout(() => {
        // Função a ser executada após 2 segundos
        this.LogOut();
        this.LogOutAvatar();
        this.LogOutUpUser();
        this.LogOutPrestador();
      }, 2000);
    },


  },
  login() {
    this.$router.push("/login");
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