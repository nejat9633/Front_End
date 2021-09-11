<template>
    <v-container>
<v-flex xs12>
<v-row>
<v-col cols="" >
   
    <v-card flat class="pa-5 my-3" >
    <h3>List of Reported Questions </h3>

<v-card 
   v-for="report in reports"
   v-bind:key="report"
  class="mx-auto"
  max-width="auto"
  color="grey lighten-4" 
  flat
>
   <v-card-text>
   <div>
    <v-responsive class="pt-4 pl-5">
      <v-avatar size="30">
          <v-img :src="report.avatar" /> 
      </v-avatar>
    </v-responsive>
   </div>
       <div class="caption black--text">{{report.username}}</div>
        <div> {{report.question}} </div>
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
  <v-card v-for="questn in questions" v-bind:key="questn"
    class="mx-auto"
    max-width="auto"
    flat
    outlined
  >
  
    <v-card-text >
      <div  >
          <v-responsive class="pt-4 pl-5 ">
          <v-avatar size="30" >
          <v-img :src="questn.avatar" /> 

         </v-avatar>
          </v-responsive>
      </div>
      
      <p> {{questn.firstname + " " + questn.lastname}} </p>
      <div class="text--primary">
   <p> This student has been reported {{ questn.count }} times. </p>
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
      <v-btn
        text
        outlined
        color="red"
        :style="{left: '50%', transform:'translateX(-50%)'}"
        @click="reveal = true"
      >
        Ban Account
      </v-btn>
    </v-card-actions>
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
import forumAdmin from '@/components/ForumAdmin/forumAdmin.vue'

export default ({
    components: {
        forumAdmin
    },
    data: ()=>{
        return{
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
            
            ]
        }
    }
   
})
</script>
