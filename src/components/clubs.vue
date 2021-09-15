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
     :src= club.image
        width="150"
        max-height="100"
        contain
      dark
        />
    </v-col>
    
  <v-col cols="7">
<h2 class="black--text">{{club.name}}</h2>

        <div class=" black--text">
        {{club.description}}}
        </div>

  </v-col>
 </v-row>
<v-row>
    <v-col cols="3">
   <div>
    <v-responsive class=" pl-auto">
      <v-avatar size="70">
          <v-img :src= club.avatar /> 
      </v-avatar>
    </v-responsive>
   
   </div>
  </v-col>
  <v-col cols="">
       <div class=" black--text"> Club President: {{club.President}}</div>
        <div>{{club.Psays}} </div>

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
import pageHeader from './pageHeader.vue'
export default {
  components: { pageHeader },
   
data() { 
  return{
      overlay: false,
      alert: false,
       name:'tester',
       
        clubs: [
          {
          name: "AASTU charity club",
          description: " sthwhere the qclubs are Loremspernatur! Tempora.",
          image: require("../assets/notice1.jpg"),
          president: 'someone',
          Psays: "  A vacation you will never forget!", 
         avatar: require('../assets/avatar_1.png'),
          },

          {
            name: "AASTU sth",
            description: "lorem ipsum sth lorem ipsum sth lorem ipsuorem ipsum sth lorem ipsum  ipsum sth ",
            image: require('../assets/notice1.jpg'),
            president: "somebody",
            Psays: "hello there",
            avatar:  require('../assets/avatar_2.png'),
         },
         { 
            name: " AASTU Multimedia Club",
            description: "Tation you will never forget! ",
            image: require('../assets/notice2.jpg'),
            president: "somebody",
            Psays: "hello there",
            avatar:  require('../assets/avatar_2.png'),
         }, { 
            name: " AASTU Multimedia Club",
            description: "Tation you will never forget! ",
            image: require('../assets/notice2.jpg'),
            president: "somebody",
            Psays: "hello there",
            avatar:  require('../assets/avatar_2.png'),
         }, { 
            name: " AASTU Multimedia Club",
            description: "Tation you will never forget! ",
            image: require('../assets/notice2.jpg'),
            president: "somebody",
            Psays: "hello there",
            avatar:  require('../assets/avatar_2.png'),
         },
           { 
            name: " AASTU Innovation Club",
            description: "Travel to the best outdoor experi",
             image: require('../assets/notice2.jpg'),
            president: "somebody",
            Psays: "hello there",
            avatar:  require('../assets/avatar_1.png'),
         },
            ],    

  }
   
}
 
}
</script>