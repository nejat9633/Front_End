<template>
  <div>
    <v-container>
        <h2>Events </h2>
<v-card flat class="pa-5 my-3" color="grey lighten-4" v-for="event in events" v-bind:key="event">
    <v-layout >
      <v-flex >
          <v-row>
        <v-col>
       <div class="caption black--text">{{event.title}}</div>
       <div>{{event.body}}</div>
       <div>{{event.createdAt}}</div>
        </v-col>
        <v-col>
        <div> <v-img src="@/assets/file_1630045180557.jpg" max-width="200" max-height="300"> </v-img>  </div>
        </v-col>
       </v-row>
<v-row>
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
        > View full size</v-btn>
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
          v-on="on">Edit </v-btn>
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
        </v-row>
      </v-flex>
    </v-layout>

</v-card>

</v-container>
    
<admin_page/>
  </div>

</template>

<script>
import admin_page from '@/components/infoAdmin/admin_page'

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
           else{
               this.message = res.body.message
           }
       })
    },
    data(){
        return{
            message: '',
            events: [{
                title: "someone",
                image: 'image',
                createdAt: 'Sep 12, 2017',            
                body: "Listen to your favorite artists and albums whenever and wherever online and offline"
            },

            {
                title: "someone",
                image: 'image',
                body: "Listen to your favorite artists and albums whenever and wherever online and offline",
                createdAt: 'Sep 12, 2017'            
                },
            {
                title: "someone",
                image: 'image',
                createdAt: 'Sep 12, 2017',            
                body: "Listen to your favorite artists and albums whenever and wherever online and offline"            },
            
            ]
        }
    }
}
</script>
