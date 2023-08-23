import { createRouter, createWebHistory } from "vue-router";
import TextScreen from '../components/TextScreen.vue';


const routes = [
    {
        path: "/",
        name: "TextScreen",
        component: TextScreen,
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
