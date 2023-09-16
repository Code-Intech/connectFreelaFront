import { createRouter, createWebHistory } from "vue-router";
import PaginationComponent from '@/components/PaginationComponent.vue';
import HomeComponent from '@/components/HomeComponent.vue';
import LoginComponent from '@/components/LoginComponent.vue';
import TesteComponent from "@/components/FormValidation/TesteComponent.vue";
import store from "@/store";
import PerfilEditarView from "@/components/PerfilEditarView.vue";
import PerfilBeneficiosView from "@/components/PerfilBeneficiosView.vue"
import PerfilPortfolioView from "@/components/PerfilPortfolioView.vue"
import PerfilAvaliacaoView from "@/components/PerfilAvaliacaoView.vue"

const routes = [
    {
        path: "/",
        name: "HomeComponent",
        component: HomeComponent,
    },
    {
        path: "/paginate",
        name: "PaginationComponent",
        component: PaginationComponent,
    },
    {
        path: "/login",
        name: "LoginComponent",
        component: LoginComponent,
    },
    {
        path: "/teste",
        name: "TesteComponent",
        component: TesteComponent,
    },
    {
        path: "/perfil",
        name: "PerfilEditarView",
        component: PerfilEditarView,
    },
    {
        path: "/perfilbeneficios",
        name: "PerfilBeneficiosView",
        component: PerfilBeneficiosView,
        
    },  
    {
        path: "/PerfilPortfolio",
        name: "PerfilPortfolioView",
        component: PerfilPortfolioView,
        
    },
    {
        path: "/PerfilAvaliacao",
        name: "PerfilAvaliacaoView",
        component: PerfilAvaliacaoView,
        
    },


];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});


router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isAuthenticated) {
            next();
            return;
        }
        next('/login')
    } else {
        next()
    }
})