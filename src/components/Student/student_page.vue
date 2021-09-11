<template>

 <v-app id="inspire">
    <v-navigation-drawer 
       v-model="drawer" 
       app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6 ">
            AASTU Student's Center
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

        <v-card v-for="person in Personal_info" :key="person" flat >
          <v-responsive class="pt-4 pl-5 ">
          <v-avatar size="60" >
          <v-img :src="person.avatar" /> 
         </v-avatar>
          </v-responsive>
         
          <v-col>
          <div class="text-h6" >{{ person.name + " " + person.lastname }}</div>
          <div class="grey--text" >{{ person.department }}</div>
       
          </v-col>
       </v-card>
        <v-divider></v-divider>

    <v-list
        dense
        nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link>

          <v-list-item-icon>
            <v-icon >{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    </v-list>

<v-list-group
          :value="true"
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title > <strong>My Menu</strong> </v-list-item-title>
            </v-list-item-content>
          </template>

<v-list-item
  v-for="todo in access" 
  :key="todo.title"
  :to="todo.to"
  link
>
<v-list-item-title> {{todo.title}} </v-list-item-title>
<v-list-item-icon> <v-icon >{{todo.icon}}</v-icon> </v-list-item-icon>
</v-list-item>

        </v-list-group>
  
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
      <v-toolbar-title> AASTU STUDENT'S CENTER</v-toolbar-title>
    </v-app-bar> 
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
          { title: 'Clubs', icon: 'mdi-account-group-outline', to:'/clubs' },
          { title: 'Forum', icon: 'mdi-forum-outline' , to:'/forum' },
        ],

        links: [
          {text: 'About Us', to: '/about'}
        ],

        access: [
          {title: 'My Materials' ,icon: 'mdi-note multiple', to: '/material'},
          {title: 'My Questions' ,icon: 'mdi-frequently-asked-questions', to: '/question'},
          {title: 'My Clubs' ,icon: 'mdi-account-group', to: '/myclubs'},
             ],

      Personal_info: [
          {name:'someone', lastname:'somebody', department: 'SWE', avatar: require('../../assets/avatar_2.png'),}
            ],
  }),
};
</script>
