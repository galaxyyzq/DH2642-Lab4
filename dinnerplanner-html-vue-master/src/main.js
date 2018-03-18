import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false
export const bus=new Vue();

Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
