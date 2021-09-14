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
import cpres from '../components/Club President/cpres.vue'
import events from '../components/Club President/events.vue'
import applicants from '../components/Club President/applicants.vue'
import clubDetail from '../components/Club President/clubDetail.vue'
import addClub from '../components/Club President/addClub.vue'
import infoPage from '../components/infoAdmin/infoPage.vue'
import infoHome from'../components/infoAdmin/infoHome.vue'
import feedback from '../components/infoAdmin/feedback.vue'
import materialPage from '../components/Material Admin/materialPage.vue'
import materialHome from '../components/Material Admin/materialHome.vue'
import materialEdit from '../components/Material Admin/materialEdit.vue'


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
  path: '/cpres',
  name: 'cpres',
  component: cpres
},
{
  path: '/applicants',
  name: 'applicants',
  component: applicants
},
{
  path: '/events',
  name: 'events',
  component: events
},
{
  path: '/clubDetail',
  name: 'clubDetail',
  component: clubDetail
},
{
  path: '/addClub',
  name: 'addClub',
  component: addClub
},
{
  path: '/infoPage',
  name: 'infoPage',
  component: infoPage
},
{
  path: '/infoHome',
  name: 'infoHome',
  component: infoHome
},
{
  path: '/feedback',
  name: 'feedback',
  component: feedback
},
{
  path: '/materialPage',
  name: 'materialPage',
  component: materialPage
},
{
  path: '/materialHome',
  name: 'materialHome',
  component: materialHome
},
{
  path: '/materialEdit',
  name: 'materialEdit',
  component: materialEdit
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
