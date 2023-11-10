<template>
  <LandingNavBarComponent />

  <nav class="navbar cormain">
    <div class="container-fluid ">
      <div></div>
      <div class="d-flex justify-content-between align-items-center gap-2">
        <button @click="getsallservicos()" class="btn btn-secondary corbotao" type="button">
          Ver Serviços
        </button>
        <button @click=" getprestador()" class="btn btn-secondary corbotao" type="button">
          Ver Prestador
        </button>
        <button @click="$router.push({ path: '/CriarServico' }), getCriarServico()" class="btn btn-secondary corbotao"
          type="button">
          Criar Serviço
        </button>
      </div>

    </div>
  </nav>
</template>

<script>
import LandingNavBarComponent from "@/components/NavBars/LandingNavBarComponent.vue";
import store from "@/store";
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'TesteMenuSidebar',
  components: {
    LandingNavBarComponent,
  },
  data() {
    return {
      selectedCities: null,
      groupedCities: [
        {
          label: 'Germany',
          code: 'DE',
          items: [
            { label: 'Berlin', value: 'Berlin' },
            { label: 'Frankfurt', value: 'Frankfurt' },
            { label: 'Hamburg', value: 'Hamburg' },
            { label: 'Munich', value: 'Munich' }
          ]
        },
        {
          label: 'USA',
          code: 'US',
          items: [
            { label: 'Chicago', value: 'Chicago' },
            { label: 'Los Angeles', value: 'Los Angeles' },
            { label: 'New York', value: 'New York' },
            { label: 'San Francisco', value: 'San Francisco' }
          ]
        },
        {
          label: 'Japan',
          code: 'JP',
          items: [
            { label: 'Kyoto', value: 'Kyoto' },
            { label: 'Osaka', value: 'Osaka' },
            { label: 'Tokyo', value: 'Tokyo' },
            { label: 'Yokohama', value: 'Yokohama' }
          ]
        }
      ]
    };
  },
  computed: {
    store() {
      return store
    },
  },
  methods: {
    validateOnBack: Boolean,
    ...mapActions(["getcategory", "getProfessions", "getSkills", "getAllPrestadores", "getServico", "getAvatarNoToken"]),
    ...mapGetters(["GetToken"]),



    async getCriarServico() {
      await this.getcategory(await this.GetToken());
      await this.getProfessions(await this.GetToken());
      await this.getSkills(await this.GetToken());

    },

    async getprestador() {


      await this.getAllPrestadores()





      this.$router.push({ path: '/Prestador' })
    },

    async getsallservicos() {

      await this.getServico()

      this.$router.push({ path: '/Servicos' })


    }


  },
}
</script>

<style scoped>
.btcat {
  background-color: var(--purple-primary);
  color: white;
  border-radius: 5px;
}


.dropdown-item:hover {
  background-color: var(--purple-quaternary);
}



.btn:hover {
  background-color: var(--purple-quaternary);
}



.cormain {
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