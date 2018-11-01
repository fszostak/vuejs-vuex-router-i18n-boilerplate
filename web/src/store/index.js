import Vuex from 'vuex';
import Vue from 'vue';

import culture from './modules/culture';
import users from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    culture,
    users
  }
});