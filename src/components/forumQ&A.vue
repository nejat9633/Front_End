<template>
    <v-container>
        <v-card flat class="pa-5 my-3" color="grey lighten-4" v-for="question in questionss" v-bind:key="question">
    <v-layout >
      <v-flex >
      <v-avatar >
          <v-img :src="require('../../assets/avatar_1.png')" /> 
         <!--    <v-img :src="require(person.avatar)" />    -->
      </v-avatar>
       <div class="caption black--text">{{question.title}}</div>
        <div> {{question.description}} </div>

        <v-card-actions class="pa-4 " flat>

      <v-tooltip bottom >
      <template v-slot:activator="{ on, attrs }">
        <v-btn class=" pa-3 mx-1" 
        color="blue lighten-4"  
        @click="view"
          v-bind="attrs"
          v-on="on"
        > <v-icon class="fa fa-eye">mdi-eye</v-icon></v-btn>
      </template>
      <span>View Answers</span>
      </v-tooltip>

        <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="fa fa-pencil success pa-3 mx-1"
         @click="edit()" 
          v-bind="attrs"
          v-on="on"><v-icon class="fa fa-pencil-alt" >mdi-pencil</v-icon></v-btn>
     </template>
      <span>Edit Question</span>
      </v-tooltip>

     <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class=" pa-3 mx-1" 
        color="red lighten-1" 
        @click="erase" 
          v-bind="attrs"
          v-on="on"><v-icon class="fa fa-trash-alt">mdi-delete</v-icon></v-btn>
        </template>
      <span>Delete Question</span>
      </v-tooltip>

        </v-card-actions>

      </v-flex>
    </v-layout>

</v-card>

    </v-container>
</template>
<script>
export default {
    props:['qID'],
    


}
</script>