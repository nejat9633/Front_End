<template>
<v-flex>
     <v-bottom-navigation
    :value="value"
    color="teal"
    grow
  >
        <v-select
          :items="items"
          label="Category"
          max-width="500"
           class="ma-1"
        ></v-select>
    

    <v-btn max-width="500" min-width >
      <span>What do you want to ask?</span>

     
    </v-btn>

     <v-text-field
            v-model="search"

            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search"
            max-width="500"
            class="ma-1"
          ></v-text-field>
  </v-bottom-navigation>

 <div  class="pa-3 headline text-h5 dark" >
      <span>Highly Rated Questions</span>
</div>


<v-container >
<v-flex>
<v-row>
<v-col cols="">
<v-card flat class="pa-5 my-3"  width="800" color="grey lighten-4" v-for="question in questions" :key="question.id">
    <v-layout row wrap :class="` pa-3 question ${question.id}`">
      <v-flex >
      <v-avatar >
          <v-img :src="require('../assets/avatar_1.png')" /> 
         <!--    <v-img :src="require(person.avatar)" />    -->
      </v-avatar>
       <div class="caption black--text">{{question.username}}</div>
        <div> {{question.content}} </div>

        <v-card-actions class="pa-4 " flat>

        <v-btn class=" pa-3 mx-1" 
        color="blue lighten-4"  
        @click="view()"
        transparent      
        >
        {{3}} <!--put the number of answers given using a coounter of the answers-->
         answers
         </v-btn>


        <v-btn class="pa-3 mx-1"
        color="blue lighten-4" 
         @click="countLike(question)" 
         >
          <v-icon class="mr-3" >mdi-thumb-up</v-icon>
          {{question.score}}
          Like
          </v-btn>
    
        <v-btn class="pa-3 mx-1" 
        color="red lighten-1" 
        @click="report()" 
         >
          <v-icon class="mr-3">mdi-alert-circle</v-icon>
          Report
          </v-btn>

        </v-card-actions>

      </v-flex>
    </v-layout>

</v-card>
</v-col>
<v-col>
<v-card flat class="pa-5 my-3" color="grey lighten-4"  left>
<span>
you can post any question in diffrent categories. 
</span>
    <v-chip-group
            active-class="primary--text"
            column
            
          >
            <v-chip
              v-for="item in items"
              :key="item"
              class="ma-2"   
              color="deep-purple accent-4"
              outlined
            >
              {{ item }}
            </v-chip>
          </v-chip-group>
</v-card>
</v-col>
</v-row>
</v-flex>
</v-container>



</v-flex>
</template>

<script>

export default {
    data: () => ({
        
        question: '' ,
     
        questions: [
          {
           id: "1", username: "someone", content: " sthwhere the questions are Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae odio consectetur quis necessitatibus dolores asperiores sint cum, at eum quisquam mollitia nisi aperiam autem, laborum doloribus aliquam praesentium aspernatur! Tempora."
        , score: 0,  },
           {
           id: "2", username: "someone",avatar: '../assets/avatar_2.png', content: " 2 question sthwhere the questions are Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae odio consectetur quis necessitatibus dolores asperiores sint cum, at eum quisquam mollitia nisi aperiam autem, laborum doloribus aliquam praesentium aspernatur! Tempora."
          , score:0},
         ],    
       
      items: ['Programming', 
      'Electrical',
       'Acrhitecture', 
       'Technology', 
       'Graphics', 
       'Math', 
       'Physics'],
  
   }),

methods: {

    countLike(question)
      {
      question.score ++
      }

}

  }

</script>
