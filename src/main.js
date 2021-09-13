import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import axios from 'axios'
import router from './router/router'
import Chart from 'chart.js'
import Chartkick from 'vue-chartkick'

axios.defaults.withCredentials = true;

Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.use(Chartkick.use(Chart))

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
