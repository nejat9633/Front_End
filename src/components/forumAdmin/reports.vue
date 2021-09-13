<template>
    <v-container>
<v-flex xs12>
<v-row>
<v-col cols="" >
   
    <v-card flat class="pa-5 my-3" >
    <h3>List of Reported Questions </h3>

<v-card 
   v-for="(resp, index) in response"
   v-bind:key="resp"
  class="mx-auto"
  max-width="auto"
  color="grey lighten-4" 
  flat
>
   <v-card-text>
   <div>
    <v-responsive class="pt-4 pl-5">
      <v-avatar size="30">
          <v-img :src="require('@/assets/avatar_2.png')" /> 
      </v-avatar>
    </v-responsive>
    <span>{{user[index].username}}</span>
   </div>
       <div class="caption black--text">{{resp.tile}}</div>
        <div> {{resp.description}} </div>
   </v-card-text>

 <v-card-actions>
     
       <v-btn
        text
        outlined
        color="blue"
        @click="reveal = true"
      >
      View Reports
      </v-btn>
<!--
      <v-btn
        text
        outlined
        color="red"
        @click="reveal = true"
      >
        Ban Account
      </v-btn>
      -->

       <v-btn
      outlined
        text
        color="red"
        elevation="0"
        @click="reveal = true"
      >
        Delete
      </v-btn>

    </v-card-actions>
     

</v-card>
</v-card>

</v-col>
<v-col >
<v-card flat class="pa-5 my-3" color="grey lighten-4"  left>

<v-container>
<h3>List of Students Reported</h3>
  <v-card v-for="questn in response2" v-bind:key="questn"
    class="mx-auto"
    max-width="auto"
    flat
    outlined
  >
  
    <v-card-text >
      <div  >
          <v-responsive class="pt-4 pl-5 ">
          <v-avatar size="30" >
          <v-img :src="require('@/assets/avatar_1.png')" /> 

         </v-avatar>
          </v-responsive>
      </div>
      
      <p> {{questn.firstname + " " + questn.lastname}} </p>
      <div class="text--primary">
   <p> This student has been reported {{ questn.no_report }} times. </p>
      <!--  {{questn.question}}-->
      </div>
    </v-card-text>
    <v-card-actions>
   <!--   <v-btn
      outlined
        text
        color="primary"
        @click="reveal = true"
      >
        Delete
      </v-btn>
      -->
      <v-dialog>
        <template v-slot:activator="{ on, attrs }">
      <v-btn
        text
        outlined
        v-on="on"
        v-bind="attrs"
        color="red"
        :style="{left: '50%', transform:'translateX(-50%)'}"
        @click="ban(questn._id)"
      >
        Ban Account
      </v-btn>
      </template>
       <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Opening from the top</v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">Hello world!</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-card-actions>
    {{msg}}
  </v-card>

</v-container>

</v-card>
</v-col>
</v-row>
</v-flex>

    <forumAdmin/>
    </v-container>
</template>


<script>
import forumAdmin from '@/components/forumAdmin/admin_page.vue'
import admin_page from '@/components/forumAdmin/admin_page'
import axios from 'axios'

const url = 'http://localhost:8888/api/'
const userId = localStorage.getItem('user');
const token = localStorage.getItem('tok');

export default {
    components: {
        forumAdmin,
        admin_page
    },
    data: ()=>{
        return{
          response:'',
          report_msg:'',
          msg:'',
          user:'',
        questions:[
            {
                firstname: "Sifen", lastname: "Sifen", avatar: require('@/assets/avatar_2.png'),
                question: "How to eat without chewing ?",count: 4
            },
            {
                firstname: "Sifen", lastname: "Sifen", avatar: require('@/assets/avatar_1.png'),
                question: "How to eat eat without chewing ?",    count: 0
            },
            {
                firstname: "Sifen", lastname: "Sifen", avatar: require('@/assets/avatar_1.png'),
                question: "How to eat without chewing ?",  count: 2
            }
        ], 

         reports: [{
                username: "someone",
                avatar: require('@/assets/avatar_2.png'),
                question: "Listen to your favorite artists and albums whenever and wherever online and offline",
            },

            {   
                username: "someone",
                avatar: require('@/assets/avatar_1.png'),
                question: "Listen to your favorite artists and albums whenever and wherever online and offline",
               
            },
            {
                username: "someone",
                 avatar: require('@/assets/avatar_2.png'),
                question: "Listen to your favorite artists and albums whenever and wherever online and offline",
            },
            
            ],
            reponse2:'',
            dialog: false
        }
    },
    mounted(){
    /* axios.get(`${url}getreports`, {headers: 
       {'Authorization': `Bearer ${token}`}})
       .then((res)=>{
           if (res.body.status == 'success'){
               this.reports = res.body.result
           }
           else{
             this.report_msg = "No reports has been made so far"
           }
       }).catch((err)=>{
      this.msg = "Wow kfkfkkfkfkkl kdkkfd"
    })
*/
    axios.get(`${url}listofreportedQ`,
         {headers: 
              {'Authorization': `Bearer ${token}`}})
         .then((res)=>{
           if (res.data.status == 'success'){
               this.response = res.data.questions
               this.user = res.data.arr
               console.log(res.data)
           }
           else{
             this.report_msg = "No reports has been made so far"
           }
        }).catch((err)=>{
              this.report_msg = "Error While Loading"
    })
     axios.get(`${url}listofreportedS`,
         {headers: 
              {'Authorization': `Bearer ${token}`}})
         .then((res)=>{
           if (res.data.status == 'success'){
               this.response2 = res.data.arr
               //this.user = res.data.arr
               console.log(res.data)
           }
           else{
             this.report_msg = "No reports has been made so far"
           }
        }).catch((err)=>{
              this.report_msg = "Error While Loading"
    })
   
    },
    methods:{
      ban(uID){
        axios.get(`${url}ban${uID}`,
         {headers: 
              {'Authorization': `Bearer ${token}`}})
         .then((res)=>{
           if (res.data.status == 'success'){
               this.response2 = res.data.message
               //this.user = res.data.arr
               console.log(res.data)
           }
           else{
             this.report_msg = "No reports has been made so far"
           }
        }).catch((err)=>{
              this.report_msg = "Error While Loading"
    })
   

      }
    }
    
 }

</script>
