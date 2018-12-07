import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/loaders.css'
Vue.use(ElementUI, { size: 'small', zIndex: 3000 })

// import { DatePicker } from 'element-ui'
// Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }

// Vue.use(DatePicker)

Vue.config.productionTip = false
new Vue({
    data() {
        return {
            name: "jx2011"
        }
    },
    router,
    store,
    render: h => h(App)
}).$mount('#app')