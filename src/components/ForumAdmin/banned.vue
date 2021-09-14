<template>
<v-container>

<v-card flat class="pa-5 my-3" color="grey lighten-4"  left>
<v-row>


  <v-card v-for="banned in students" v-bind:key="banned"
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
import forumAdmin from '@/components/ForumAdmin/forumAdmin.vue'

export default ({
   components: {
       forumAdmin
   },
data: ()=>{
   return{
     dialog: false,
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
}




})
</script>
