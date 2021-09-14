<template>
<v-container> 


<v-card   
    v-for="(aclub) in club" 
    :key="aclub"
    outlined
    class=" ma-5"
    height="450"
    max-width="auto"
  color="grey lighten-2"
    >
    <v-card-title > 
        <h2 align-center>{{aclub.name}}</h2>
    </v-card-title>

<v-divider></v-divider> 
<v-card-text>
<v-row>
<v-col cols="6">
<v-img :src= aclub.image 
      contain 
      class="pa-2"
      height="350">
</v-img>
</v-col>

<v-col>

<div class=" black--text font-weight-medium" >{{aclub.description}}</div>
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

<v-divider></v-divider>

  <v-card-text>

   <v-form class="px-3" >
      

        <v-text-field  label="Title of the Club"
            clearable
             prepend-icon="mdi-transfer-right">
        </v-text-field>

         <v-text-field  label="Description of the Club"
            clearable
             prepend-icon="mdi-transfer-right">
        </v-text-field>

  <v-file-input
    label="Image Input"
    filled
    prepend-icon="mdi-camera"
  >
  </v-file-input>

        <v-textarea
            v-model="content" 
            label="Enter the detail info of the club"
            clearable
            prepend-icon=" mdi-pencil"
        >
        </v-textarea>
        <v-btn flat class="success mx-0 mt-3" @click="submit()"> Edit Club </v-btn>
     </v-form>

    </v-card-text>  
  </v-card>
</v-dialog>

</v-card-actions>

</v-col>
</v-row>
</v-card-text>  
</v-card>

  
  <!-- <v-form class="px-3" >
      

        <v-text-field  
            label="Title of the Club"
            clearable
            prepend-icon="mdi-transfer-right">
        </v-text-field>

         <v-text-field  label="Description of the Club"
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
            label="Enter the detail info of the club"
            clearable
            prepend-icon=" mdi-pencil"
        >
        </v-textarea>
        <v-btn flat class="success mx-0 mt-3" @click="submit()"> Add Club </v-btn>
     </v-form>
-->
   

<!--
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
          New Club
        </v-btn>
   
      </template>

<v-card>
    <v-card-title> 
        <h2>Add a New Club</h2>
    </v-card-title>

<v-divider></v-divider>

  <v-card-text>

  
   <v-form class="px-3" >
      

        <v-text-field  label="Title of the Club"
            clearable
             prepend-icon="mdi-transfer-right">
        </v-text-field>

         <v-text-field  label="Description of the Club"
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
            label="Enter the detail info of the club"
            clearable
            prepend-icon=" mdi-pencil"
        >
        </v-textarea>
        <v-btn flat class="success mx-0 mt-3" @click="submit()"> Add Club </v-btn>
     </v-form>

    </v-card-text>  
  </v-card>
</v-dialog>


  <v-container>    
    <template>
      <v-container>
         <v-row>
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
      height="350" 
       max-height="450"
       >

        <v-img  :src="note.image" 
    
        height="200"
         contain ></v-img>

        <v-card-text>
          <h2 class="text-h6 primary--text">
           {{note.name}}
          </h2>

          {{note.description}}  </v-card-text>

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

     {{note.content}}
    </v-alert>
          </div>
          
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
 <v-flex > 
 <div style="text-align: center;">
   
<v-dialog max-width="600px">

<template v-slot:activator="{ on, attrs }">

        <v-btn
         color="pink"
          class="ma-2"
          dark
          v-bind="attrs"
          v-on="on"
          flat
             
          >
         Edit
        </v-btn>
   
      </template>

<v-card>
    <v-card-title> 
        <h2>Edit Club</h2>
    </v-card-title>

<v-divider></v-divider>

  <v-card-text>

  
   <v-form class="px-3" >
      

        <v-text-field  label="Title of the Club"
            clearable
             prepend-icon="mdi-transfer-right">
        </v-text-field>

         <v-text-field  label="Description of the Club"
            clearable
             prepend-icon="mdi-transfer-right">

        </v-text-field>

  <v-file-input
    label=" Image Input"
    filled
    prepend-icon="mdi-camera"
  ></v-file-input>

        <v-textarea
            v-model="content" 
            label="Enter the detail info of the club"
            clearable
            prepend-icon=" mdi-pencil"
        >
         </v-textarea>
        <v-btn flat class="success mx-0 mt-3" @click="submit()"> Edit Club </v-btn>
     </v-form>

  </v-card-text>  

</v-card>

</v-dialog>



    
 <v-btn
  color="pink"
  dark
  class="ma-2"
    > 
        Delete
    </v-btn>
 </div>
  </v-flex>


</v-col>
</v-row>
 </v-container>

  </template>

   </v-container>

-->

<clubPres/>
</v-container>
</template>


<script>
import clubPres from '@/components/Club President/clubPres.vue'

export default ({
   components: {
        clubPres,
    },


data() { 
  return{

      club: [
      {
        name: "AASTU charity club",
        description: "sthwhere the qclubs are Loremspernatur! Tempora.",
        image: require("@/assets/notice1.jpg"),

      }
      ]

   /**   overlay: false,
      alert: false,
       name:'Home',
        notice: [
          {
          name: "AASTU charity club",
          description: " Travel to the best outdoor orget!", 
          content: " sthwhere the qclubs are Lorendae odio consectetur quis necessitatibus dolores asperiores sint cum, at eum quisquam mollitia nisi aperiam autem, laborum doloribus aliquam praesentium aspernatur! Tempora.",
          image: require("@/assets/notice1.jpg")
          },

          {
            name: "AASTU sth",
            description: "hello there",
            content: "lorem ipsum sth lorem ipsum sth loreorem ipsum sth lorem ipsum sth ",
            image: require('@/assets/notice1.jpg')
         },
         { 
            name: " AASTU Free Tutor",
            description: "Travel to thetion you wilet! ",
            content: " Phasellus tempus. Fusce ac vestibulum et, tempor auctor, justo. Pellentesque posuere. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.Phasellus nec sem in justo pellentesque facilisis. Phasellus magna. ",
            image: require("@/assets/notice2.jpg")
         },
           { 
            name: " AASTU Free Tutor for 2nd year ",
            description: "Travel to the best outdoor n planet ",
            content: " Phasellus tempus. Fusce ac felis sit amet ligula pharetravestibulum et, tempor auctor, justo. Pellentesque posuere. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.Phasellus nec sem in justo pellentesque facilisis. Phasellus magna. ",
            image: require("@/assets/notice2.jpg")
         },
         
            ],    
 */
  }
   
}

})
</script>