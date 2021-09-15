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
          <v-list-item-subtitle class="text-uppercase"> Materials Admin</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
   
        <v-divider></v-divider>

        <v-card 
          flat >
          <v-responsive class="pt-4 pl-5 ">
          <v-avatar size="60" >
          <v-img :src="person.avatar" /> 
         </v-avatar>
          </v-responsive>
         
          <v-col>
          <div class="text-h6" >{{ Personal_info.name + " " + Personal_info.lastname }}</div>
      
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
          <v-list-item-icon>
            <v-icon color="primary" >{{ item.icon }}</v-icon>
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
import axios from 'axios'
//import ApiService from '../../ApiServices'
const url = 'http://localhost:8888/api/'
const userId = localStorage.getItem('user');
const token = localStorage.getItem('tok');
export default ({
  
name: 'infoPage',

  data: () => ({

    drawer: true,
    items: [
          { title: 'Home', icon: 'mdi-home', to:'/materialHome' },
          { title: 'Materials', icon: 'mdi-note-multiple-outline' , to:'/materialEdit' },
            ],

           Personal_info: [
          {name:'someone', lastname:'somebody', avatar: require('@/assets/avatar_2.png'),}
            ],
  }),
  mounted(){
  axios.get(`${url}/findUser/${userId}`).then((res)=>{
           if(res.data.status == 'failure'){
                   this.message = res.data.message

                   this.status = false
                 }
                 else{
                     this.Personal_info = res.data.user
                     this.response = res.data
                     this.status= true
                     console.log("true" + res.data)
                 }
        })
  },

})
</script>
