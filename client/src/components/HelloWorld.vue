<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
{{ recommend_Headers }}
  </div>
</template>

<script>
import recommend_Headers from '../assets/Recommend_Header.json'
export default {
  name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        test: 'test',
        recommend_Headers: recommend_Headers
      }
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
