<template>
  <div>
    <vue-headful
      title="Users List | vuejs-vuex-router-i18n-boilerplate"
      description="Users List from vue-headful"
    />
    <h1>Users List</h1>
    <ul>
      <li v-for="user in allUsers" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'UsersList',
  computed: mapGetters(['allUsers']),
  methods: mapActions(['fetchUsers']),
  created() {
    this.fetchUsers();
  }
};
</script>
