import { createRouter, createWebHistory } from "vue-router";
import MenuComponent from '@/components/MenuComponent.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';


const routes = [
    {
        path: "/",
        name: "MenuComponent",
        component: MenuComponent,
    },
    {
        path: "/teste",
        name: "PaginationComponent",
        component: PaginationComponent,
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
