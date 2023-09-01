import { createRouter, createWebHistory } from "vue-router";
import PaginationComponent from '@/components/PaginationComponent.vue';
import HomeComponent from '@/components/HomeComponent.vue';


const routes = [
    {
        path: "/",
        name: "HomeComponent",
        component: HomeComponent,
    },
    {
        path: "/teste",
        name: "PaginationComponent",
        component: PaginationComponent,
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
