import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import colors from 'vuetify/lib/util/colors'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: localStorage.getItem('user'),
    token: localStorage.getItem('tok'),
    loggedIn: localStorage.getItem('status'),
    role: localStorage.getItem('role')
  },
  mutations: {
   set_token: (state, token, userId) => {state.token = token;
               state.userId = userId},
   auth_request: state => state.loggedIn = 'loading',
   auth_error: state => state.loggedIn = 'failure',
   logout: state => {state.token = ''; state.userId = ''}
  },
  getters:{
     isLoggedIn: state =>state.loggedIn,
     accessToken: state => state.token,

  },
  actions: {
    login({commit}, user){
      commit('auth_request')
      console.log(" In Login Func")
      //return new Promise((resolve, reject)=>{
        //console.log(user)
        //axios({url:'http://localhost:8888/api/login', data: user, method: 'POST'})
        //.then((resp)=>{
          const token = user.token
          const userId = user.user._id
          const role = user.user.role
          console.log(token);
          localStorage.setItem('tok', token)
          localStorage.setItem('user', userId)
          localStorage.setItem('status', 'success')
          localStorage.setItem('role', role)
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
          commit('set_Token', token, userId);
          //resolve();
        //})
        //.catch((err)=>{
         // commit('auth_error')
          //localStorage.removeItem('tok');
          //localStorage.setItem('status', false);
          //reject();
        //})
    //  })

    },
    logout({commit}){
      return new Promise ((resolve, reject) =>{
        commit('logout')
        localStorage.removeItem('tok')
        localStorage.removeItem('user')
        localStorage.removeItem('role')
        delete axios.defaults.headers.common['Authorization']
        resolve();
      })

    }

  },
  modules: {

  }
})
