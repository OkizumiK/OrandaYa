import { createRouter, createWebHistory } from 'vue-router'
import EmployeeList from '../views/EmployeeList.vue'
import employees from '../assets/employees.json'
import books from '../assets/books.json'

const routes = [
  {
    path: '/',
    name: 'EmployeeList',
    component: EmployeeList,
    beforeEnter: (to, from, next) => {
        employees.forEach(function( employee ) {
        employee.book.forEach( function( bookID ){
            if(bookID === ""){
                employee.bookImageNew3.push("");
            }else{
                const targetBook = books.find((b) => b.bookID === bookID);
                employee.bookImageNew3.push(targetBook.bookimage);
            }
        });
        var c=0;
        for(var i = 0;i < employee.tagCount.length; i++){
            for(var j = 0; j < books.length; j++){
            for(var k = 0; k < employee.book.length; k++){

                    if(employee.tagCount[i]["name"] === books[j].tag && employee.book[k] === books[j].bookID){
                    c++;
                    }
            }
            }
           employee.tagCount[i]["count"] = c;
           c = 0;
        }

//        employee.tagCount.forEach( function( tagItem ){
//            var result = books.filter(function(value) {
//              return value.tag === tagItem.name;
//            });
//           tagItem["count"] = result.length;
//        });
        employee.tagCount.sort(function(a, b) {
            return b.count - a.count;
        });
    });
    next(); // 正常に遷移
    }
  },
  {
    path: '/employeeDetail',
    name: 'EmployeeDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './../views/EmployeeDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // history: createWebHistory(),
  routes
})

export default router