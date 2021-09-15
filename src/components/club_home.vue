<template>
    <v-container>
        <v-row>
                <div  class="pa-3  text-h4 dark" >
                    <span> Clubs in AASTU </span>
                </div>
        </v-row>
<template >

 <v-container >
       <v-row>
                <div  class="pa-3  text-h5 grey--text dark" >
                    <span> Make sure You are logged in before applying to any club here. </span>
                     <span> Or You can always <a> Signup </a> Here. </span>
                </div>
       </v-row>
       <v-row>
         <v-alert v-if="alert" color="green accent-1" elevation="2">
           {{alert}}
         </v-alert>
       </v-row>
<v-row v-if="apply != true" >

<v-card v-for="(club) in clubs"
            :key="club"
    class=" ma-5"
     width="500"
    height="300"
    max-width="auto"
    outlined
  >
   <v-card-text>
<v-col>
  <v-row>
  <v-col cols="4">
   <v-img 
     :src="require('../assets/file_1630044730976.jpg')"
        width="150"
        max-height="100"
        contain
      dark
        />
    </v-col>
    
  <v-col cols="7">
<h2 class="black--text">{{club.clubname}}</h2>

        <div class=" black--text">
        {{club.club_description}}
        </div>

  </v-col>
 </v-row>
<v-row>
    <v-col cols="3">
   <div>
    <v-responsive class=" pl-auto">
      <v-avatar size="70">
          <v-img :src="require('../assets/avatar_1.png')"  /> 
      </v-avatar>
    </v-responsive>
   
   </div>
  </v-col>
  <v-col cols="">
       <div class=" black--text"> Club President: {{club.userId[0].firstname}} {{club.userId[0].lastname}}</div>
        <div>Contact: {{club.userId[0].email}} </div>

  </v-col>
  </v-row>
  </v-col>
  
  
<v-card-actions>
  <v-dialog v-model="dialog" max-width="600px">

<template v-slot:activator="{ on, attrs }">
<v-flex> 
    <v-btn
  color="primary"
  
   v-bind="attrs"
   v-on="on"
  
  :style="{left: '50%', transform:'translateX(-50%)'}" 
  @click="apply()" > 
        apply
    </v-btn>
 
  </v-flex>
      </template>

<v-card>
    <v-alert v-if="alert" color="green accent-4" elevation="2">
           {{alert}}
         </v-alert>
    <v-card-title> 
        <h2>Apply </h2>
    </v-card-title>

<v-divider></v-divider>

  <v-card-text>

   <v-form class="px-3" >

        <v-text-field v-model="department" label="Enter your department"
            clearable>
        </v-text-field>

        <v-text-area  
         v-model="reason" 
         label="Why do you want to join this club? "
         clearable
        >
        </v-text-area>
       <v-text-field  clearable label="Why do you want to join this club?">

       </v-text-field>
       
        <v-btn flat class="success mx-2 mt-3" @click="submit(club._id)"> {{club._id}} Submit Application </v-btn>
        <v-btn flat class="success mx-2 mt-3" @click="dialog = false"> Cancel </v-btn>
      
     </v-form>
  </v-card-text>  
</v-card>
</v-dialog>
     </v-card-actions>
</v-card-text> 
  </v-card>
</v-row>
 </v-container>

  </template>
  <page-header/>
   </v-container>
</template>
<script>
import axios from 'axios'
import forum from './forum.vue'
import pageHeader from './pageHeader.vue'
import Forum from './forum.vue'
const url = 'http://localhost:8888/api/'
const userId = localStorage.getItem('user')
const token = localStorage.getItem('tok')
export default {
  components: { pageHeader, forum, Forum },
   
data() { 
  return{
      overlay: false,
      alert: '',
      apply:false,
      dialog:false,
      message:'',
      reason:'',
      department:'',
      name:'tester',
      notice: '',  
      clubs:'' ,
      clubId:'' 

  }
   
}, 
methods:{
  apply(){
    this.apply = true
  },
  submit(clubId){
    if(localStorage.getItem('tok') == null){
      this.alert = "Sorry, You need to login first to apply to any Club."
    }
    else{
      let data ={
        clubId: clubId,
        WhyThisClub: this.reason,
        department:this.department
      }
      let form = new FormData()
      form.append('clubId', clubId)
      form.append('WhyThisClub', this.reason)
      form.append('department', this.department)
  console.log(clubId);
   axios.post(`${url}studentApplyClub/${userId}`, data, {headers: 
              {'Authorization':`Bearer ${token}`}})
             .then((res) => {
                 if(res.data.status == 'failure'){
                   this.alert = res.status.message
                 }
                 else{
                     this.alert = res.data.message
                     console.log("true" + res.data)
                 }
             })
             .catch((err)=>{
               this.message = "An error has been occured from server."
             })
    }
  }
},
mounted(){
    axios.get(`${url}getallclubs`)
             .then((res) => {
                 if(res.data.status == 'failure'){
                   this.message = "No Clubs Are in the system"
                 }
                 else{
                     this.clubs = res.data.clubs
                     console.log("true" + res.data)
                 }
             })
             .catch((err)=>{
               this.message = "An error has been occured from server."
             })
}
 
}
</script>