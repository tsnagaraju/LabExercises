<template>
  <div id="app">
    <product />
    <br />
    <br />
    <todo />
  </div>
</template>

<script>
import Product from "./components/Product.vue";
import Todo from "./components/TodoList.vue";
export default {
  name: "App",
  components: {
    Product,
    Todo
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
