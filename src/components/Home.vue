<template>
    <v-container>
        <v-row>
                <div  class="pa-3  text-h5 dark" >
                    <span> Latest Events </span>
                </div>
        </v-row>
<template >

 <v-container   >
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
        max-width="344"
       min-height="450" 
       max-height="650"
       >

        <v-img  :src="note.image" 
    
        height="350"
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
</v-col>
</v-row>
 </v-container>

  </template>
  <page-header/>
   </v-container>
</template>

<script>

import PageHeader from './pageHeader.vue'
export default {
   components: {PageHeader},
data() { 
  return{
      overlay: false,
      alert: false,
       name:'Home',
        notice: [
          {
          name: "AASTU charity club",
          description: " Travel to the best outdoor orget!", 
          content: " sthwhere the qclubs are Lorendae odio consectetur quis necessitatibus dolores asperiores sint cum, at eum quisquam mollitia nisi aperiam autem, laborum doloribus aliquam praesentium aspernatur! Tempora.",
          image: require("../assets/notice1.jpg")
          },

          {
            name: "AASTU sth",
            description: "hello there",
            content: "lorem ipsum sth lorem ipsum sth loreorem ipsum sth lorem ipsum sth ",
            image: require('../assets/notice1.jpg')
         },
         { 
            name: " AASTU Free Tutor",
            description: "Travel to thetion you wilet! ",
            content: " Phasellus tempus. Fusce ac vestibulum et, tempor auctor, justo. Pellentesque posuere. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.Phasellus nec sem in justo pellentesque facilisis. Phasellus magna. ",
            image: require("../assets/notice2.jpg")
         },
           { 
            name: " AASTU Free Tutor for 2nd year ",
            description: "Travel to the best outdoor n planet ",
            content: " Phasellus tempus. Fusce ac felis sit amet ligula pharetravestibulum et, tempor auctor, justo. Pellentesque posuere. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.Phasellus nec sem in justo pellentesque facilisis. Phasellus magna. ",
            image: require("../assets/notice2.jpg")
         },
         
            ],    

  }
   
}
 
}
</script>