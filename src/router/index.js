import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import superadmin from '../components/superAdmin/superadmin2.vue'
import admins from '../components/superAdmin/admins.vue'

import Home from '../components/Home.vue'
import vue from '../components/HelloWorld.vue'
import signup from '../components/signup.vue'
import student_page from '../components/Student/student_page.vue'
import material from '../components/Student/material.vue'
import aastuhome from '../components/aastuhome.vue'
import MyQuestion from '../components/Student/my_question.vue'
import MyClubs from '../components/Student/myClubs.vue'

//import infoAdmin from '../views/infoAdmin.vue'
import forumAdmin from '../components/forumAdmin/admin_page.vue'
import adminSignup from '../components/adminSignup.vue'
import materialAdmin from '../components/materialAdmin/materialPage.vue'
import reports from '../components/forumAdmin/reports.vue'
import forumstudents from '../components/forumAdmin/students.vue'
import forumfeedbacks from '../components/forumAdmin/feedbacks.vue'
import banned from '../components/forumAdmin/banned.vue'
import forumquestions from '../components/forumAdmin/questions.vue'
import infoevents from '../components/infoAdmin/events.vue'
import infoAdmin from '../components/infoAdmin/admin_page.vue'
import forum from '../components/forum.vue'
import questionanswer from '../components/forumQ&A.vue'
import forgotPassword from '../views/forgotPassword.vue'
//import student from '../views/student.vue'
import cpres from '../components/clubPresident/cpres.vue'

import club from '../components/club_home.vue'
import applicants from '../components/clubPresident/applicants'
import events from '../components/clubPresident/events.vue'
import members from '../components/clubPresident/clubDetail.vue'
import pageHeader from '../components/Home.vue'
import addNew from '../components/clubPresident/addClub.vue'
import pdfview from '../views/pdfViewer.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/vue',
    name: 'vue',
    component: vue
  },
  {
    path: '/members',
    name: 'members',
    component: members
  },
  {
    path: '/addNewClub',
    name: 'addClub',
    component: addNew
  },
  
  {
    path: '/banned',
    name: 'banned',
    component: banned
  },
  {
    path: '/clubs',
    name: 'club',
    component: club
  },
  {
    path: '/events',
    name: 'events',
    component: events
  },
  {
    path: '/clubpresident',
    name: 'cpres',
    component: cpres
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pageHeader',
    name: 'pageHeader',
    component: pageHeader
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
  path: '/question&answer',
  name: 'forum',
  component: questionanswer
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
  path: '/myClubs',
  name: 'my_clubs',
  component: MyClubs
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
  path: '/admins',
  name: 'admins',
  component: admins
},
{
  path: '/infoAdmin',
  name: 'infoAdmin',
  component: infoAdmin,
  meta: {requiresAuth : true}
},

{
  path: '/infoevents',
  name: 'infoevents',
  component: infoevents,
  meta: {requiresAuth : true}
},
{
  path: '/reports',
  name: 'reports',
  component: reports,
  meta: {requiresAuth : true}
},
{
  path: '/forumstudents',
  name: 'forumstudents',
  component: forumstudents,
  meta: {requiresAuth : true}
},
{
  path: '/forumfeedbacks',
  name: 'forumfeedbacks',
  component: forumfeedbacks,
  meta: {requiresAuth : true}
},
{
  path: '/questions',
  name: 'forumquestions',
  component: forumquestions,
  meta: {requiresAuth : true}
},
{
  path: '/materialAdmin',
  name: 'materialAdmin',
  component: materialAdmin,
  meta: {requiresAuth : true}
},
{
  path: '/applicants',
  name: 'applicants',
  component: applicants,
  meta: {requiresAuth : true}
},
{
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
  path: '/forgotPassword',
  name: 'forgotPassword',
  component: forgotPassword,
},
/*{
  path: '/pdfviewer',
  name: 'pdfviewr',
  component: pdfview,
},*/
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
/*router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('tok') == null) {
      next({
        path: '/',
        params: { nextUrl: to.fullPath }
      })
    } else {
      let user = JSON.parse(localStorage.getItem('user'))
      if (to.matched.some(record => record.meta.is_admin)) {
        if (user.is_admin == 1) {
          next()
        } else {
          next({ name: 'userboard' })
        }
      } else {
        next()
      }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem('tok') == null) {
      next()
    } else {
      next({ name: 'userboard' })
    }
  } else {
    next()
  }
})*/
const router = new VueRouter({
  routes
})

export default router
