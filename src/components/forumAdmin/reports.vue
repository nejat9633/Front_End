<template>
  <div>
    <v-container>
<v-card flat class="pa-5 my-3" color="grey lighten-4" v-for="report in reports" v-bind:key="report">
    <v-layout >
      <v-flex >
      <v-avatar >
          <v-img :src="require('../../assets/avatar_1.png')" /> 
         <!--    <v-img :src="require(person.avatar)" />    -->
      </v-avatar>
       <div class="caption black--text">{{report.username}}</div>
        <div> {{report.question}} </div>

        <v-card-actions class="pa-4 " flat>

      <v-tooltip bottom >
      <template v-slot:activator="{ on, attrs }">
        <v-btn class=" pa-3 mx-1" 
        color="blue "  
        @click="view"
          v-bind="attrs"
          v-on="on"
          outlined
          elevation="0"
        > View Reports</v-btn>
      </template>
      <span>View Answers</span>
      </v-tooltip>

        <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="fa fa-pencil pa-3 mx-1" color="red "
         @click="edit()" 
          v-bind="attrs"
          outlined
          elevation="0"
          v-on="on">Ban Account </v-btn>
     </template>
      <span>Edit Question</span>
      </v-tooltip>

     <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class=" pa-3 mx-1" 
        color=" grey " 
        @click="erase" 
        elevation="0"
        outlined
          v-bind="attrs"
          v-on="on">Delete</v-btn>
        </template>
      <span>Delete Question</span>
      </v-tooltip>

        </v-card-actions>

      </v-flex>
    </v-layout>

</v-card>

</v-container>
    
<admin_page/>
  </div>

</template>

<script>
import admin_page from '@/components/forumAdmin/admin_page'
import axios from 'axios'
const url = 'http://localhost:8888/api/'
const userId = localStorage.getItem('user');
const token = localStorage.getItem('tok');
export default {
    components:{
      admin_page
    },
    mounted(){
       return axios.get(`${url}getEvent/${userId}`, {headers: 
       {'Authorization': `Bearer ${token}`}}).then((res)=>{
           if (res.body.status == 'success'){
               this.events = res.body.Events
           }
       })
    },
    data(){
        return{
            reports: [{
                username: "someone",
                question: "Listen to your favorite artists and albums whenever and wherever online and offline"
            },

{
                username: "someone",
                question: "Listen to your favorite artists and albums whenever and wherever online and offline"
            },
            {
                username: "someone",
                question: "Listen to your favorite artists and albums whenever and wherever online and offline"
            },
            
            ]
        }
    }
}
</script>
