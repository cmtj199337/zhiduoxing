import Vue from 'vue'
import App from './App'
import router from './router'

//引入vue-resource模块
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
