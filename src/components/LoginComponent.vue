<template v-slot:footer="props">
  <div class="container" id="container">
    <div class="form-container sign-up-container " style="overflow: hidden;">
      <form action="" class="" @submit.prevent="register">
        <form-wizard stepSize="xs" @on-complete="register" color="#7711F0" finishButtonText="Cadastrar"

                     nextButtonText="Proximo" backButtonText="Voltar">
          <tab-content title="Informações pessoais" icon="fa fa-user">
            <input class="form-control" type="text" name="" id="" placeholder="Nome Completo:" required
                   v-model="form.nomeCompleto">
            <input class="form-control" type="text" name="cpf" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" id=""
                   placeholder="Digite um CPF no formato: xxx.xxx.xxx-xx" required v-model="form.cpf">
            <input class="form-control" type="date" name="" id="" placeholder="Data de Nascimento:" required
                   v-model="form.dataNascimento">
            <select class="form-select" name="Genero" id="" aria-placeholder="Genero:" required
                    v-model="form.genero">
              <option value="" selected disabled>Gênero:</option>
              <option value="Femenino">Femenino</option>
              <option value="Masculino">Masculino</option>
              <option value="NaoBinario">Não Binário</option>
              <option value="outro">Outro</option>
            </select>
            <input class="form-control" type="tel" name=""
                   pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})" id=""
                   placeholder="Telefone: (xx) xxxxx-xxxx" required v-model="form.telefone">


          </tab-content>
          <tab-content title="Endereço" icon="fa-solid fa-location-dot">
            <input
                class="form-control"
                type="text"
                name="cep"
                id="cep"
                placeholder="CEP: 00000-000"
                required v-model="form.cep"
            >
            <input class="form-control" type="text" name=""
                   id=""
                   placeholder="Cidade:"
                   required
                   v-model="form.cidade"
            >
            <input class="form-control" type="text" name=""
                   id=""
                   placeholder="Estado:"
                   required
                   v-model="form.estado"
            >
            <input class="form-control" type="text" name=""
                   id=""
                   placeholder="Bairro:"
                   required
                   v-model="form.bairro"
            >
            <input class="form-control" type="text" name="rua"
                   id="rua"
                   placeholder="Endereço:"
                   required
                   v-model="form.rua"
            >
            <input
                class="form-control"
                type="text"
                name=""
                id=""
                placeholder="Número:"
                required
                v-model="form.numero"
            >

          </tab-content>
          <tab-content title="Acesso" icon="fa fa-sign-in">
            <div class="form-floating">

              <input class="form-control" type="text" name="" id="" placeholder="E-Mail:"
                     v-model="form.email">
              <label for="floatingInput">Email address</label>
              <div class="valid-feedback">
                Looks good!
              </div>
            </div>
            <div class="form-floating">
              <input class="form-control" type="password" name="" id="" placeholder="Senha:"
                     v-model="form.senha">
              <label for="floatingPassword">Password</label>
            </div>
            <div class="form-floating">
              <input class="form-control" type="password" name="" id="floatingPasswordConfirmation["
                     placeholder="Confirmação de senha:">
              <label for="floatingPasswordConfirmation">Password</label>
            </div>
          </tab-content>
        </form-wizard>
      </form>
    </div>
    <div class="form-container sign-in-container">
      <form action="#" @submit.prevent="login">
        <h1>Login</h1>
        <input type="email" name="email" placeholder="E-Mail" v-model="form.email"/>
        <input type="password" name="senha" placeholder="Senha" v-model="form.senha"/>
        <a href="#">Esqueceu sua senha?</a>
        <button type="submit">Entrar</button>
        <p v-if="showError" id="error">Username or Password is incorrect</p>
      </form>
    </div>

    <div class="overlay-container">
      <div class="overlay">
        <div class="overlay-panel overlay-left">
          <h1>Bem vindo de volta!</h1>
          <p>Para se manter conectado conosco, faça login com suas informações pessoais</p>
          <button class="ghost" id="signIn" @click="addlogin()">Entrar</button>
        </div>
        <div class="overlay-panel overlay-right">
          <h1>Olá amigo!</h1>
          <p>Insira seus dados pessoais e comece sua jornada conosco</p>
          <button class="ghost" id="signUp" @click="addregistre()">Inscrever-se</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import {FormWizard, TabContent} from "vue3-form-wizard";
import {signup, signin} from "@/assets/js/ScriptLoginComponent.js";
import "vue3-form-wizard/dist/style.css";

export default {
  name: "LoginComponent",
  components: {
    FormWizard,
    TabContent,
  },
  methods: {
    async handleCep() {
      try {
        const response = await fetch("https://viacep.com.br/ws/${this.form.cep}/json/");
        const data = await response.json()
        console.log(data)
        this.form.rua = data.logradouro
      } catch (error) {
        console.log(error)
      }
    },
    addlogin: () => {
      signin();
    },
    addregistre: () => {
      signup();
    },
    validateOnBack: Boolean,
    ...mapActions(["LogIn", "Register"]),
    async login() {
      const User = new FormData();
      User.append("email", this.form.email);
      User.append("senha", this.form.senha);
      try {
        await this.LogIn(User);
        this.$router.push("/");
        this.showErro = false
      } catch (error) {
        this.showErro = true
      }
    },
    async register() {

      const User = new FormData();
      User.append("nomeCompleto", this.form.nomeCompleto);
      User.append("cpf", this.form.cpf);
      User.append("dataNascimento", this.form.dataNascimento);
      User.append("genero", this.form.genero);
      User.append("telefone", this.form.telefone);
      User.append("cpf", this.form.cpf);
      User.append("cep", this.form.cep);
      User.append("rua", this.form.rua);
      User.append("cidade", this.form.cidade);
      User.append("estado", this.form.estado);
      User.append("numero", this.form.emnumeroail);
      User.append("email", this.form.email);
      User.append("senha", this.form.senha);

      try {
        await this.registre(User);
        this.$router.push("/");
        this.showErro = false;

      } catch (error) {
        this.showErro = true;
      }
    }
  },
  data() {
    return {
      form: {
        email: "",
        senha: "",
      },
      showErro: false
    };

  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css");

s * {
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  background: #f6f5f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: -20px 0 50px;
  margin-top: 20px;
}

h1 {
  font-weight: bold;
  margin: 0;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: .5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

.container {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, .2), 0 10px 10px rgba(0, 0, 0, .2);
  position: relative;
  overflow: hidden;
  width: 900px;
  max-width: 100%;
  min-height: 700px;
  top: 120px;
}

.form-container form {
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #ddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}

.form-container input {
  background: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}

button {
  border-radius: 20px;
  border: 1px solid #9749FE;
  background: #7711F0;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

button:active {
  transform: scale(.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background: transparent;
  border-color: #fff;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all .6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.sign-up-container {
  left: 0;
  width: 50%;
  z-index: 1;
  opacity: 0;
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform .6s ease-in-out;
  z-index: 100;
}

.overlay {
  background: #7711F0;
  background: linear-gradient(to right, #7711F0, #c901f1) no-repeat 0 0 / cover;
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateY(0);
  transition: transform .6s ease-in-out;
}

.overlay-panel {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  height: 100%;
  width: 50%;
  text-align: center;
  transform: translateY(0);
  transition: transform .6s ease-in-out;
}

.overlay-right {
  right: 0;
  transform: translateY(0);
}

.overlay-left {
  transform: translateY(-20%);
}

/* Move signin to right */
.container.right-panel-active .sign-in-container {
  transform: translateY(100%);
}

/* Move overlay to left */
.container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

/* Bring signup over signin */
.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
}

/* Move overlay back to right */
.container.right-panel-active .overlay {
  transform: translateX(50%);
}

/* Bring back the text to center */
.container.right-panel-active .overlay-left {
  transform: translateY(0);
}

/* Same effect for right */
.container.right-panel-active .overlay-right {
  transform: translateY(20%);
}
</style>