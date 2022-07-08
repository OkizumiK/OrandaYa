const app = Vue.createApp({
    data: ()=> ({
        message: 'Hello world!'
    })
// options
})
app.mount('#app')


import employee from './json/employee.json'

export default {
  data: () => {
     employee: employee
  }
}