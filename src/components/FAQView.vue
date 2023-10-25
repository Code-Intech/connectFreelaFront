<template>
  <div class="container-xxl mt-5">

    <div class="row mt-5 mb-5 d-flex">

      <div class="col d-flex align-content-center justify-content-center flex-column">

        <div class="card">
          <div class="card-header">
            Perguntas frequentes
          </div>
          <div class="card-body">

            <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <FaqButtonComponent id="valores" class-name="active" text="Valores"/>
                <FaqButtonComponent id="perfil" text="Perfil"/>
                <FaqButtonComponent id="config" text="Configuração"/>
              </div>
            </nav>

          </div>
        </div>

      </div>
    </div>

    <div class="row mt-5 mb-5 d-flex">
      <div class="col d-flex align-content-center justify-content-center flex-column">

        <div class="tab-content" id="nav-tabContent">

          <TabFaqComponent
              class-name="active"
              id="valores"
              text="Valores"
          >
            <FaqQuestionComponent id="valores" question="Index mamaco?">
              Mamaco 0?
            </FaqQuestionComponent>

            <FaqQuestionComponent id="Oferta" question="Index mamaco é o mesmo que antes?">
              Mamaco 1?
            </FaqQuestionComponent>
          </TabFaqComponent>


          <TabFaqComponent
              id="perfil"
              text="Perfil"
          >
            <FaqQuestionComponent id="perfil"  question="Index mamaco?">
              Mamaco 1?
            </FaqQuestionComponent>
          </TabFaqComponent>


          <TabFaqComponent
              id="config"
              text="Configuração"
          >
            <FaqQuestionComponent id="config"  question="Configuração?">
              Configuração 1?
            </FaqQuestionComponent>
          </TabFaqComponent>

        </div>

      </div>
    </div>


  </div>

</template>


<script>


import TabFaqComponent from "@/components/faq/TabFaqComponent.vue";
import FaqQuestionComponent from "@/components/faq/FaqQuestionComponent.vue";
import FaqButtonComponent from "@/components/faq/FaqButtonComponent.vue";

export default {
  name: "FAQView",
  methods: {},
  components: {
    FaqButtonComponent,
    FaqQuestionComponent,
    TabFaqComponent

  },

}


</script>