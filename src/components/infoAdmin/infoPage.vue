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
          <v-list-item-subtitle class="text-uppercase"> Information Director</v-list-item-subtitle>
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
      
       
          </v-col>
       </v-card>
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
          <v-list-item-icon >
            <v-icon color="primary"  >{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
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
      fixed
    >
   <v-app-bar-nav-icon @click="drawer = !drawer " ></v-app-bar-nav-icon>
     <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              :src="require('@/assets/aastu_logo1.png')"
              transition="scale-transition"
              width="100"
              max-height="60"
            />
      <v-toolbar-title class="text-uppercase"> AASTU Student's Center </v-toolbar-title>
      
    </v-app-bar>

<v-flex >
<v-container>


</v-container>
</v-flex>
</v-app>

</template>

<script>

export default ({
  
name: 'infoPage',

  data: () => ({
    drawer: true,
    items: [
        //  { title: 'Home', icon: 'mdi-home', to:'/' },
          { title: 'Events/Informations', icon: 'mdi-account-group-outline', to:'/infoHome' },
          { title: 'Feedback', icon: 'mdi-forum-outline' , to:'/feedback' },
        // { title: 'Banned Accounts', icon: 'mdi-alert-circle', to:'/' },
        ],

           Personal_info: [
          {name:'someone', lastname:'double', avatar: require('@/assets/avatar_1.png'),}
            ],
  }),

})
</script>
