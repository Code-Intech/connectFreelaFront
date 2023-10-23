<template>
  <div class="container-xxl mt-5">

    <div class="row mt-5 mb-5 d-flex container-world">

      <div class="col d-flex align-content-center justify-content-center flex-column p-5">
        <p class="detail-text">
          Você é um freelancer que tem dificuldades para encontrar um serviço?
          Ou para encontrar o profissional certo para o seu serviço?
        </p>
        <p class="detail-text">
          O ConnectFreela é o lugar certo para te ajudar nesta busca. O site que conecta você, com freelancer de sua
          escolha.
        </p>
        <div class="d-flex seja-prestador-container">
          <button class="btn-responsive seja-prestador-btn btn px-5">Seja prestador</button>
        </div>
      </div>

      <div class="col align-self-center text-center">
        <img class="img-fluid img-world" src="../assets/img/img1.png" alt=""/>
      </div>
    </div>

    <div class="row mt-5 mb-5 container-world">

      <div class="col align-self-center text-center">
        <img class="img-fluid" src="../assets/img/Ajuste.png" alt=""/>
      </div>
      <div class="col d-flex align-content-center justify-content-center flex-column p-5">
        <p class="detail-text">
          Somos um site novo, que planeja otimizar seu tempo e melhorar sua experiencia na procura de profissionais e
          serviços. Então venha fazer parte de nossa comunidade, e relance seu negócio.
        </p>
        <p class="detail-text">
          O ConnectFreela é o lugar certo para te ajudar nesta busca. O site que conecta você, com freelancer de sua
          escolha.
        </p>
      </div>
    </div>

    <div class="row mt-5 mb-5 d-flex align-content-center justify-content-center">
      <h4 class="text-center mb-5">Conheça alguns dos nossos serviços</h4>

      <div class="row d-flex align-content-center justify-content-center gap-1">
        <img class="img-fluid img-jobs" src="../assets/img/12.svg" alt=""/>
        <img class="img-fluid img-jobs" src="../assets/img/31.png" alt=""/>
        <img class="img-fluid img-jobs" src="../assets/img/16.svg" alt=""/>
        <img class="img-fluid img-jobs" src="../assets/img/7.svg" alt=""/>
        <img class="img-fluid img-jobs" src="../assets/img/19.svg" alt=""/>
        <img class="img-fluid img-jobs" src="../assets/img/1.svg" alt=""/>
        <img class="img-fluid img-jobs" src="../assets/img/2.svg" alt=""/>
        <img class="img-fluid img-jobs" src="../assets/img/30.png" alt=""/>
        <img class="img-fluid img-jobs" src="../assets/img/17.svg" alt=""/>
        <img class="img-fluid img-jobs" src="../assets/img/5.svg" alt=""/>
      </div>
    </div>

    <div class="row text-center mt-5 mb-5">
      <h6>Trazemos para você modernidade e inovação ao seu negócio, de maneira mais simples.</h6>
    </div>

  </div>
  <FooterComponent/>

</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "HomeComponent",
  components: {
    FooterComponent,
  },
}
</script>

<style scoped>
.img-jobs {
  max-width: 6rem;
  width: 100%;
}

.detail-text {
  font-size: 1.5rem;
}

.img-world {
  min-width: 200px;
}

.btn-responsive {
  width: 80%;
}

.seja-prestador-btn {
  background: var(--purple-quaternary);
  color: var(--white-primary);
}

.seja-prestador-btn:hover {
  background: var(--purple-quaternary);
  color: var(--white-primary);
  opacity: .8;
}

@media screen and (max-width: 950px) {

  .detail-text {
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 750px) {
  .container-world {
    flex-direction: column;
  }

  .seja-prestador-container {
    justify-content: center;
    align-items: center;
    align-content: center;
  }
}
</style>