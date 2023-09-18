import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import auth from '@/store/modules/auth';
import errorMessage from "@/store/modules/errorMessage";
import viaCep from "@/store/modules/viaCep";
import gender from "@/store/modules/gender";
export default new Vuex.Store({
    modules: {
        auth,
        errorMessage,
        viaCep,
        gender
    },
    plugins: [createPersistedState()]
});