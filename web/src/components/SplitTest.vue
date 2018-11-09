<template>
  <div>
    <splitted-component v-if="show"></splitted-component>

    <select class="ui search dropdown" @change="changeSwitch">
      <option>Off</option>
      <option>On</option>
    </select>

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
view rawHome.vue hosted with ❤ by GitHub