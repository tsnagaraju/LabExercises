<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <task1/>
  <br> <br>
  <task2/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Task1 from './components/Task1.vue'
import Task2 from './components/Task2.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    Task1,
    Task2
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
