import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import  "./assets/css/cresset.css"
import router from './assets/js/router.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import $ from 'jquery'
import 'lib-flexible'

Vue.use(MintUI)
Vue.use(vueRouter)


new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
  
})