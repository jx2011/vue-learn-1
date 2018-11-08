import Vue from 'vue'
import Router from 'vue-router'
import Layout from './components/layout.vue'

Vue.use(Router)

const router = new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'index',
            redirect: {
                path: '/home'
            },
            component: Layout,
            children: [{
                path: '/home',
                name: 'home',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "home" */ './views/Home.vue')
            }]
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})
router.addRoutes([{
    path: '/userManager',
    name: 'userManager',
    component: () =>
        import ( /* webpackChunkName: "userManager" */ './views/userManager/index.vue'),
    redirect: {
        path: '/userManager/list'
    },
    children: [{
        path: 'list',
        name: `userManager-list`,
        component: () =>
            import ( /* webpackChunkName: "userlist" */ './views/userManager/list.vue')
    }]
}])
export default router