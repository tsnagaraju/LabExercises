<template>
  <div id="app">
    <ProductDetails />
  </div>
</template>

<script>
import ProductDetails from "./components/ProductDetails";

export default {
  name: 'App',
  components: {
    ProductDetails
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
