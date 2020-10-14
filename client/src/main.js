import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import scrollTo from "vue-scrollto";
import Transitions from "vue2-transitions";
import axios from "axios";
import VueAxios from "vue-axios";
import "bootstrap/dist/css/bootstrap.css";
import VueSwal from "vue-swal";
import '@/style/_helpers.scss'

Vue.use(VueSwal);
const base = axios.create({
  baseURL: "localhost:3000",
});

Vue.prototype.$http = base;
Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

Vue.config.productionTip = false;
Vue.use(scrollTo);
Vue.use(Transitions);
Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
