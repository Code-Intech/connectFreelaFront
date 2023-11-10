<template>
  <div class="container-xxl mt-5">

    <div class="row mt-5 mb-5 d-flex container-world">

      <div class="col d-flex align-content-center justify-content-center flex-column p-5">
        <p class="fst-italic detail-text">
          Você é freelancer e está com dificuldade para encontrar um serviço? <br><br>
          Você precisa de um serviço e não sabe onde encontrar profissionais de confiança?
        </p>
        <p class="detail-text">
          O ConnectFreela é o lugar certo para te ajudar nesta busca. O site conecta o contratante ao prestador de serviço, encurtando o caminho e garantindo segurança.
        </p>
        <div class="d-flex seja-prestador-container">
          <button @click="$router.push({ path: '/login' })" class="btn-responsive seja-prestador-btn btn px-5">Participe
            da nossa Comunidade</button>
        </div>
      </div>

      <div class="col align-self-center text-center">
        <img class="img-fluid img-world" src="../assets/img/Profissoes.png" alt="" />
      </div>
    </div>

    <div class="row mt-5 mb-5 d-flex container-world">

      <div class="col align-self-center text-center">
        <img class="img-fluid" src="../assets/img/Inovacao.png" alt="" />
      </div>
      <div class="col d-flex align-content-center justify-content-center flex-column p-5">
        <p class="detail-text">
          Nosso compromisso é estabeler conexões seguras e viabilizar o processo tanto para contratação quanto para fornecimento de serviços, otimizando o tempo de ambas as partes e promovendo excelentes resultados.
        </p>
        <p class="detail-text">
        </p>
      </div>
    </div>


  <div class="row mt-5 mb-5 d-flex container-world">

    <div class="col d-flex align-content-center justify-content-center flex-column p-5">
      <p class="fst-italic detail-text">
      Nosso site comporta diversos nichos, seja online ou presencial. Se você busca uma relação de qualidade e de confiança entre prestador e cliente, o seu lugar é aqui. 
      </p>
      <div class="d-flex seja-prestador-container">
    <button @click="$router.push({ path: '/login' })" class="btn-responsive seja-prestador-btn btn px-5">Participe
      da nossa Comunidade</button>
  </div>
    </div>

    <div class="col align-self-center text-center">
      <img class="img-fluid img-world" src="../assets/img/Carreiras.gif" alt="" />
    </div>
  </div>

  <div class="row mt-5 mb-5 d-flex align-content-center justify-content-center">
    <h4 class="text-center mb-5">Conheça alguns dos nossos serviços</h4>

    <div class="row d-flex align-content-center justify-content-center gap-1">
      <img class="img-fluid img-jobs" src="../assets/img/31.png" alt="" />
      <img class="img-fluid img-jobs" src="../assets/img/16.svg" alt="" />
      <img class="img-fluid img-jobs" src="../assets/img/7.svg" alt="" />
      <img class="img-fluid img-jobs" src="../assets/img/19.svg" alt="" />
      <img class="img-fluid img-jobs" src="../assets/img/1.svg" alt="" />
      <img class="img-fluid img-jobs" src="../assets/img/2.svg" alt="" />
      <img class="img-fluid img-jobs" src="../assets/img/30.png" alt="" />
      <img class="img-fluid img-jobs" src="../assets/img/17.svg" alt="" />
      <img class="img-fluid img-jobs" src="../assets/img/5.svg" alt="" />
    </div>
  </div>

  <div class="row text-center mt-5 mb-5">
    <h6>Trazemos para você modernidade e inovação ao seu negócio, de maneira mais simples.</h6>
  </div>

  <div class="row mt-5 mb-5 d-flex container-world">

    <div class="col d-flex align-content-center justify-content-center flex-column p-5">
      <p class="fst-italic detail-text">
        Trazemos para você modernidade e inovação ao seu negócio, de maneira mais simples.
      </p>
      <div class="d-flex seja-prestador-container">
        <button @click="$router.push({ path: '/login' })" class="btn-responsive seja-prestador-btn btn px-5">Participe
          da nossa Comunidade</button>
      </div>
    </div>

    <div class="col align-self-center text-center">
      <img class="img-fluid img-world" src="../assets/img/img1.png" alt="" />
    </div>
  </div>
  </div>
  <FooterComponent />
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