export default {
    state: {
        list: []
    },
    mutations: {
        setState_company(state, { key, data }) {
            state[key] = data;
        }
    },
    actions: {
        'getCompanyList' ({ commit }) {
            const data = require('../../views/companyManager/list.json');
            commit('setState_company', { key: 'list', data });
        }
    }
}