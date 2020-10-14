import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import scrollTo from 'vue-scrollto'
import Transitions from 'vue2-transitions'


Vue.config.productionTip = false
Vue.use(scrollTo);
Vue.use(Transitions)

new Vue({
    router,
    store,
    render: function(h) { return h(App) }
}).$mount('#app')