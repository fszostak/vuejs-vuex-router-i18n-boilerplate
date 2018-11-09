<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item">
      vuejs-vuex-router-i18n-boilerplate {{ $route.params.lang }} 
    </router-link>

    <div class="right menu">
      <router-link to="/" class="item">{{ $t('Home') }}</router-link>
      <router-link to="/users-list" class="item">{{ $t('User List') }}</router-link>
      <router-link to="/split-test" class="item">{{ $t('Code Splitting') }}</router-link>
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
  methods: mapActions(['changeCulture']),
  mounted() {
    const culture = this.$route.params.lang;
    console.log('Culture=', culture);
    if (culture) {
      this.changeCulture(culture);
    }
  }
};
</script>