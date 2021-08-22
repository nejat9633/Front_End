<template>
<!-- try to make the navigation drawer from the app.vue disappear!! -->
 <v-app id="inspire">
    <v-navigation-drawer 
    v-model="drawer"
    app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            AASTU Student's Center
          </v-list-item-title>
          <!--
          <v-list-item-subtitle>
            
          </v-list-item-subtitle>
          -->
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

 <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar color="primary">
           <!-- <span class="white--text text-h5">{{gh}}</span>-->
           <v-icon dark>
        mdi-account
      </v-icon>
            </v-list-item-avatar>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                someone 
              </v-list-item-title>
              <v-list-item-subtitle>someone@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item> </v-list-item>
        </v-list>

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
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
<!---->
<v-list-group
          :value="true"
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title ><strong>My Menu</strong></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon], i) in admins"
            :key="i"
            link
          >
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
<!--   -->
      <template v-slot:append>
        <div class="pa-2" >
          <v-btn block dark>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  
    <v-app-bar
      app
      dark
      height="80"
      scroll-target="#scrolling-techniques-2"
    >
   <v-app-bar-nav-icon @click="drawer = !drawer "></v-app-bar-nav-icon>

    <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              :src="require('../../assets/aastu_logo1.png')"
              transition="scale-transition"
              width="100"
              max-height="60"
            />
      <v-toolbar-title> AASTU Student's Center </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
        <router-view> </router-view>
    </v-main>

 <v-spacer></v-spacer>
  
  </v-app>
  
</template>

<script>

export default {
  name: 'App',

 components: {
    
  },
  
  data: () => ({
    drawer: null,
    items: [
          { title: 'Home', icon: 'mdi-home', to:'/' },
          { title: 'Clubs', icon: 'mdi-account-group-outline', to:'' },
          { title: 'Forum', icon: 'mdi-forum-outline' , to:'' },
          //{ title: 'My Menu', icon: 'mdi-menu', to:'/student' },
        ],

        links: [
          {text: 'About Us', to: '/about'}
        ],

         admins: [
            ['My Materials','mdi-note multiple'],
        ['My Questions', 'mdi-frequently-asked-questions'],
        ['My Clubs', 'mdi-account-group'] 
      ]
  }),
};
</script>
