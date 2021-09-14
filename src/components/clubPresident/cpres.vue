<template>
<v-container> 


<v-card    
    outlined
    class=" ma-5"
    height="450"
    max-width="auto"
  color="grey lighten-2"
    >
    <v-card-title > 
        <h2 align-center>{{club_info.clubname}}</h2>
    </v-card-title>

<v-divider></v-divider> 
<v-card-text>
<v-row>
<v-col cols="6">
<v-img :src="require('@/assets/notice1.jpg')"
      contain 
      class="pa-2"
      height="350">
</v-img>
</v-col>

<v-col>

<div class=" black--text font-weight-medium" >{{club_info.club_description}}</div>
 <v-card-actions>

<v-dialog max-width="600px">

<template v-slot:activator="{ on, attrs }">

        <v-btn
          class="success mx-10 mt-10 pa-5"
          dark
          v-bind="attrs"
          v-on="on"
          flat
          large   
          >
        <v-icon class="pr-3">mdi-plus-circle</v-icon>
          Edit Club
        </v-btn>
   
      </template>

<v-card>
    <v-card-title> 
        <h2>Edit your Club</h2>
    </v-card-title>
    <v-alert 
      v-if="editmessage"
      border="left"
      class="pa-5  mx-4 text-h5 grey"
      background-color="grey"
      colored-border
      color="red "
      elevation="2"
    >
<h3>{{editmessage}}</h3>
    </v-alert>
<v-divider></v-divider>

  <v-card-text>

  
   <v-form class="px-3" >
      

        <v-text-field  label="Title of the Club"
        v-model="editedclubname"
            clearable
             prepend-icon="mdi-transfer-right">
        </v-text-field>



  <v-file-input
    label="Image Input"
    filled
    v-model="editedfile"
    prepend-icon="mdi-camera"
  >
  </v-file-input>

        <v-textarea
            label="Enter the Description info of the club"
            clearable

            v-model="editeddescription"
            prepend-icon=" mdi-pencil"
        >
        </v-textarea>
        <v-btn flat class="success mx-0 mt-3" @click="editClub()"> Edit Club </v-btn>
     </v-form>

    </v-card-text>  
  </v-card>
</v-dialog>

</v-card-actions>

</v-col>
</v-row>
</v-card-text>  
</v-card>

<club-pres/>
</v-container>
</template>


<script>
import clubPres from '@/components/clubPresident/clubPres.vue'
import axios from "axios";
const url = "http://localhost:8888/api/";
const token = localStorage.getItem("tok");
const userId = localStorage.getItem("user");

export default ({
   components: {
        clubPres,
    },


data() { 
  return{
          editmessage:'',
      club_description:'',
      file:'',
      uploadEvent:'',
      editeddescription:'',
      editedfile:'',
      editedclubname:'',
     clubname:'',
     club_info:'',
      message:'',
      status: null,
      club: [
      {
        name: "AASTU charity club",
        description: "sthwhere the qclubs are Loremspernatur! Tempora.",
        image: require("@/assets/notice1.jpg"),

      }
      ]
  }
   
},
mounted(){
   axios.get(`${url}getClubInfo/${userId}`, {headers: {
            'Authorization':`Bearer ${token}`
   }}).then((res)=>{
           if(res.data.status == 'failure'){
                   this.message = res.data.message
                   this.status = false
                 }
                 else{
                     this.club_info = res.data.club
                     this.message =" "
                     this.status= true
                 }
        })

    },
    methods:{
    editClub(){
      const form = new FormData();
            form.append('title',this.editedclubname)
            form.append('body',this.editeddescription)
            form.append('file',this.editedfile)

       axios.post(`${url}editClubInfo/${userId}`, form, {headers: {
            'Authorization':`Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
         }}).then((res)=>{
           if(res.data.status == 'success'){
                    this.club_info = res.data.club
                     this.editmessage ="Club Succesfully updated."
                     setTimeout(()=> this.$router.push('/clubpresident'), 3000)
                     this.status= true

                 }
                 else{
                   this.editmessage = 'Could not update club. try again.'
                   this.status = false
                 }
        }).catch((err)=>{
          this.editmessage = " Error creating it"
        })

    }
    }
})
</script>