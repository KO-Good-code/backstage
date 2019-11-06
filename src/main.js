import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import http from '@/config/api'

if (process.env.NODE_ENV !== 'production') {
  import('element-ui/lib/theme-chalk/index.css');
  Vue.use(ElementUI);
}

Vue.config.productionTip = false
Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
