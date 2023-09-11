import { createRouter, createWebHistory } from "vue-router";
import PaginationComponent from '@/components/PaginationComponent.vue';
import HomeComponent from '@/components/HomeComponent.vue';
import LoginComponent from '@/components/LoginComponent.vue';
import TesteComponent from "@/components/FormValidation/TesteComponent.vue";
import store from "@/store"

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