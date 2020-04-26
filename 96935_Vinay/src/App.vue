<template>
  <div id="app">
    <product-details/>
    <todo-list/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import productDetails from './components/product-details.vue';
import todoList from './components/list.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
export default Vue.extend({
  name: "App",
  components: {
    productDetails,
    todoList
  },
  directives :{
    
  },
  });
</script>

<style>

</style>
