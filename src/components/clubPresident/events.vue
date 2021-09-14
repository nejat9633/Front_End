<template>
   <v-container>

<v-dialog max-width="600px" v-model="dialog2">

<template v-slot:activator="{ on, attrs }" >

        <v-btn
          class="success mx-10 mt-10 pa-5"
          dark
          v-bind="attrs"
          v-on="on"
          flat
          large   
          >
        <v-icon class="pr-3">mdi-plus-circle</v-icon>
          New Event
        </v-btn>
   
      </template>

<v-card>
    <v-card-title> 
        <h2>Add a New Event</h2>
    </v-card-title>
      <v-alert 
      v-if="uploadEvent"
      border="left"
      class="pa-5  mx-4  grey"
      background-color="grey"
      colored-border
      color="red "
      elevation="2"
    >
<h3>{{uploadEvent}}</h3>
    </v-alert>
<v-divider></v-divider>

  <v-card-text>

  
   <v-form class="px-3" >
      

        <v-text-field  v-model="title" label="Title of the Event"
            clearable
             prepend-icon="mdi-transfer-right">
        </v-text-field>


  <v-file-input
    label="Image Input"
    filled
    v-model="file"
    prepend-icon="mdi-camera"
  ></v-file-input>

        <v-textarea
            v-model="body" 
            label="Enter the detail info of the event"
            clearable
            prepend-icon=" mdi-pencil"
        >
        </v-textarea>
        <v-btn flat class="success mx-0 mt-3" @click="addEvent()"> Post Event </v-btn>
         <v-btn flat class=" mx-2 mt-3"
                @click="dialog2 = false"
                outlined
              >Close</v-btn>
     </v-form>

    </v-card-text>  
  </v-card>
</v-dialog>

                 <div  class="pa-5   text-h4 dark" >
                    <span> Posted Events </span>
                </div>

     
<v-row >
    <v-alert 
      v-if="noEvent"
      border="left"
      class="pa-5  mx-4 text-h5 grey"
      background-color="grey"
      colored-border
      color="red "
      elevation="2"
    >
<h3>{{noEvent}}</h3>
    </v-alert>
<v-card v-for="(event, index) in response"
            :key="event"
    class=" ma-5"
     width="500"
    height="300"
    max-width="auto"
    outlined
  >
   <v-card-text>

  <v-row>
  <v-col cols="5">
   <v-img 
     :src="require(`../../assets/${event.file}`)" 
        contain
        alt="Image"
        height="200"
        />
    </v-col>
    
  <v-col cols="">
<h2 class="black--text">{{event.title}}</h2>

<v-row>
  <v-col cols="">
       <div class=" black--text "><br/> {{event.body}} <br/></div>
  </v-col>
  </v-row>
  
<v-card-actions>

<v-dialog max-width="600px" v-model="dialog1">

<template v-slot:activator="{ on, attrs }">

        <v-btn
          class="primary mr-1"
          v-bind="attrs"
          v-on="on"
          flat
          >
      EDIT
        </v-btn>
   
      </template>

<v-card>
    <v-card-title> 
        <h2>Edit the Event</h2>
    </v-card-title>
      <h5 >{{editmessage}}</h5>
<v-divider></v-divider>

  <v-card-text>
   <v-form class="px-3" >
     {{event._id}}
        <v-text-field  label="New Title"
            clearable
            v-model="edittitle"
             prepend-icon="mdi-transfer-right">
        </v-text-field>

  <v-file-input
    label="Image Input"
    filled
    v-model="editfile"
    prepend-icon="mdi-camera"
  ></v-file-input>

        <v-textarea
            v-model="editbody" 
            label="Enter the detail info of the event"
            clearable
            prepend-icon=" mdi-pencil"
        >
        </v-textarea>
        <v-btn flat class="success mx-0 mt-3" @click="editEvent(event._id, index)"> Edit Event </v-btn>
          <v-btn flat class=" mx-2 mt-3"
                @click="dialog1 = false"
                outlined
              >Close {{event._id}}</v-btn>
     </v-form>

    </v-card-text>  
  </v-card>
</v-dialog>

<v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="primary ml-1"
          v-bind="attrs"
          v-on="on" 
        >
         REMOVE
        </v-btn>
      </template>
      <v-card>
        
        <v-card-text> <br/> Are you sure you want to remove this event? </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false && removeEvent(event._id, index)"
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

 </v-col>
 </v-row>
 </v-card-text>

  </v-card>
</v-row>

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
        clubPres,
    },
    data() {
        return{
      overlay: false,
      title:'',
      body:'',
      file:'',
      alert: false,
      dialog: false,
      dialog1: false,
      dialog2: false,
      response:'',
      noEvent:'',
      message:'',
      editresponse:'',
      editEvent:'',
      editmessage:'',
      edittitle:'',
      editbody:'',
      editfile:'',
      uploadEvent:''
       
   }
        },
        methods:{
          addEvent(){
            let from = new FormData()
            from.append('title',this.title)
            from.append('body',this.body)
            from.append('file',this.file)

            axios.post(`${url}addClubEvent/${userId}` , from, {headers:{
          'Authorization': `Bearer ${token}`,
          'Content-Type':'multipart/form-data'
            }})
        .then((res)=>{
          if(res.data.status == 'failure'){
            this.message = res.data.message
             this.uploadEvent = "Could not appload Event."
            }
            else
            {
            this.uploadEvent = 'Event successfully posted.'
            this.response.append(res.data.result);
            }
         }).catch((err)=>{
           this.uploadEvent = 'Error occured while displaying'
         })
        },
         editEvent(id, index){
            let data = {
              title : this.edittitle,
              body : this.editbody,
              file: this.editfile
            }
            axios.post(`${url}editClubEvent/${userId}/${id}`, data, {headers:{
          'Authorization': `Bearer ${token}`
            }})
        .then((res)=>{
          if(res.data.status == 'failure'){
            this.edditmessage = res.data.message
             this.editEvent = "Could not update Event."
            }
            else
            {
            this.editresponse = res.data.result
            this.editmessage = 'Event successfully updated.'
            setTimeout( () => this.$router.push('/clubpresident'), 4000)
            }
         }).catch((err)=>{
           this.editnoEvent = 'Error occured while displaying'
         })
        },
        removeEvent(id, index){
           axios.delete(`${url}removeEvent/${id}`, {headers:{
          'Authorization': `Bearer ${token}`
            }})
        .then((res)=>{
          if(res.data.status == 'failure'){
            this.edditmessage = res.data.message
             this.editEvent = "Could not remove Event."
            }
            else
            {
            this.editresponse = res.data.result
            this.editmessage = 'Event successfully removed.'
            this.response.splice(index, 1);
            }
         }).catch((err)=>{
           this.editnoEvent = 'Error occured while displaying'
         })
        }
      },
        mounted(){
          axios.get(`${url}getClubEvent/${userId}` , {headers:{
          'Authorization': `Bearer ${token}`
        }})
        .then((res)=>{
          if(res.data.status == 'failure'){
            this.message = res.data.message
             this.noEvent = "There are no events organized by this club."
            }
          else if(res.data.Event.length == 0){
             this.noEvent = "There are no events organized by this club."

            }
          else  {
            this.response = res.data.Event
            }
          
         }).catch((err)=>{
           this.noEvent = 'Error occured while displaying'
         })
        }
})
</script>
