import router from '../../router'
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
        async getList1({ commit }) {
            const data = await new Promise(resolve => {
                setTimeout(() => {
                    resolve([{
                            "name": "jx2011",
                            "age": 18
                        },
                        {
                            "name": "Tom",
                            "age": 19
                        }
                    ]);
                }, 3000);
            });
            commit('setState_user', { key: 'list', data });
            console.log(['/userManager/list'].findIndex(path => path === router.currentRoute.path))
            return data;
        },
        getList({ commit }) {
            const data = require('../../views/userManager/list.json');
            setTimeout(() => {
                commit('setState_user', { key: 'list', data });
                return "data loaded";
            }, 2000);
            // return new Promise(resolve => {
            //     setTimeout(() => {
            //         commit('setState_user', { key: 'list', data });
            //         resolve(1111);
            //     }, 3000)
            // })
        },
        getpath({ commit }) {

        }
    }
}