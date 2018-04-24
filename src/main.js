
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'

import Axios from 'axios'
import VueAxios from 'vue-axios'

import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueAxios,Axios)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
