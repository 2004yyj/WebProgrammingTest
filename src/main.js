import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify/lib'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false
Vue.use(Vuetify);

new Vue({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
