import axios from "axios";
const state = {
    user: null,
    token: null,
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
        UserForm.append("pass", form.senha);
        await dispatch("LogIn", UserForm);
    },

    async LogIn({ commit }, User) {
        const request = await fetch('http://localhost:8000/auth/login', {
            method: 'POST',
        body: JSON.stringify({
                email: User.get("email"),
                senha: User.get("senha"),
            })
        })

        if (request.status === 401) throw new Error(request.statusText)

        const data = request.json();
        commit("setUser", { email: User.get("email"), token: data.token });

        return request;

    },

    async LogOut({ commit }) {
        let user = null;
        commit("logout", user);
    },
};
const mutations = {
    setUser(state, { email, token }) {
        state.user = email;
        state.token = token;
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
