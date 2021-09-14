<template>
<v-container>

<v-card flat class="pa-5 my-3" color="grey lighten-4"  left>
<v-row>

<v-alert 
      v-if="nouser"
      border="left"
      class="pa-5  mx-4 text-h5 grey"
      background-color="grey"
      colored-border
      color="red "
      elevation="2"
    >
<h3>{{nouser}}</h3>
    </v-alert>
  <v-card v-for="banned in response" v-bind:key="banned"
    class="mx-auto my-2 "
    max-width="auto"
    flat
    outlined
     width="500"
    height="200"
  >
  
    <v-card-text >
      <div class="text-center">

          <v-responsive class="pt-4 pl-0 ">
          <v-avatar size="70" >
          <v-img :src="banned.avatar" /> 
         </v-avatar>
          </v-responsive>

      </div>
      
      <h2 class="text-center"> {{banned.firstname + " " + banned.lastname}} </h2>
      
    </v-card-text>
    <v-card-actions>
  
<v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            text
        outlined
        color="red"
        :style="{left: '50%', transform:'translateX(-50%)'}"
        
          v-bind="attrs"
          v-on="on" 
        >
          Activate Account
        </v-btn>
      </template>

      <v-card>
        <v-card-text> <br/> Are you sure you want to activate this account? </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Yes
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            No
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

      
    </v-card-actions>
  </v-card>

</v-row>
  </v-card> 

   <forumAdmin/>
</v-container>
</template>

<script>
import forumAdmin from '@/components/forumAdmin/admin_page.vue'
import axios from 'axios'
const url = 'http://localhost:8888/api/'
const userId = localStorage.getItem('user');
const token = localStorage.getItem('tok');
export default ({
   components: {
       forumAdmin
   },
data: ()=>{
   return{
     dialog: false,
     response:'',
     message:'',
     nouser:'',
      students: [
   {
         avatar: require('@/assets/avatar_2.png'),
         firstname: 'selome',
         lastname: 'tesfaye',
   },{
         avatar: require('@/assets/avatar_2.png'),
         firstname: 'selome',
         lastname: 'tesfaye',
   },{
         avatar: require('@/assets/avatar_2.png'),
         firstname: 'selome',
         lastname: 'tesfaye',
   },{
         avatar: require('@/assets/avatar_2.png'),
         firstname: 'selome',
         lastname: 'tesfaye',
   },
{
         avatar: require('@/assets/avatar_1.png'),
         firstname: 'samrawit',
         lastname: 'tesfaye',
   },
{
         avatar: require('@/assets/avatar_1.png'),
         firstname: 'samrawit',
         lastname: 'tesfaye',
   },
      ]
   }
},

mounted(){
axios.get(`${url}bannedAccounts` , {headers:{
          'Authorization': `Bearer ${token}`
        }})
        .then((res)=>{
          if(res.data.status == 'failure'){
            this.message = res.data.message
             this.nouser = res.data.message
            }
          else if(res.data.users.length == 0){
             this.nouser = 'Currently, There are no banned students in this forum.'

            }
          else  {
            this.response = res.data.users
            }
          
         }).catch((err)=>{
           this.noEvent = 'Error occured while displaying'
         })
}


})
</script>
