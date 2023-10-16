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
  async GetAddress({ commit }, zipCode) {

    zipCode = zipCode.replace(/[^a-zA-Z0-9]/g, "")

    if (zipCode.length < 8) {
      commit('clearAddress')
      return;
    }

    const response = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`);

    const data = await response.json();

    if (response.status === 200 && data.erro === true)  {
      throw new Error("CEP não encontrado");
    }
    commit("setAddress", { data });
  },
  clearAddressData({ commit }) {
    commit('clearAddress');
  }
};
const mutations = {
  setAddress(state, { data }) {
    state.address.cep = data.cep;
    state.address.endereco = data.logradouro;
    state.address.cidade = data.localidade;
    state.address.estado = data.uf;
    state.address.bairro = data.bairro;
  },
  clearAddress(state) {
    state.address.cep = null;
    state.address.endereco = null;
    state.address.cidade = null;
    state.address.estado = null;
    state.address.bairro = null;
  }
};
export default {
  state,
  getters,
  actions,
  mutations,
};
