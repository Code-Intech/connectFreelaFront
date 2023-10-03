import axios from "axios";

const state = {
    fotoavatar: null,
};
const getters = {
    StateAvatar: (state) => state.fotoavatar,
};
const actions = {
    async getAvatar({commit}, token) {
        console.log(token)

        const request = await axios.get('http://localhost:8000/api/user/avatar', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        console.log(request)

        commit('setAvatar', {avatar: request.data.success.avatar_url})
    },
};
const mutations = {
    setAvatar(state, {avatar}) {
        console.log(avatar);
        state.fotoavatar = avatar;
    },
};
export default {
    state,
    getters,
    actions,
    mutations,
};
