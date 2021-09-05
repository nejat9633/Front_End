<template>
<div>
<v-container  class="my-5">  

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
          New Question
        </v-btn>
   
      </template>

<v-card>
    <v-card-title> 
        <h2>Add a New Question</h2>
    </v-card-title>

<v-divider></v-divider>

  <v-card-text>

   <v-form class="px-3" >
     <v-select
            v-model="title" 
            :items="titles"
            label="Title of your question."
            clearable
            require
            prepend-icon=" mdi-pencil"
        >
     </v-select>
        <v-textarea
            v-model="description" 
            label="Enter your question"
            clearable
            prepend-icon=" mdi-pencil"
        >
      
        </v-textarea>
        <v-btn flat class="success mx-0 mt-3" @click="submit"> Add Question </v-btn>
     </v-form>

  </v-card-text>  

</v-card>

</v-dialog>
</v-container>
<v-container v-if="status">
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
        > <v-icon >mdi-eye</v-icon></v-btn>
      </template>
      <span>View Answers</span>
      </v-tooltip>

        <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="success pa-3 mx-1"
         @click="edit" 
          v-bind="attrs"
          v-on="on"><v-icon >mdi-pencil</v-icon></v-btn>
     </template>
      <span>Edit Question</span>
      </v-tooltip>

     <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="pa-3 mx-1" 
        color="red lighten-1" 
        @click="erase" 
          v-bind="attrs"
          v-on="on"><v-icon >mdi-delete</v-icon></v-btn>
        </template>
      <span>Delete Question</span>
      </v-tooltip>

        </v-card-actions>

      </v-flex>
    </v-layout>

</v-card>

</v-container>
<v-container v-if="!status">
   <v-flex>
     <div>
       <h5>{{message}}</h5>
     </div>
   </v-flex>
</v-container>




<student_page/>

</div>
</template>

<script>

import student_page from "@/components/Student/student_page.vue"
import axios from 'axios'
const url = 'http://localhost:8888/api/'
const userId = localStorage.getItem('user');
const token = localStorage.getItem('tok');
export default {
 
    data()
     {
     return { 
        question: '' ,
         message: '',
         status: true, 
         questionss:'',
         titles:['programming', 'Graphics', 'Math', 'vocabulary','Physics', 'General IT' ],
        questions: [
          {
           id: "1", username: "someone", content: " sthwhere the questions are Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae odio consectetur quis necessitatibus dolores asperiores sint cum, at eum quisquam mollitia nisi aperiam autem, laborum doloribus aliquam praesentium aspernatur! Tempora."
          },
           {
           id: "2", username: "someone",avatar: '../../assets/avatar_2.png', content: " 2 question sthwhere the questions are Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae odio consectetur quis necessitatibus dolores asperiores sint cum, at eum quisquam mollitia nisi aperiam autem, laborum doloribus aliquam praesentium aspernatur! Tempora."
          },
        ],    
       }
    },
      components:
   {
      student_page
   },
   mounted(){
        console.log(this.question)
        axios.get(`${url}myQuestions/${userId}`, 
                  { headers: {'Authorization': `Bearer ${token}`}})
             .then((res) => {
               
                 if(res.data.status == 'failure'){
                   this.message = res.data.message
                   this.status = false
                 }
                 else{
                     this.questionss = res.data.questions
                     this.status= true
                     console.log("true" + res.data)
                 }
             })
             .catch((err)=>{
               this.message = "An error has been occured from server."
             })
   },
methods: {

    submit()
    {

     
    },

    view()
    {

    },

    erase()
    {

    },

    edit( )
    {

    },


}

}
</script>
