import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {fas} from "@fortawesome/free-solid-svg-icons";
import Vue3FormWizard from 'vue3-form-wizard';
import VeeValidate, { Field, Form, ErrorMessage } from 'vee-validate';
import store from "@/store";
import PrimeVue from 'primevue/config';
import MultiSelect from 'primevue/multiselect';

import InputNumber from 'primevue/inputnumber';

import InputText from 'primevue/inputtext';

import Card from 'primevue/card';


import Calendar from 'primevue/calendar';

import FileUpload from 'primevue/fileupload';


import Slider from 'primevue/slider';

import Paginator from 'primevue/paginator';

import Galleria from 'primevue/galleria';

import Button from 'primevue/button';



import "primevue/resources/themes/lara-light-blue/theme.css";


library.add(fas)



import "bootstrap/dist/css/bootstrap.min.css"
import 'vue3-form-wizard/dist/style.css'

createApp(App)
  .use(router)
  .use(Vue3FormWizard)
  .use(VeeValidate)
  .use(store)
  .use(PrimeVue, { /* options */ })

  

  .component('MultiSelect', MultiSelect)  
  .component('Button', Button)  
  .component('Galleria', Galleria)  
  .component('Paginator', Paginator)  
  .component('Slider', Slider)  
  .component('FileUpload', FileUpload)  
  .component('Calendar', Calendar)
  .component('InputNumber', InputNumber)
  .component('InputText', InputText)
  .component('Card', Card)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('Field', Field)
  .component('Form', Form)
  .component('ErrorMessage', ErrorMessage)
  .mount('#app')
  
import "bootstrap/dist/js/bootstrap.js"

