import { createRouter, createWebHistory } from "vue-router";
import MenuComponent from '@/components/MenuComponent.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';
import TesteMenuSidebar from '@/components/NavBars/NavBarComponent.vue';


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
