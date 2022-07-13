<template>
<router-link to="/" class="tag">back</router-link>
<table class="employeeList">
        <tr align="left">
              <th style="padding-left: 22px;width: 90px">{{ targetEmployee.lastName }} {{ targetEmployee.firstName }}</th>
              <td>: {{ targetEmployee.department }}</td>
              <td rowspan=2 style="width: 72px"><img class="bookImage" src="../../public/img/Web_03.jpg"></td>
              <td rowspan=2 style="width: 72px"><img class="bookImage" src="../../public/img/RPA_03.jpg"></td>
              <td rowspan=2 style="width: 72px"><img class="bookImage" src="../../public/img/Lisp_02.jpg"></td>
            </tr>
            <tr border="10px">
              <td align="left" style="padding-left: 22px">{{ targetEmployee.joinYear }} 年入社	</td>
              <td  align="right" style="padding-right: 20px"><a class="tag">#Webアプリケーション #RPA</a></td>
            </tr>
            <tr style="height: 20px"></tr>
            <tr class="employeeEndOnTable"></tr>
            <tr style="height: 20px"></tr>
</table>

<p style="height: 50px"></p>
      <div>
        <table style="margin:auto">
          <tr style="height: 250px">
            <td class="chronologyHead">2022</td>
            <td class="chronologyBookCell"><img class="chronologyBookImage" src="../../public/img/Web_03.jpg">
            <br>読了日: 2022/6/9
              <br><span style="color: #fdd835">★★★★</span>☆
              <br>レベル：中級
              <br>技術要素：Web
            </td>
            <td class="chronologyBookCell"><img class="chronologyBookImage" src="../../public/img/RPA_03.jpg">
              <br>読了日: 2022/5/11
              <br><span style="color: #fdd835">★★★</span>☆☆
              <br>レベル：入門
              <br>技術要素：RPA
            </td>
            <td class="chronologyBookCell"><img class="chronologyBookImage" src="../../public/img/Lisp_02.jpg">
              <br>読了日: 2022/5/10
              <br><span style="color: #fdd835">★</span>☆☆☆☆
              <br>レベル：中級
              <br>技術要素：Lisp
            </td>
            <td class="chronologyBookCell"><img class="chronologyBookImage" src="../../public/img/Java_03.jpg">
              <br>読了日: 2022/4/1
              <br><span style="color: #fdd835">★★★</span>☆☆
              <br>レベル：中級
              <br>技術要素：Java
            </td>
          </tr>
          <tr style="height: 50px"></tr>
          <tr style="height: 250px">
            <td class="chronologyHead">2021</td>
            <td class="chronologyBookCell"><img class="chronologyBookImage" src="../../public/img/DB_01_.jpg">
              <br>読了日: 2022/8/3
              <br><span style="color: #fdd835">★★★</span>☆☆
              <br>レベル：入門
              <br>技術要素：DB
            </td>
            <td class="chronologyBookCell"><img class="chronologyBookImage" src="../../public/img/Java_01.jpg">
              <br>読了日: 2022/7/12
              <br><span style="color: #fdd835">★★★★</span>☆
              <br>レベル：入門
              <br>技術要素：Java
            </td>
          </tr>
          <tr style="height: 50px"></tr>
          <tr style="height: 250px">
            <td class="chronologyHead">2020</td>
            <td class="chronologyBookCell"><img class="chronologyBookImage" src="../../public/img/DB_02_.jpg">
              <br>読了日: 2022/8/3
              <br><span style="color: #fdd835">★★★★</span>☆
              <br>レベル：入門
              <br>技術要素：DB
            </td>
          </tr>
          <tr style="height: 50px"></tr>
          <tr style="height: 250px">
            <td class="chronologyHead">2019</td>
            <td class="chronologyBookCell"><img class="chronologyBookImage" src="../../public/img/Java_02.jpg">
              <br>読了日: 2022/7/12
              <br><span style="color: #fdd835">★★★★</span>☆
              <br>レベル：入門
              <br>技術要素：Java
            </td>
          </tr>
          <tr style="height: 50px"></tr>
          <tr style="height: 250px">
            <td class="chronologyHead">2018</td>
          </tr>
          <tr style="height: 50px"></tr>
          <tr style="height: 250px">
            <td class="chronologyHead">2017</td>
          </tr>
          <tr style="height: 50px"></tr>
          <tr style="height: 250px">
            <td class="chronologyHead">2016</td>
          </tr>


        </table>
      </div>
</template>

<script>
import employees from '../assets/employees.json'
export default {
  name: 'EmployeeDetail',
    data () {
      return {
        msg: '社員詳細',
        employees: employees,
        targetEmployee: {}
      }
    },
      beforeRouteEnter(to, from, next) {
        next((vm) => {
          // 画面が表示された時の処理を呼び出します。
          vm.initialize();
          next();
        });
      },
        methods: {
          // 画面が表示された時の処理
          initialize() {
          const target = employees.find((v) => v.employeeID === this.$route.params.value);
          this.targetEmployee = target;
          // console.log(targetUser);
            // console.log(JSON.stringify(employees));
          },
        },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.chronologyHead{
  font-size: 40px;
  width: 200px;
  text-align:center;
}
.chronologyBookImage{
  height:140px;
  width:100px;
}
.chronologyBookCell{
text-align: center;
width:200px;
}


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
  width: 675px
}
.employeeEndOnTable {
  border-bottom: 1px solid black;
}

.bookImage {
	margin: 0px 2px;
    display: inline-block; /* ここがポイント */
    height: 80px;
}
</style>
