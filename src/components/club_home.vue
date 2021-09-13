<template>
    <v-container>
        <v-row>
                <div  class="pa-3  text-h5 dark" >
                    <span> Clubs in AASTU </span>
                </div>
        </v-row>
<template >

 <v-container   >
     <v-row v-if="message">
         {{message}}
     </v-row>
         <v-row >
<v-col  v-for="(note) in notice"
            :key="note"
            cols="auto"
            sm="6"
            md="4"
            lg="3">
 <v-hover>
    <template v-slot:default="{ hover }"  >
      <v-card
        class="mx-auto"
        max-width="300"
       min-height="300" 
      
       >

        <v-img  :src="note.logo" 
    
        height="200"
         contain ></v-img>

        <v-card-text>
          <h2 class="text-h6 primary--text">
           {{note.clubname}}
          </h2>

          {{note.club_description}}  </v-card-text>

        <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#036358"  >

             <div>
            <v-btn v-if="!alert"
        dark
        @click="alert = true">See more info</v-btn>
  
          <v-alert
      v-model="alert"
      color="#212121"
      dark
      dismissible
      border="top"
      icon="mdi-dots-horizontal"
      transition="scale-transition"   >

     {{note.maxIntake}}
    </v-alert>
          </div>
          
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
  <v-flex> 
    <v-btn
  color="blue"
  dark
  @click="apply(note._id)"
  class="ma-2"
  :style="{left: '50%', transform:'translateX(-50%)'}"  > 
        apply
    </v-btn>
 
  </v-flex>
</v-col>

</v-row>
 </v-container>

  </template>
   </v-container>
</template>

<script>
import axios from 'axios'
const url = 'http://localhost:8888/api/'

export default {
   
data() { 
  return{
      overlay: false,
      alert: false,
      message:'',
       name:'tester',
        notice: '',    

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
                     this.notice = res.data.clubs
                     console.log("true" + res.data)
                 }
             })
             .catch((err)=>{
               this.message = "An error has been occured from server."
             })
}
 
}
</script>