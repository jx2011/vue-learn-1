import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import company from './modules/company'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

    },
    modules: {
        user,
        company
    },
    mutations: {

    },
    actions: {

    }
})