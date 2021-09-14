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
          New Event/Information
        </v-btn>
      </template>

<v-card>
    <v-card-title> 
        <h2>Add a New Event/Information</h2>
    </v-card-title>

<v-divider></v-divider>

  <v-card-text>
   <v-form class="px-3" >

        <v-text-field  label="Title of the Event"
            clearable
             prepend-icon="mdi-transfer-right">
        </v-text-field>

         <v-text-field  label="Description of the Event"
            clearable
             prepend-icon="mdi-transfer-right">
        </v-text-field>

  <v-file-input
    label="Image Input"
    filled
    prepend-icon="mdi-camera"
  ></v-file-input>

        <v-textarea
            v-model="content" 
            label="Enter the detail info of the event"
            clearable
            prepend-icon=" mdi-pencil"
        >
        </v-textarea>
        <v-btn flat class="success mx-0 mt-3" @click="submit()"> Post Event/Information </v-btn>
         <v-btn flat class=" mx-2 mt-3"
                @click="dialog2 = false"
                outlined
              >Close</v-btn>
     </v-form>

    </v-card-text>  
  </v-card>

</v-dialog>
        <div  class="pa-5   text-h5 dark" >
        <span> Posted Events/Informations </span>
        </div>

<v-row >

<v-card v-for="(event) in events"
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
          :src= event.image  
          contain
          height="200"
        />
      </v-col>
    
  <v-col cols="">
    <h2 class="black--text">{{event.name}}</h2>
    <h3 class=" black--text"> {{event.description}} </h3>

  <v-row>
  <v-col cols="">
       <div class=" black--text "><br/> {{event.content}} <br/></div>
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
        <h2>Edit the Event/Information</h2>
    </v-card-title>

<v-divider></v-divider>

  <v-card-text>
   <v-form class="px-3" >
        <v-text-field  label="Title of the Event"
            clearable
             prepend-icon="mdi-transfer-right">
        </v-text-field>

         <v-text-field  label="Description of the Event"
            clearable
             prepend-icon="mdi-transfer-right">
        </v-text-field>

  <v-file-input
    label="Image Input"
    filled
    prepend-icon="mdi-camera"
  ></v-file-input>

        <v-textarea
            v-model="content" 
            label="Enter the detail info of the event"
            clearable
            prepend-icon=" mdi-pencil"
        >
        </v-textarea>
        <v-btn flat class="success mx-0 mt-3" @click="submit()"> Edit Event/Information </v-btn>
          <v-btn flat class=" mx-2 mt-3"
                @click="dialog1 = false"
                outlined
              > Close </v-btn>
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

 </v-col>
 </v-row>
 </v-card-text>

  </v-card>
</v-row>

    <infoPage/>
    </v-container>

</template>


<script>
import infoPage from '@/components/infoAdmin/infoPage.vue'

export default ({
   components: {
        infoPage,
    },
    data() {
        return{
      overlay: false,
      alert: false,
      dialog: false,
      dialog1: false,
      dialog2: false,
      events:  [
            {
              
          name: "sth title",
          description: " Travel to the best outdoor orget!", 
          content: " sthwhere the qclubs are Lorendae odio consectetur quis necessitatibus dolores asperiores sint cum, at eum quisquam mollitia nisi aperiam autem, laborum doloribus aliquam praesentium aspernatur! Tempora.",
          image: require("@/assets/notice1.jpg")
            }, {
              
          name: "sth title",
          description: " Travel to the best outdoor orget!", 
          content: " sthwhere the qclubs are Lorendae odio consectetur quis necessitatibus dolores asperiores sint cum, at eum quisquam mollitia nisi aperiam autem, laborum doloribus aliquam praesentium aspernatur! Tempora.",
          image: require("@/assets/notice1.jpg")
            },
        ] 
   
   }
        }
})
</script>
