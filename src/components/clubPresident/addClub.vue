<template>
<v-container> 

<v-card>
    <v-card-title> 
        <h2>Add a New Club</h2>
    </v-card-title>

<v-divider></v-divider>
<v-alert
        v-if="alert"
      border="left"
      class="pa-5  mx-4 text-h5 grey"
      background-color="grey"
      colored-border
      color="red "
      elevation="2"
    >
<h3>{{alert}}</h3>
</v-alert>
  <v-card-text>
   <v-form class="px-3" >
        <v-text-field  
            label="Name of the Club"
            clearable
            v-model="clubname"
            prepend-icon="mdi-transfer-right">
        </v-text-field>

         <v-text-field  label="Describe your Club"
            clearable
            v-model="club_description"
             prepend-icon="mdi-transfer-right">
        </v-text-field>
        
      <v-text-field  
            label="How many members can your club accept ?"
            clearable
            v-model="maxIntake"
            prepend-icon="mdi-transfer-right">
        </v-text-field>
        <v-select :items='yorn' v-model="recruiting" label="Is your club currently recruitng members?">

        </v-select>

    <v-file-input
    label="Do you have logo or Image for your club ?"
    filled
    v-model="file"
    prepend-icon="mdi-camera"
    ></v-file-input>
        <v-btn flat class="success mx-0 mt-3" @click="submit()"> Add Club </v-btn>
     </v-form>

    </v-card-text>  
  </v-card>
  <club-pres/>
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
     clubPres
   },
data() { 
  return{
     overlay: false,
      alert: false,
      yorn:['Yes','No'],
      recruiting:'',
      club_description:'',
      clubname:'',
      maxIntake:'',
      file:''
  }
   
},
methods:{

submit(){
   if (this.recruiting == 'Yes'){
     this.recruiting = true
   }
   else{ this.recruiting = false}

       let from = new FormData()
            from.append('clubname',this.clubname)
            from.append('club_description',this.club_description)
            from.append('file',this.file)
            from.append('maxIntake', this.maxIntake)
            from.append('recruiting', this.recruiting)

axios.post(`${url}addnewclub/${userId}`, from, {
  headers: {'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'}
}).then((res)=>{
  if(res.data.status == 'success'){
    this.alert = 'Club successfuly created.'
    setTimeout(()=> this.$router.push('/clubPresident'));
  }
  else{
    this.alert = 'Could not create club.'
   this.clubname =''
  this.club_description = ''
   this.maxIntake ='',
     this.recruiting ='',
     this.file = ""
  }

}).catch((err)=>{
  this.alert = 'Server Not responding.'
})
}
}

})
</script>