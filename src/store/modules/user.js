export default {
    state: {
        list: []
    },
    mutations: {
        setState_user(state, { key, data }) {
            state[key] = data;
        }
    },
    getters: {
        userList(state) {
            return state.list.filter(item => item.age == 18);
            state.list.forEach(element => {
                element.age += 33;
            });
            return state.list.sort();
        }
    },
    actions: {
        getList({ commit }) {
            const data = require('../../views/userManager/list.json');
            return new Promise(resolve => {
                setTimeout(() => {
                    commit('setState_user', { key: 'list', data });
                    resolve(1111);
                }, 3000)
            })
        }
    }
}