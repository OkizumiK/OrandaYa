<template>
<!-- <router-link to="/">EmployeeList</router-link><br> -->
<!-- <router-link to="/employeeDetail">EmployeeDetail</router-link> -->

 <img src="./assets/logo.jpg">
 <h1 class="titleCss">{{ msg }}</h1>
 <h3>当社社員の読書遍歴をもとに、自分にぴったりの読書パスを見つけましょう！</h3>
 <br>
 <router-view/>
</template>

<script>
export default {
  name: 'App',
  data () {
      return {
      msg: 'キャリアアップポータル'
      }
  },
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
