<template>
<div>
<v-container  class="my-5">  

<v-dialog v-model="dialog" max-width="600px">

<template v-slot:activator="{ on, attrs }">

        <v-btn
          class="success mx-10 mt-10 pa-5"
          dark
          v-bind="attrs"
          v-on="on"
          flat
          large   
          >
        <v-icon class="fa fa-plus pr-3">mdi-plus-circle</v-icon>
          New Question
        </v-btn>
   
      </template>

<v-card>
    <v-card-title> 
        <h2>Add a New Question</h2>
    </v-card-title>
   <h3 class="text--green">{{message_for_new}}</h3>
<v-divider></v-divider>

  <v-card-text>

   <v-form class="px-3" >
     <v-select
            v-model="catagory" 
            :items="titles"
            label="Title of your question."
            clearable
            require
            prepend-icon=" mdi-pencil"
        >
     </v-select>
             <v-text-field
            v-model="title" 
            label="Title of your question"
            clearable
            prepend-icon=" mdi-pencil"
        >
      
             </v-text-field>
        <v-textarea
            v-model="description" 
            label="Enter your question"
            clearable
            prepend-icon=" mdi-pencil"
        >
      
        </v-textarea>

        <v-btn flat class="success px-2 mx-0 mt-3" @click="submit"> Add Question </v-btn>
        <v-btn flat class="success px-2 mx-0 mt-3" @click="dialog = false"> Done </v-btn>
        <v-spacer></v-spacer>
        <v-alert
        v-model="alert"
         border='left'
         colored-border
         elevation="2"
         color="light-blue accent-4"
         >
          {{message_for_new}}
        </v-alert>
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
        @click="view(question._id)"
          v-bind="attrs"
          v-on="on"
        > <v-icon class="fa fa-eye">mdi-eye</v-icon></v-btn>
      </template>
      <span>View Answers</span>
      </v-tooltip>

        <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="fa fa-pencil success pa-3 mx-1"
         @click="edit(question._id)" 
          v-bind="attrs"
          v-on="on"><v-icon class="fa fa-pencil-alt" >mdi-pencil</v-icon></v-btn>
     </template>
      <span>Edit Question</span>
      </v-tooltip>

     <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class=" pa-3 mx-1" 
        color="red lighten-1" 
        @click="erase(question._id)" 
          v-bind="attrs"
          v-on="on"><v-icon class="fa fa-trash-alt">mdi-delete</v-icon></v-btn>
        </template>
      <span>Delete Question</span>
      </v-tooltip>
       
        </v-card-actions>

      </v-flex>
    </v-layout>

</v-card>
        <v-card >
           <div v-for="answer in answers" :key="answer">
             <p>{{answer.description}}</p>
           </div>
           <div>{{message_for_new}}</div>
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
//import ApiService from '../../ApiServices'
const url = 'http://localhost:8888/api/'
const userId = localStorage.getItem('user');
const token = localStorage.getItem('tok');
export default {
 
    data()
     {
     return { 
        question: '' ,
        dialog: false,
        alert:false,
        answers:'',
         message_for_new: '',
         message: '',
         description:'',
         catagory:'',
         title: '',
         status: true, 
         questionss:'',
         titles:['programming', 'Graphics', 'Math', 'vocabulary','Physics', 'General IT' ]    
       }
    },
      components:
   {
      student_page
   },
   beforeMount(){
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
   mounted(){
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

    submit(QId)
    {
      let data ={
        title: this.title,
        description: this.description,
        catagory: this.catagory
      }
      this.status = true;
      return axios.post(`${url}postQuestion/${userId}`, data,
                  {headers: {'Authorization': `Bearer ${token}`}}
                  )
                  .then((res) => {
                    this.questionss.push(res.data.createdQ)
                    this.message_for_new = "Question Added successfuly"
                    if(res.data.status == 'success'){
                      this.$store.dispatch('Qdata', res.data.result)
                                .then((res)=>{

                                  this.alert = true
                                })
                                .catch((err)=>{
                                  this.message_for_new = "Server Error"
                                })

                    }
                    else{
                      this.message_for_new = res.data.message 
                    }
                  })
     
    },

    view(QId)
    {
      axios.get(`${url}getallAnswers/${QId}`)
          .then((res)=>{
            if(res.data.status == 'success'){
            this.answers = res.data.reason
            }
            else{
            this.message_for_new = res.data.message
            }
      })
    },

    erase(qID)
    {
     return axios.delete(`${url}removeQuestion/${qID}`, {headers: {
        'Authorization': `Bearer ${token}`
    }}).then((res)=>{
      this.answers = this.answers.filter((value, index, arr)=>{
           return value._id != res.data.result._id
      })
      this.message_for_new = 'Question Deleted successfuly successfuly'
      vm.$forceUpdate();
     // this.$router.push('/')
    }).catch((err)=>{
      this.message_for_new = "Error Occured"
    })
    },
    edit( )
    {
      let data = {
        title : this.title,
        description: this.description,
        catagory: this.catagory
      }
return axios.put(`${url}editQuestion/${this.$store.QId}`,data, {headers: {
        'Authorization': `Bearer ${token}`
    }}).then((res)=>{
      this.questionss.push.updated
      this.message_for_new = 'Question Edited successfuly'
    }).catch((err)=>{
      this.message_for_new = "Error Occured"
    })
                  
                
    },


}

}
</script>
