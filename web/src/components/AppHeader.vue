<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item">
      vuejs-vuex-router-i18n-boilerplate
    </router-link>

    <div class="right menu">
      <router-link to="/" class="item">{{ $t('Home') }}</router-link>
      <router-link to="/users-list" class="item">{{ $t('User List') }}</router-link>
      <div class="item">
        <select class="ui search dropdown" @change="changeCulture">
          <option v-for="locale in locales" :value="locale.name" :key="locale.name">{{ locale.label }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>  
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  computed: mapGetters(['culture', 'locales']),
  methods: mapActions(['changeCulture'])
};
</script>