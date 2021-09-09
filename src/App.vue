<template>

 <v-app id="inspire" >
    <v-navigation-drawer 
    v-model="drawer"
    app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6" >
            AASTU Student's Center
          </v-list-item-title>
          <!--
          <v-list-item-subtitle>
            
          </v-list-item-subtitle>
          -->
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon color="primary" >{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  
    <v-app-bar
      app
      dark
      height="80"
      scroll-target="#scrolling-techniques-2"
     
    >
   <v-app-bar-nav-icon @click="drawer = !drawer " ></v-app-bar-nav-icon>

    <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              :src="require('./assets/aastu_logo1.png')"
              transition="scale-transition"
              width="100"
              max-height="60"
            />
      <v-toolbar-title class="text-uppercase"> AASTU Student's Center </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
        <router-view> </router-view>
    </v-main>

 <v-spacer></v-spacer>
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

export default {
  name: 'App',

 components: {
    
  },
  
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
