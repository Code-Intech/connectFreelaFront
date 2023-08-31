import { createRouter, createWebHistory } from "vue-router";
import PaginationComponent from '@/components/PaginationComponent.vue';
import TesteMenuSidebar from '@/components/NavBars/NavBarComponent.vue';


const routes = [

    {
        path: "/teste",
        name: "PaginationComponent",
        component: PaginationComponent,
    },
    {
        path: "/testeSideBar",
        name: "TesteMenuSidebar",
        component: TesteMenuSidebar,
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
