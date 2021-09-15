<template>

 <v-app id="inspire" >
    
    <v-main>
        <router-view :key="$router.fullPath"> </router-view>
    </v-main>


    <v-footer dark padless color="black" >
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} —
        <v-btn target="_blank" text v-for="link in links" :key="link.text" router :to="link.to" >
        <strong>About Us</strong>
        </v-btn>
      </v-col>
    </v-footer>
   

  </v-app>
  
</template>

<script>
window.onbeforeunload = function(){ return 'your work would be lost'}
/*window.onhashchange = ()=>{ 
          localStorage.removeItem('tok')
        localStorage.removeItem('user')
        localStorage.removeItem('role')
        localStorage.removeItem('status')
        alert("you have been loggeg out.")
   console.log("backbutton pressed!")}*/
export default {
  name: 'App',

 components: {
    
  },
  methods:{
    login(){
      this.$router.push('/login')
    }
  },
  beforeMount(){
    if(localStorage.getItem('tok') != null ){
      this.login == false
    }
    else {
      this.login = true
    }
  },
  data: () => ({
    drawer: false,
    login: false,
    items: [
          { title: 'Home', icon: 'mdi-home', to:'/' },
          { title: 'Clubs', icon: 'mdi-account-group-outline', to:'' },
          { title: 'Forum', icon: 'mdi-forum-outline' , to:'/forum' },
          //{ title: 'Login', icon: 'mdi-login-variant', to:'/login' },
        ],
        links: [
          {text: 'About Us', to: '/about'}
        ]
  }),
};
</script>
