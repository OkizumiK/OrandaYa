<!-- トップページの社員情報のうち、左側の氏名、入社年次、所属部署、タグの情報 -->
<template>
	<table class="employeeList">
	<tr>
	<th colspan=2 align="center">社員情報</th>
	<th colspan=3 align="center">最近の更新</th>
	</tr>
	<tr style="height: 20px"></tr>
    <template  v-for="value in employees" :key="value.employeeID">
      <tr align="left">
        <th style="padding-left: 20px">
            <router-link :to="{ name: 'EmployeeDetail', params: {value: value.employeeID}}" class="tag">
                {{value.lastName}} {{value.firstName}}
            </router-link>
        </th>
        <td></td>
        <td rowspan=2><img v-if="value.bookImageNew3.length > 0" class="bookImage" :src="value.bookImageNew3[0]"></td>
        <td rowspan=2><img v-if="value.bookImageNew3.length > 1" class="bookImage" :src="value.bookImageNew3[1]"></td>
        <td rowspan=2><img v-if="value.bookImageNew3.length > 2" class="bookImage" :src="value.bookImageNew3[2]"></td>
      </tr>
      <tr border="10px">
        <td align="left" style="padding-left: 20px">{{value.joinYear + " 年入社"}}</td>
        <td align="right" style="padding-right: 20px; width: 350px">
        <a class="tag" v-for="tag in value.tagCount" :key="tag.name" >{{tag.name}}({{tag.count}})  </a>
      </td>
      </tr>
      <tr style="height: 20px"></tr>
      <tr class="employeeEndOnTable"></tr>
      <tr style="height: 20px"></tr>
    </template>
	</table>
</template>

<script>
import employees from '../assets/employees.json'
import books from '../assets/books.json'
export default {
  name: 'EmployeesInfo',
    data () {
      return {
        msg: '',
        employees: employees,
        books: books
      }
    },
    methods: {
        window:onload = function(){
            employees.forEach(function( employee ) {
                employee.book.forEach( function( bookID ){
                if(bookID === ""){
                    employee.bookImageNew3.push("");
                }else{
                    const targetBook = books.find((b) => b.bookID === bookID);
                    employee.bookImageNew3.push(targetBook.bookimage);
                    }
                });
                employee.tagCount.forEach( function( tagItem ){
                    var result = books.filter(function(value) {
                      return value.tag === tagItem.name;
                    });
                   tagItem["count"] = result.length;
                });
            });
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
table {
    border-collapse: collapse;
}
.tag {
  color:#1976d2;
  text-align: "right" 
}
.employeeList {
  margin-left: auto;
  margin-right: auto;
}
.employeeEndOnTable {
  border-bottom: 1px solid black;
}
</style>
