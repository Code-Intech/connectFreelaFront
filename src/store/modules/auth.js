import axios from "axios";
const state = {
    user: null,
    addcep: {
        cep: '',
        rua: '',
        bairro: '',
        cidade: '',
        estado:'',
    
    }
};
const getters = {
    isAuthenticated: (state) => !!state.user,
    StateUser: (state) => state.user,
};
const actions = {
    async Register({ dispatch }, form) {
        await axios.post("register", form);
        let UserForm = new FormData();
        UserForm.append("email", form.email);
        UserForm.append("pass", form.password);
        await dispatch("LogIn", UserForm);
    },

    async LogIn({ commit }, User) {
        console.log(User);
        await axios.post("auth/login", {
            email: User.get("email"),
            pass: User.get("pass"),
        });
        await commit("setUser", User.get("email"));
    },

    async LogOut({ commit }) {
        let user = null;
        commit("logout", user);
    },
};
const mutations = {
    setUser(state, email) {
        state.user = email;
    },
    LogOut(state) {
        state.user = null;
    },
};
export default {
    state,
    getters,
    actions,
    mutations,
};
