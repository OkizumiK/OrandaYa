<!-- トップページの社員情報のうち、左側の氏名、入社年次、所属部署、タグの情報 -->
<template>
  <h1 class="titleCss">{{ msg }}</h1>

  <div class="employeesInfo"  v-for="value in employees" :key="value.employeeID">
	<table class="employeeList">
      <tr align="left">
        <th>{{value.lastName}} {{value.firstName}}</th>  
        <td>{{" : " + value.department}}</td>
        <td rowspan=2><img class="bookImage" :src="value.bookImage[0]"></td>
        <td rowspan=2><img class="bookImage" :src="value.bookImage[1]"></td>
        <td rowspan=2><img class="bookImage" :src="value.bookImage[2]"></td>
      </tr>
      <tr border="10px">
        <td align="left">{{value.joinYear + " 年入社"}}</td>
        <td class="tag">{{value.tag[0]}} {{value.tag[1]}}</td>
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
.tag {
  color:#F00;
  text-align: "right" 
}
</style>
