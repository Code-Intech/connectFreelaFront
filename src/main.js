import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {fas} from "@fortawesome/free-solid-svg-icons";
import Vue3FormWizard from 'vue3-form-wizard';
import VeeValidate, { Field, Form, ErrorMessage } from 'vee-validate';
import {  } from 'vee-validate';
import store from "@/store";
import axios from "axios";

library.add(fas)

import "bootstrap/dist/css/bootstrap.min.css"
import 'vue3-form-wizard/dist/style.css'



axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8000/';




createApp(App)
  .use(router)
  .use(Vue3FormWizard)
  .use(VeeValidate)
  .use(store)

  .component('font-awesome-icon', FontAwesomeIcon)
  .component('Field', Field)
  .component('Form', Form)
  .component('ErrorMessage', ErrorMessage)
  .mount('#app')
  
import "bootstrap/dist/js/bootstrap.js"