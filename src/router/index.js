import Vue from 'vue'
import VueRouter from 'vue-router'
import Home1 from '../views/Home.vue'
import login from '../views/login.vue'
import superadmin from '../components/superadmin.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/login',
    name: 'login',
    component: login
},

{
  path: '/super',
  name: 'super',
  component: superadmin
},

{
  path: '/home',
  name: 'home',
  component: Home1
},

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
