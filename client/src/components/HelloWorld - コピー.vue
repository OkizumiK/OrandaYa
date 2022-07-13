<template>
  <div class="hello">
    <h1 class="titleCss">{{ msg }}</h1>
   <table class="employeeList">
   <tr v-for="value in employees" :key="value.employeeID">
      <td>{{value.lastName}} {{value.firstName}}</td>
      <td>{{value.department}}</td>
      <td><BookImage></BookImage></td>
   </tr>
   </table>
  </div>
</template>
<script>
import employees from '../assets/employees.json'
import BookImage from './BookImage.vue'
export default {
  name: 'HelloWorld',
    data () {
      return {
        msg: '社内図書館',
        test: 'test',
        employees: employees
      }
    },
    components :{
        BookImage
    }
}
</script>
