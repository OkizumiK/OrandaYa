<template>
<table class="employeeList">
        <tr align="left">
              <th class="nameArea">{{targetEmployee.lastName}} {{targetEmployee.firstName}}</th>
              <td>: {{targetEmployee.department}}</td>
              <td rowspan=2 style="width: 72px"><img class="bookImage" src="/img/Web_03.jpg"></td>
              <td rowspan=2 style="width: 72px"><img class="bookImage" src="/img/RPA_03.jpg"></td>
              <td rowspan=2 style="width: 72px"><img class="bookImage" src="/img/Lisp_02.jpg"></td>
            </tr>
            <tr border="10px">
              <td class="joinYearArea">{{targetEmployee.joinYear}} 年入社</td>
              <td class="tag" style="text-align:left; margin-left:6px">
                <label for="allTag"><input type=checkbox name="allTag" id="allTag" v-model="allTagFlag">All</label><br>
                <a class="tag" v-for="tag in tagsInfo" :key="tag.name">
                  <label :for="tag.name">
                  <input type=checkbox name="relatedTags" :id="tag.name" :value="tag.name" v-model="filteredTags">{{tag.name}}({{tag.count}})
                  </label><br>
                </a>
                <!--
                <a class="tagChkbox" v-for="tags in targetTags" :key="tags">
                  <label :for="tags">
                    <input type=checkbox name="filteringTags" :value="tags" :id=tags v-model="filteredTags"><label :for=tags>{{tags}} </label>
                  </label>
                </a>
                -->
              </td>
            </tr>
            <tr style="height: 20px"></tr>
            <tr class="employeeEndOnTable"></tr>
            <tr style="height: 20px"></tr>
</table>
<router-link to="/" class="tag"><button>Back</button></router-link>
<p style="height: 50px"></p>
      <div>
        <table style="margin:auto">
          <tr style="height: 250px">
            <td class="chronologyHead">2022</td>
            <td class="chronologyBookCell" v-show="filteredTags.includes('#Webアプリケーション')"><img class="chronologyBookImage" src="../../public/img/Web_03.jpg">
            <br>読了日: 2022/6/9
              <br><span style="color: #fdd835">★★★★</span>☆
              <br>レベル：中級
              <br>技術要素：Web
            </td>
            <td class="chronologyBookCell" v-show="filteredTags.includes('#RPA')"><img class="chronologyBookImage" src="../../public/img/RPA_03.jpg">
              <br>読了日: 2022/5/11
              <br><span style="color: #fdd835">★★★</span>☆☆
              <br>レベル：入門
              <br>技術要素：RPA
            </td>
            <td class="chronologyBookCell" v-show="filteredTags.includes('#Lisp')"><img class="chronologyBookImage" src="../../public/img/Lisp_02.jpg">
              <br>読了日: 2022/5/10
              <br><span style="color: #fdd835">★</span>☆☆☆☆
              <br>レベル：中級
              <br>技術要素：Lisp
            </td>
            <td class="chronologyBookCell" v-show="filteredTags.includes('#Java')"><img class="chronologyBookImage" src="../../public/img/Java_03.jpg">
              <br>読了日: 2022/4/1
              <br><span style="color: #fdd835">★★★</span>☆☆
              <br>レベル：中級
              <br>技術要素：Java
            </td>
            <td class="chronologyBookCell" v-show="filteredTags.includes('#Java')"><img class="chronologyBookImage" src="../../public/img/Java_04.jpg">
              <br>読了日: 2022/3/29
              <br><span style="color: #fdd835">★★★★</span>☆
              <br>レベル：初級
              <br>技術要素：Java
            </td>
          </tr>
          <tr style="height: 50px"></tr>
          <tr style="height: 250px">
            <td class="chronologyHead">2021</td>
            <td class="chronologyBookCell" v-show="filteredTags.includes('#DB')"><img class="chronologyBookImage" src="../../public/img/DB_01_.jpg">
              <br>読了日: 2021/8/3
              <br><span style="color: #fdd835">★★★</span>☆☆
              <br>レベル：入門
              <br>技術要素：DB
            </td>
          </tr>
          <tr style="height: 50px"></tr>
          <tr style="height: 250px">
            <td class="chronologyHead">2020</td>
            <td class="chronologyBookCell" v-show="filteredTags.includes('#DB')"><img class="chronologyBookImage" src="../../public/img/DB_02_.jpg">
              <br>読了日: 2020/8/3
              <br><span style="color: #fdd835">★★★★</span>☆
              <br>レベル：入門
              <br>技術要素：DB
            </td>
            <td class="chronologyBookCell" v-show="filteredTags.includes('#Java')"><img class="chronologyBookImage" src="../../public/img/Java_05.jpg">
              <br>読了日: 2021/2/18
              <br><span style="color: #fdd835">★★★★</span>☆
              <br>レベル：初級
              <br>技術要素：Java
            </td>
          </tr>
          <tr style="height: 50px"></tr>
          <tr style="height: 250px">
            <td class="chronologyHead">2019</td>
            <td class="chronologyBookCell" v-show="filteredTags.includes('#Java')"><img class="chronologyBookImage" src="../../public/img/Java_02.jpg">
              <br>読了日: 2019/7/12
              <br><span style="color: #fdd835">★★★★</span>☆
              <br>レベル：入門
              <br>技術要素：Java
            </td>
          </tr>
          <tr style="height: 50px"></tr>
          <tr style="height: 250px">
            <td class="chronologyHead">2018</td>
            <td class="chronologyBookCell" v-show="filteredTags.includes('#Java')"><img class="chronologyBookImage" src="../../public/img/Java_06.jpg">
              <br>読了日: 2018/12/18
              <br><span style="color: #fdd835">★★★★</span>☆
              <br>レベル：初級
              <br>技術要素：Java
            </td>
            <td class="chronologyBookCell" v-show="filteredTags.includes('#Java')"><img class="chronologyBookImage" src="../../public/img/Java_07.jpg">
              <br>読了日: 2018/5/7
              <br><span style="color: #fdd835">★★★★</span>☆
              <br>レベル：初級
              <br>技術要素：Java
            </td>
            <td class="chronologyBookCell" v-show="filteredTags.includes('#Java')"><img class="chronologyBookImage" src="../../public/img/Java_08.jpg">
              <br>読了日: 2018/2/2
              <br><span style="color: #fdd835">★★★★</span>☆
              <br>レベル：初級
              <br>技術要素：Java
            </td>
            <td class="chronologyBookCell" v-show="filteredTags.includes('#Java')"><img class="chronologyBookImage" src="../../public/img/Java_09.jpg">
              <br>読了日: 2018/1/1
              <br><span style="color: #fdd835">★★★★</span>☆
              <br>レベル：初級
              <br>技術要素：Java
            </td>
          </tr>
          <tr style="height: 50px"></tr>
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
        targetEmployee: {},
        targetTags: [],
        filteredTags: [],
        tagsInfo: [],
        allTagFlag: true,
        endReadDisplayFlag: [true,true,true,true]
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
          const target = this.employees.find((v) => v.employeeID === this.$route.params.value);
          this.targetEmployee = target;
          this.targetTags = target.tag;
          this.filteredTags = target.tag;
          this.tagsInfo = target.tagCount;
          // console.log(this.tagsInfo);
          // console.log(JSON.stringify(employees));
          },
        },
        function: {
          tagArrive(value) {
            return this.filteredTags.includes(value);
          },
          endReadDisplay(value) {
            for(var i=0; i < this.filteredTags.length; i++) {
              if(this.employeeBookList.find((tag, endReadYear) => tag == this.filteredTags[i] && endReadYear == value ) != 'Undefined') {
                return true;
              }
            }
            return false;
          }
        },
        watch: {
          allTagFlag: {
            handler() {
              if (this.allTagFlag) {
                this.filteredTags = this.targetTags.slice()
              } else {
                this.filteredTags = []
              }
            }
          },
        }
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
.joinYearArea {
    text-align: left;
    vertical-align: top;
    padding-left: 22px;
    padding-top: 2ex;
}

.bookImage {
	margin: 0px 2px;
    display: inline-block; /* ここがポイント */
    height: 80px;
}
.tagList {
  margin-right: 16px;
  display: inline;
}

.nameArea{
width:100px;
padding-left:20px
}

button{
background-color:#545454;
color: white;
border:none;
border-radius: 5px;
width: 75px;
height:30px;
margin-right:600px;
}

</style>
