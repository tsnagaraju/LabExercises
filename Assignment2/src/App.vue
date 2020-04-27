<template>
  <div id="app">
    <product-list />
    <br />
    <br />
    <city-list />
  </div>
</template>

<script>
import ProductList from "./components/ProductList.vue";
import CityList from "./components/CityList.vue";

export default {
  name: "App",
  components: {
    ProductList,
    CityList
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
