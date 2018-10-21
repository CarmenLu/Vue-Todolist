import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let vm = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
Vue.use({
  vm
})
