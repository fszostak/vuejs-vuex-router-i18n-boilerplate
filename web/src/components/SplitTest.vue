<template>
  <div>
    <SplittedComponent v-if="show"></SplittedComponent>

    <select class="ui search dropdown" @change="changeSwitch">
      <option>Off</option>
      <option>On</option>
    </select>

    {{ status }}
  </div>
</template>

<script>
  const SplittedComponent = () => import(
    /* webpackChunkName: "SplittedComponent" */ './SplittedComponent.vue'
  );
  
  export default {
    name: 'SplitTest',
    data() {
      return {
        show: false
      }
    },
    computed: {
      status() {
        return (this.show ? "Active" : "Inactive" );
      }
    },
    methods: {
      changeSwitch() {
        this.show = !this.show;
      }
    },
    components: {
      SplittedComponent
    }
  }
</script>