<template>
  <div>
    <vue-headful
      title="Home | vuejs-vuex-router-i18n-boilerplate"
      description="Home from vue-headful"
    />
    <h1>{{ $t('Welcome') }}</h1>
    <p>{{ $t('Culture', {'language': culture}) }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  computed: mapGetters(['culture']),
};
</script>

<style scoped>

</style>
