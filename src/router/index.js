import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import superadmin from '../components/superadmin.vue'
import Home from '../components/Home.vue'
import signup from '../components/signup.vue'
import student_page from '../components/Student/student_page.vue'
import material from '../components/Student/material.vue'
import MyQuestion from '../components/Student/my_question.vue'
import MyClubs from '../components/Student/my_clubs.vue'
import tester from '../components/tester.vue'
import forum from '../components/forum.vue'
import clubs from '../components/clubs.vue'
import pageHeader from '../components/pageHeader.vue'
import forumAdmin from '../components/ForumAdmin/forumAdmin.vue'
import report from '../components/ForumAdmin/report.vue'
import banned from '../components/ForumAdmin/banned.vue'
import clubPres from '../components/Club President/clubPres.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
  path:'/pageHeader',
  name: 'pageHeader',
  component: pageHeader
  },
  {
    path: '/tester',
    name: 'tester',
    component: tester
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
  path: '/forum',
  name: 'forum',
  component: forum
},
{
  path: '/clubs',
  name: 'clubs',
  component: clubs
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
  path: '/myclubs',
  name: 'my_clubs',
  component: MyClubs
},
{
  path: '/forumAdmin',
  name: 'forumAdmin',
  component: forumAdmin
},
{
  path: '/report',
  name: 'report',
  component: report
},
{
  path: '/banned',
  name: 'banned',
  component: banned
},
{
  path: '/clubPres',
  name: 'clubPres',
  component: clubPres
},
{
  path: '/super',
  name: 'super',
  component: superadmin
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
