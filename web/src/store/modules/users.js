import api from '../../api/users';

const state = {
  users: []
};

const getters = {
  allUsers: state => state.users
};

const actions = {
  async fetchUsers({ commit }) {
    const response = await api.fetchUsers();
    commit('setUsers', response.data);
  }
};

const mutations = {
  setUsers: (state, users) => {
    state.users = users;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
