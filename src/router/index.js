import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/baseConversion',
        name: 'BaseConversion',
        component: () => import('../views/BaseConversion.vue')
    },
    {
        path: '/editRead',
        name: 'EditRead',
        component: () => import('../views/EditRead.vue')
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
