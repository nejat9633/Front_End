import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import superadmin from '../components/superadmin.vue'
import Home from '../components/Home.vue'
import signup from '../components/signup.vue'
import student_page from '../components/Student/student_page.vue'
import material from '../components/Student/material.vue'
import aastuhome from '../components/aastuhome.vue'
import MyQuestion from '../components/Student/my_question.vue'
import infoAdmin from '../views/infoAdmin.vue'
import forumAdmin from '../views/forumAdmin.vue'
import adminSignup from '../components/adminSignup.vue'
import materialAdmin from '../views/materialAdmin.vue'
//import student from '../views/student.vue'
import clubPresident from '../views/clubPresident.vue'


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
  path: '/signup',
  name: 'signup',
  component: signup
},
{
  path: '/student',
  name: 'student_page',
  component: student_page
},
{
  path: '/material',
  name: 'material',
  component: material
},
{
  path: '/question',
  name: 'my_question',
  component: MyQuestion
},
{
  path: '/aastuhome',
  name: 'aastuhome',
  component: aastuhome
},

{
  path: '/super',
  name: 'super',
  component: superadmin
},

{
  path: '/infoAdmin',
  name: 'infoAdmin',
  component: infoAdmin,
  meta: {requiresAuth : true}
},
{
  path: '/materialAdmin',
  name: 'materialAdmin',
  component: materialAdmin,
  meta: {requiresAuth : true}
},{
  path: '/clubPresident',
  name: 'clubPresident',
  component: clubPresident,
  meta: {requiresAuth : true}
},{
  path: '/forumAdmin',
  name: 'forumAdmin',
  component: forumAdmin,
  meta: {requiresAuth : true}
},
{
  path: '/adminPassword',
  name: 'adminPassword',
  component: adminSignup,
  meta: {requiresAuth : true}
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
/*router.beforeEach((to, from, next)=>{
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(this.$store.getters.isLoggedIn){
     next()
    }
    else{
     next({
       path: '/login',
       query: {redirect: to.fullPath}
     })
     
    }
  }
})*/

const router = new VueRouter({
  routes
})

export default router
