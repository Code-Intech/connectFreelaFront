import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import auth from '@/store/modules/auth';
import errorMessage from "@/store/modules/errorMessage";
import viaCep from "@/store/modules/viaCep";
export default new Vuex.Store({
    modules: {
        auth,
        errorMessage,
        viaCep
    },
    plugins: [createPersistedState()]
});