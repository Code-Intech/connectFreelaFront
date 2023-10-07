import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import auth from '@/store/modules/auth';
import errorMessage from "@/store/modules/errorMessage";
import viaCep from "@/store/modules/viaCep";
import gender from "@/store/modules/gender";
import avatar from "@/store/modules/avatar";
import upuser from "@/store/modules/upuser";
import skills from "@/store/modules/skills";
import professions from "@/store/modules/professions";
import category from "@/store/modules/category";
export default new Vuex.Store({
    modules: {
        auth,
        errorMessage,
        viaCep,
        gender,
        avatar,
        upuser,
        skills,
        professions,
        category,
    },
    plugins: [createPersistedState()]
});