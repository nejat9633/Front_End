<template>
<v-container>
   
<v-card flat class="pa-5 my-3" color="grey lighten-4"  left>

<v-container>
<h3>List of Students Application</h3>

<v-alert 
      v-if="applicant"
      border="left"
      class="pa-5  mx-4 text-h5 grey"
      background-color="grey"
      colored-border
      color="red "
      elevation="2"
    >
<h3>{{applicant}}</h3>
    </v-alert>
  <v-card v-for="(person, index) in response" v-bind:key="person"
    class="mx-auto"
    max-width="auto"
    flat
    outlined
  >
  
    <v-card-text >

    <div >
    
      <p class="font-weight-regular"> Name: {{person.firstname + " " + person.lastname}} </p>
      <p class="font-weight-regular"> Department: {{person.department}} </p>
      <p class="font-weight-regular"> Club: Aastu Union </p>
      <p class="font-weight-regular"> Reason: {{ person.WhyThisClub }} </p>
    
    </div>
    </v-card-text>

    <v-card-actions >
    <v-btn
      outlined
        text
        color="primary"
        @click="reveal = true && approve(person._id, index)"
      >
        Accept
      </v-btn>
      
      <v-btn
        text
        outlined
        color="red"
        @click="reveal = true && decline(person._id)"
      >
       Reject
       
      </v-btn>
 
    </v-card-actions>
  
  </v-card>
</v-container>
  <div  v-if="noApplicant" class="mx-auto my-auto " max-width="auto">
    
      <h3 class="grey--text" >{{noApplicant}} 
        <v-btn
           text
           flat
        color="blue"
      >
       Add Details
        </v-btn></h3>
  
</div>

</v-card>

<clubPres/>
</v-container>

</template>


<script>
import clubPres from '@/components/clubPresident/clubPres.vue'
import axios from 'axios'
const url = 'http://localhost:8888/api/'
const userId = localStorage.getItem('user');
const token = localStorage.getItem('tok');
export default ({
   components: {
        clubPres,
    },
   

 data: ()=>{
        return{
          response:'',
          message:'',
          noApplicant:'',
          applicant:'',

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
 },
 methods:{
   approve(a_Id, index){
     let data={
     aid: a_Id
   }
axios.post(`${url}approveApplicant/${userId}`,data , {headers:{
          'Authorization': `Bearer ${token}`
   }})
        .then((res)=>{
          if(res.data.status == 'success'){
            this.message = res.data.users
             this.applicant = "Applicant is approved"
             setTimeout(()=> this.response.splice(index, 1), 3000)
            // this.response.splice(index, 1);
            }
            else{
            this.applicant = "Could not approve."
            }
          
         }).catch((err)=>{
           this.applicant = 'Error occured while displaying'
         })
   },
  approve(a_Id, index){
    
axios.post(`${url}declineApplicant/${a_Id}` , {headers:{
          'Authorization': `Bearer ${token}`
   }})
        .then((res)=>{
          if(res.data.status == 'success'){
            this.message = res.data.users
             this.applicant = "Applicant has been Rejected."
             setTimeout(()=> this.applicant.splice(index, 1), 3000)
            // this.response.splice(index, 1);
            }
            else{
            this.applicant = "Could not approve."
            }
          
         }).catch((err)=>{
           this.applicant = 'Error occured while displaying'
         })
   }
 },

 beforeMount(){
     axios.get(`${url}notifyCP/${userId}` , {headers:{
          'Authorization': `Bearer ${token}`
   }})
        .then((res)=>{
          if(res.data.status == 'failure'){
            this.message = res.data.message
             this.noApplicant = "There are no students who applied to this club."
            }
            else{
            this.response = res.data.users
            }
          
         }).catch((err)=>{
           this.noApplicant = 'Error occured while displaying'
         })
 }

})
</script>
