// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'

// Bootstrap Axios
// Axios.defaults.baseURL = window.AXIOS_BASE_URL ? window.AXIOS_BASE_URL : '/api/'
Axios.defaults.headers.common.Accept = 'application/json'
Axios.interceptors.response.use(
  response => response,
  (error) => {
    return Promise.reject(error)
  })
Vue.$http = Axios


//It can use this.$http.get
import VueResource from 'vue-resource';
Vue.use(VueResource)

//-------------------------------Custom 3rd Party-----------------------------
//Awesome Notification
import CxltToastr from 'cxlt-vue2-toastr'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
var toastrConfigs = {
  position: 'top right',
  showDuration: 2000
}
Vue.use(CxltToastr, toastrConfigs)

//https://github.com/euvl/vue-js-modal
import VModal from 'vue-js-modal'
Vue.use(VModal)

//vue dialog config 
//https://github.com/Godofbrowser/vuejs-dialog
import VuejsDialog from "vuejs-dialog"
Vue.use(VuejsDialog)

//Toasted config
import Toasted from 'vue-toasted';
Vue.use(Toasted)

//toggle button
import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)

import Tooltip from 'vue-directive-tooltip';
import 'vue-directive-tooltip/css/index.css';
Vue.use(Tooltip);

//Vee-Validate
// import VeeValidate from 'vee-validate';
// Vue.use(VeeValidate);

//bootstrap config
// import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
// import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
window.jQuery = window.$ = require('jquery/dist/jquery.min')
import 'bootstrap/dist/js/bootstrap.min'
// Vue.use(BootstrapVue);

// import all icons
import 'vue-awesome/icons'
// OR import individual icons
import 'vue-awesome/icons/home'
import 'vue-awesome/icons/star'
// Import the Icon component
import Icon from 'vue-awesome/components/Icon.vue'
// Add the icon component to Vue
Vue.component('icon', Icon)
//------------------------------------------------------------

Vue.config.productionTip = false

/* Server path */
import path from '@/assets/store/server/server-path.json'

// Vue.mixin({
//   data: function () {
//     return {
//       get SERVER_PATH() {
//         return path.serverpath;
//       },
//       get USER_VERBS(){
//         return path.verbs.user;
//       },
//       imageLoading: false
//     }
//   }
// })

Vue.mixin({
  data: function () {
    return {
      get CATEGORY_API() {
        return path.categoryapi;
      },
      get PRODUCT_API(){
        return path.productapi;
      },
      imageLoading: false
    }
  }
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
