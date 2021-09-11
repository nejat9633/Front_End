<template>
    <v-container>
        <v-row>
                <div  class="pa-3  text-h5 dark" >
                    <span> Clubs in AASTU </span>
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
        max-width="300"
       min-height="300" 
      
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



<v-dialog max-width="600px">

<template v-slot:activator="{ on, attrs }">
<v-flex> 
    <v-btn
  color="pink"
  dark
   v-bind="attrs"
          v-on="on"
  class="ma-2"
  :style="{left: '50%', transform:'translateX(-50%)'}" 
  @click="apply()" > 
        apply
    </v-btn>
 
  </v-flex>
      </template>

<v-card>
    <v-card-title> 
        <h2>Add a New Question</h2>
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

</v-col>

</v-row>
 </v-container>

  </template>
  <page-header/>
   </v-container>
</template>

<script>
import pageHeader from './pageHeader.vue'
export default {
  components: { pageHeader },
   
data() { 
  return{
      overlay: false,
      alert: false,
       name:'tester',
       
        notice: [
          {
          name: "AASTU charity club",
          description: "  A vacation you will never forget!", 
          content: " sthwhere the qclubs are Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae odio consectetur quis necessitatibus dolores asperiores sint cum, at eum quisquam mollitia nisi aperiam autem, laborum doloribus aliquam praesentium aspernatur! Tempora.",
          image: require("../assets/notice1.jpg")
          },

          {
            name: "AASTU sth",
            description: "hello there",
            content: "lorem ipsum sth lorem ipsum sth lorem ipsum sth lorem ipsum sth lorem ipsum sth lorem ipsum sth lorem ipsum sth lorem ipsum sth ",
            image: require('../assets/notice1.jpg')
         },
         { 
            name: " AASTU Multimedia Club",
            description: "Tation you will never forget! ",
            content: " Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Pellentesque posuere. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.Phasellus nec sem in justo pellentesque facilisis. Phasellus magna. ",
            image: require("../assets/notice2.jpg")
         },
           { 
            name: " AASTU Innovation Club",
            description: "Travel to the best outdoor experi",
            content: " Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Pellentesque posuere. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.Phasellus nec sem in justo pellentesque facilisis. Phasellus magna. ",
            image: require("../assets/notice2.jpg")
         },
            ],    

  }
   
}
 
}
</script>