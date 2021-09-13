<template>
  <v-container >
    <v-row class="flex-row mt-2" justify="center">
      <v-col cols="3">
        <v-card class="pa-4" color="lightgrey" tile>
          <v-row class="my-4" justify="center">
            <div justify="center" class="">
              <v-avatar color="blue" size="56">
                <img src="" alt="img" />
              </v-avatar>
            </div>
          </v-row>
          <v-divider></v-divider>
          <v-row class="my-4">
            <div class="mx-4">
              <v-btn elevation="0" plain color="blue" target="_blank">
                <span>Dashboard</span>
               
                <div width="10px" border color="deep-purple accent-4">
                </div>
              </v-btn>
            </div>
          </v-row>
          <v-divider></v-divider>
          <v-row class="my-4">
            <div class="mx-4">
              <v-btn elevation="0" plain color="blue" target="_blank">
                <span>Students</span>
              </v-btn>
            </div>
          </v-row>
          <v-divider></v-divider>

          <v-row class="my-4">
            <div class="mx-4">
              <v-btn elevation="0" plain color="black" target="_blank">
                <span>Admins</span>
              </v-btn>
            </div>
          </v-row>
          <v-divider></v-divider>

          <v-row class="my-4">
            <div class="mx-4">
              <v-btn elevation="0" plain color="blue" target="_blank">
                <span>Feedbacks</span>
              </v-btn>
            </div>
          </v-row>
          <v-divider></v-divider>
          <v-row class="my-4">
            <div class="mx-4 blue--text" >
           <v-tab>
            <v-badge color="green" content="6">
              Notifications
            </v-badge>
          </v-tab>
            </div>
          </v-row>
        </v-card>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col >
        <v-row class="ma-4">
              <v-btn elevation="0" id="btn-1" @click="change" plain color="black" target="_blank">
                <span>Forum </span>
              </v-btn>
                <v-btn  elevation="0" id="btn-2" @click="change" color="blue" target="_blank">
                <span>Materials </span>
              </v-btn>
                <v-btn  elevation="0" id="btn-3" @click="change" color="blue" target="_blank">
                <span>Information </span>
              </v-btn>
              <v-btn  elevation="0" id="btn-4" @click="change" plain color="blue" target="_blank">
                <span>Clubs </span>
              </v-btn>
            <v-spacer></v-spacer>
            <v-btn target="_blank" plain >
                <span class="blue--text">New Admin <v-icon class="fa fa-plus"></v-icon></span>
            </v-btn>

        </v-row>
        <v-divider class="my-2"></v-divider>
        <v-row  class="mx-4 pa-3" v-if="cp"> 
            <div v-for="admin in club_president" :v-bind="admin" :key="admin">           
                   <h5 class="mx-2">{{admin.username}} </h5>
                <h5 class="mx-2">{{admin.email}}</h5>
                <v-spacer></v-spacer>
                <v-btn flat class="mx-2"><v-icon class="fa fa-envelope"></v-icon></v-btn>
                <v-btn class="mx-2"><v-icon class="fa fa-user-slash"></v-icon></v-btn>
                </div>
        </v-row >
        <v-row  class="mx-4 pa-3" v-if="ia" > 
            <div v-for="admin in info_admin" :v-bind="admin" :key="admin">           
                   <h5 class="mx-2">{{admin.username}} </h5>
                <h5 class="mx-2">{{admin.email}}</h5>
                <v-spacer></v-spacer>
                <v-btn flat class="mx-2"><v-icon class="fa fa-envelope"></v-icon></v-btn>
                <v-btn class="mx-2"><v-icon class="fa fa-user-slash"></v-icon></v-btn>
                </div>
        </v-row >
        
        <v-row  class="mx-4 pa-3" v-if="mA" > 
            <div v-for="admin in material_admin" :v-bind="admin" :key="admin">           
                   <h5 class="mx-2">{{admin.username}} </h5>
                <h5 class="mx-2">{{admin.email}}</h5>
                <v-spacer></v-spacer>
                <v-btn flat class="mx-2"><v-icon class="fa fa-envelope"></v-icon></v-btn>
                <v-btn class="mx-2"><v-icon class="fa fa-user-slash"></v-icon></v-btn>
                </div>
        </v-row >
        
        <v-row  class="mx-4 pa-3" v-if="fa" > 
            <div v-for="admin in forum_admin" :v-bind="admin" :key="admin">           
                   <h5 class="mx-2">{{admin.username}} </h5>
                <h5 class="mx-2">{{admin.email}}</h5>
                <v-spacer></v-spacer>
                <v-btn flat class="mx-2"><v-icon class="fa fa-envelope"></v-icon></v-btn>
                <v-btn class="mx-2"><v-icon class="fa fa-user-slash"></v-icon></v-btn>
              </div>
        </v-row>
      </v-col>
    </v-row>
    {{response}}
  </v-container>
</template>
<script>
//import HelloWorld from './HelloWorld.vue'
const url = 'http://localhost:8888/api/getAllAdmins'
import axios from 'axios';
export default {
    components:{
  //       HelloWorld,
    },
    data(){
        return{
            admins: [{name:"Mr XXX YYY", email:"dummy@email.com", phone:"*******"},
                     {name:"Mr XXX YYY", email:"dummy@email.com", phone:"*******"},
                     {name:"Mr XXX YYY", email:"dummy@email.com", phone:"*******"},
                    {name:"Mr XXX YYY", email:"dummy@email.com", phone:"*******"},
                    {name:"Mr XXX YYY", email:"dummy@email.com", phone:"*******"},
                    {name:"Mr XXX YYY", email:"dummy@email.com", phone:"*******"} ],
              forum_admin: [],
              info_admin: [],
              material_admin: [],
              club_president: [],
              response:'',
              mA: false,
              fa: false,
              cp: false,
              ia: false
        }
    },
    mounted(){
      
       return axios.get(`${url}`)
              .then((res)=>{
               this.response = res
               this.material_admin = res.data.data.material_admin
               this.info_admin = res.data.data.info_admin
               this.forum_admin = res.data.data.forum_admin
               this.club_president = res.data.data.club_president
       })
       .catch((err)=>{
            this.response = err
       })
    },
    methods:{
        run(){
          //  $router.push.login
        },
        change(e){
          if (e.target.id === 'btn-1'){
            this.fa = true
            this.mA = false
            this.ia = false
            this.cp = false
          }
          else if(e.target.id === 'btn-2'){
            this.mA = true
            this.fa = false
            this.ia = false
            this.cp = false
          }
          else if(e.target.id === 'btn-3'){
            this.ia = true
            this.fa = false
            this.mA = false
            this.cp = false
          }
          else if(e.target.id === 'btn-4'){
            this.cp = true
           this.fa = false
            this.ia = false
            this.mA = false
          }
        }

    }
}
</script>
