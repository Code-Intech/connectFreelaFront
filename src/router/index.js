import { createRouter, createWebHistory } from "vue-router";
import Menu from '../components/Menu.vue';
import TesteMenuSidebar from "@/components/TesteMenuSidebar.vue";


const routes = [
    {
        path: "/",
        name: "TextScreen",
        component: Menu,
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
