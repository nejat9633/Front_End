<template>
    <v-container>
        <v-row>
                <div  class="pa-3  text-h5 dark" >
                    <span> Clubs in AASTU </span>
                </div>
        </v-row>
<template >

 <v-container >
       
<v-row >

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
        {{club.club_description}}}
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
       <div class=" black--text"> Club President: {{}}</div>
        <div>{{}} </div>

  </v-col>
  </v-row>
  </v-col>
  
  
<v-card-actions>
  <v-dialog max-width="600px">

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
    <v-card-title> 
        <h2>Apply </h2>
    </v-card-title>

<v-divider></v-divider>

  <v-card-text>

   <v-form class="px-3" >

        <v-text-field  label="Enter your department"
            clearable>
        </v-text-field>

        <v-textarea  
         v-model="reason" 
         label="Why do you want to join this club? "
         clearable
        >
        </v-textarea>
       
        <v-btn flat class="success mx-0 mt-3" @click="submit"> Submit Application </v-btn>
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
import pageHeader from './pageHeader.vue'
const url = 'http://localhost:8888/api/'

export default {
  components: { pageHeader },
   
data() { 
  return{
      overlay: false,
      alert: false,
      message:'',
      reason:'',
       name:'tester',
        notice: '',  
        clubs:''  

  }
   
}, 
methods:{
  apply(cID){

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