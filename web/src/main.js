import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store';

// i18n
import vuexI18n from 'vuex-i18n';
import translationsEn from './translations/en.json';
import translationsPtBr from './translations/pt-br.json';

// metatags
import vueHeadful from 'vue-headful';

// components
import Home from './components/Home';
import UsersList from './components/UsersList';

// init router
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/users-list', component: UsersList }
  ]
});

// init metatags
Vue.component('vue-headful', vueHeadful);

// init translations
Vue.use(vuexI18n.plugin, store);

Vue.i18n.add('en', translationsEn);
Vue.i18n.add('pt-br', translationsPtBr);

Vue.i18n.set('en');

// init vue
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

