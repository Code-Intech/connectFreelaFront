const state = {
  address: {
    cep: null,
    cidade: null,
    estado: null,
    bairro: null,
    endereco: null,
    numero: null
  },
};

const getters = {
  city: (state) => state.address,
};

const actions = {
  async getAddress({ commit }, zipCode) {

    if (zipCode.length < 8) return;

    const response = await fetch(`https://viacep.com.br/ws/${zipCode.replace(/[^a-zA-Z0-9]/g, "")}/json/`);
    const data = await response.json()

    commit("setAddress", { data });
  },
};
const mutations = {
  setAddress(state, { data }) {
    state.address.cep = data.cep;
    state.address.endereco = data.logradouro;
    state.address.cidade = data.localidade;
    state.address.estado = data.uf;
    state.address.bairro = data.bairro;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
