<template>

 <v-app id="inspire" >
  
    <v-footer dark padless color="black" absolute inset >
      <v-col class="text-center" >
        {{ new Date().getFullYear() }} —
        <v-btn target="_blank" text v-for="link in links" :key="link.text" router :to="link.to" >
        <strong>About Us</strong>
        </v-btn>
      </v-col>
    </v-footer>
  <v-main>
        <router-view> </router-view>
    </v-main>

  </v-app>
  
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: false,
    items: [
          { title: 'Home', icon: 'mdi-home', to:'/' },
          { title: 'Clubs', icon: 'mdi-account-group-outline', to:'/clubs' },
          { title: 'Forum', icon: 'mdi-forum-outline' , to:'/forum' },
          { title: 'Login', icon: 'mdi-login-variant', to:'/login' },
        ],
        links: [
          {text: 'About Us', to: '/about'}
        ]
  }),
};
</script>
