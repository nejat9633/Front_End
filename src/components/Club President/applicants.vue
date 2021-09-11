<template>
<v-container>
   
<v-card flat class="pa-5 my-3" color="grey lighten-4"  left>

<v-container>
<h3>List of Students Application</h3>
  <v-card v-for="person in applicants" v-bind:key="person"
    class="mx-auto"
    max-width="auto"
    flat
    outlined
  >
  
    <v-card-text >
    <div >
    
      <p class="font-weight-regular"> Name: {{person.firstname + " " + person.lastname}} </p>
      <p class="font-weight-regular"> Department: {{person.department}} </p>
      <p class="font-weight-regular"> Club: {{person.club}} </p>
      <p class="font-weight-regular"> Reason: {{ person.reason }} </p>
    
    </div>
    </v-card-text>

    <v-card-actions >
    <v-btn
      outlined
        text
        color="primary"
        @click="reveal = true"
      >
        Accept
      </v-btn>
      
      <v-btn
        text
        outlined
        color="red"
        @click="reveal = true"
      >
       Reject
      </v-btn>
 
    </v-card-actions>
  </v-card>
</v-container>
   


</v-card>



<club-pres/>
</v-container>

</template>


<script>
import clubPres from '@/components/Club President/clubPres.vue'

export default ({
   components: {
        clubPres,
    },


 data: ()=>{
        return{
        applicants:[
            {
                firstname: "samri",
                lastname: "Sifen", 
                department: 'Electical Engineering',
                club: 'AASTU Charity Club',

              //  avatar: require('@/assets/avatar_2.png'),
                reason: "Because i think i hdajbhdHow to eat without chewing ? Because i think i hdajbhdHow to eat without chewing Because i think i hdajbhdHow to eat without chewing Because i think i hdajbhdHow to eat without chewing "
            },
            {
                firstname: "Sifen", 
                lastname: "someone", 
                department: 'software Engineering',
                club: 'AASTU Charity Club',
               // avatar: require('@/assets/avatar_1.png'),
                reason: "How to eat eat without chewing ?"
            },
            {
                firstname: "Sifen", 
                lastname: "somebody", 
                department: 'Civil Engineering',
                club: 'AASTU Charity Club',
                //avatar: require('@/assets/avatar_2.png'),
                reason: "How to eat without chewing ?"
            }
        ], 
        }
 }

})
</script>
