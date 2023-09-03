<template>
    <div class="container" id="container">
        <div class="form-container sign-up-container " style="overflow: scroll;">
            <form action="" class="">
                <form-wizard stepSize="xs" @on-complete="onComplete" color="#7711F0" >
                    <tab-content title="Informações pessoais" icon="fa fa-user">
                        <input class="form-control" type="text" name="" id="" placeholder="Nome Completo:" required>
                        <input class="form-control" type="text" name="cpf" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" id=""
                            placeholder="Digite um CPF no formato: xxx.xxx.xxx-xx" required>
                        <input class="form-control" type="date" name="" id="" placeholder="Data de Nascimento:" required>
                        <select class="form-select" name="Genero" id="" aria-placeholder="Genero:" required>
                            <option value="" selected disabled>Gênero:</option>
                            <option value="Femenino">Femenino</option>
                            <option value="Masculino">Masculino</option>
                            <option value="NaoBinario">Não Binário</option>
                            <option value="outro">Outro</option>
                        </select>
                        <input class="form-control" type="tel" name=""
                            pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})" id=""
                            placeholder="Telefone: (xx) xxxxx-xxxx" required>
                        <div class="form-floating">

                            <input class="form-control" type="text" name="" id="" placeholder="E-Mail:">
                            <label for="floatingInput">Email address</label>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div class="form-floating">
                            <input class="form-control" type="password" name="" id="" placeholder="Senha:">
                            <label for="floatingPassword">Password</label>
                        </div>

                    </tab-content>
                    <tab-content title="Endereço"   icon="fa-solid fa-location-dot" >
                        <input class="form-control" type="text" name="" id="" placeholder="Cidade:" required>
                        <input class="form-control" type="text" name="" id="" placeholder="Estado:" required>
                        <input class="form-control" type="text" name="" id="" pattern="\d{5}-?\d{3}"
                            placeholder="CEP: 00000-000" required>
                        <input class="form-control" type="text" name="" id="" placeholder="Bairro:" required>
                        <input class="form-control" type="text" name="" id="" placeholder="Endereço:" required>
                        <input class="form-control" type="text" name="" id="" placeholder="Número:" required>
                        <input class="form-control" type="text" name="" id="" placeholder="Complemento:">

                    </tab-content>
                    <tab-content title="Profissão" icon="fa fa-city">
                        <input class="form-control" type="text" name="" id="" placeholder="Profissão">
                        <input class="form-control" type="number" name="" id="" placeholder="Tempo de experiência:">
                        <input class="form-control" type="submit" value="" placeholder="Registra-se">
                    </tab-content>

                </form-wizard>
            </form>
        </div>
        <div class="form-container sign-in-container">
            <form action="#">
                <h1>Login</h1>
                <!-- <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div> -->
                <!-- <span>ou use sua conta</span> -->
                <input type="email" placeholder="E-Mail" />
                <input type="password" placeholder="Senha" />
                <a href="#">Esqueceu sua senha?</a>
                <button>Entrar</button>
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











    <!-- <form-wizard>
        <tab-content title="Personal details">
            My first tab content
        </tab-content>
        <tab-content title="Additional Info">
            My second tab content
        </tab-content>
        <tab-content title="Last step">
            Yuhuuu! This seems pretty damn simple
        </tab-content>
    </form-wizard> -->
</template>

<script>
import { FormWizard, TabContent } from "vue3-form-wizard";
import { signup, signin } from "@/assets/js/ScriptLoginComponent.js";
import "vue3-form-wizard/dist/style.css";

export default {
    name: "LoginComponent",
    components: {
        FormWizard,
        TabContent,
    },
    methods: {
        addlogin: () => {
            signin();
        },
        addregistre: () => {
            signup();
        },
        onComplete() {
            alert("Yay. Done!");
        },
        validateOnBack: Boolean,
    }




}










</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css");s

















* {
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

/* .footer {
    margin-top: 25px;
    text-align: center;
}


.icons {
    display: flex;
    width: 30px;
    height: 30px;
    letter-spacing: 15px;
    align-items: center;
} */
</style>