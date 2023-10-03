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
import FiltroServicosComponent from "@/components/FiltroServicosComponent.vue"
import CardsServicosComponent from "@/components/CardsServicosComponent.vue"
import ServicosView from "@/components/ServicosView.vue"
import PrestadorView from "@/components/PrestadorView.vue"
import UserPerfiView from "@/components/UserPerfiView.vue"
import UserPortifolioView from "@/components/UserPortifolioView.vue"
import UserDashboardView from "@/components/UserDashboardView.vue"
import FAQView from "@/components/FAQView.vue"
import ViewPropostasComponent from "@/components/ViewPropostasComponent.vue"
import CriarServicoComponent from "@/components/CriarServicoComponent.vue"
import ViewPropostaContratanteComponent from "@/components/ViewPropostaContratanteComponent.vue"
import ViewInfoPrestador from "@/components/ViewInfoPrestador.vue"

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
    {
        path: "/FiltroServicos",
        name: "FiltroServicosComponent",
        component: FiltroServicosComponent,
        
    },  
    {
        path: "/CardsServicos",
        name: "CardsServicosComponent",
        component: CardsServicosComponent,
        
    },
    {
        path: "/Servicos",
        name: "ServicosView",
        component: ServicosView,
        
    },   
    {
        path: "/Prestador",
        name: "PrestadorView",
        component: PrestadorView,
        
    },    
    {
        path: "/userperfil",
        name: "UserPerfiView",
        component: UserPerfiView,
        
    },    
    {
        path: "/UserPortifolio",
        name: "UserPortifolioView",
        component: UserPortifolioView,
        
    },    
    {
        path: "/UserDashboard",
        name: "UserDashboardView",
        component: UserDashboardView,
        
    },

        {
        path: "/FAQ",
        name: "FAQView",
        component: FAQView,
        
    },
    {
        path: "/ViewPropostas",
        name: "ViewPropostasComponent",
        component: ViewPropostasComponent,
        
    },   
    {
        path: "/CriarServico",
        name: "CriarServicoComponent",
        component: CriarServicoComponent,
        
    },     
    {
        path: "/ViewPropostaContratante",
        name: "ViewPropostaContratanteComponent",
        component: ViewPropostaContratanteComponent,
        
    },      
    {
        path: "/ViewInfoPrestador",
        name: "ViewInfoPrestador",
        component: ViewInfoPrestador,
        
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