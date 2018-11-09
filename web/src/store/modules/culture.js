const state = {
  locales: [
    { name: 'en', label: 'English'},
    { name: 'pt-br', label: 'Português'}
  ],
  culture: 'en'
}

const getters = {
  culture: state => state.culture,
  locales: state => state.locales
}

const actions = {
  async changeCulture ({ commit, rootState }, event) {
    let locale = (typeof event === 'string' ? event : event.target.value);
    commit('CHANGE', locale);
    rootState.i18n.locale = locale;
  }
}

const mutations = {
  CHANGE (state, culture) {
    state.culture = culture;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}