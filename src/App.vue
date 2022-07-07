<template>
  <div id="app">
    <ProductSearch msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import ProductSearch from './components/ProductSearch.vue'

export default {
  name: 'App',
  components: {
    ProductSearch
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  background-color: #F4F4F4;
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
}
* {
    box-sizing: border-box;
}
</style>
