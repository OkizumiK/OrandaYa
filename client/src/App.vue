<template>
  <HelloWorld></HelloWorld>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import sample from './assets/employee.json'
import recommend_Headers from './assets/Recommend_Header.json'

export default {
  name: 'App',
  data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        recommend_Headers: recommend_Headers
      }
  },
  components: {
    HelloWorld
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
