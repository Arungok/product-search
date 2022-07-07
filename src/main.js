import Vue from 'vue'
import App from './App.vue';
import VueLoadmore from 'vuejs-loadmore';

Vue.config.productionTip = false;
Vue.use(VueLoadmore);

new Vue({
  render: h => h(App),
}).$mount('#app')
