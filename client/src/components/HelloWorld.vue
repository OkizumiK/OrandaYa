<template>
  <div class="hello">
    <h1 class="titleCss">{{ msg }}</h1>
	<table class="employeeList">
	<tr v-for="value in employees" :key="value.employeeID">
		<td>{{value.lastName}} {{value.firstName}}</td>
		<td>{{value.department}}</td>
	</tr>
	</table>
  </div>
</template>

<script>
import employees from '../assets/employees.json'
export default {
  name: 'HelloWorld',
    data () {
      return {
        msg: '社内図書館',
        test: 'test',
        employees: employees
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
