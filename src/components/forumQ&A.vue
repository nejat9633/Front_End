<template>
  <v-container>
    <v-card flat class="pa-5 my-3" color="grey lighten-4">
      <v-layout>
        <v-flex>
          <v-avatar>
            <v-img :src="require('../assets/avatar_1.png')" /> 
            <!--    <v-img :src="require(person.avatar)" />    -->
          </v-avatar>
          <span>{{qOwner}}</span>
          <div class="caption black--text">{{ question.title }}</div>
          <div>{{ question.description }}</div>

          <v-card-actions class="pa-4 " flat>
            <v-card flat color="grey lighten-3">
              <v-card-title>
                <h2>Answers</h2>
              </v-card-title>

              <v-divider></v-divider>

              <v-card-text>
                <v-row v-for="answer in answers" :key="answer">
                
          <v-avatar size="30">
            <v-img :src="require('../assets/avatar_1.png')" /> 
            <!--    <v-img :src="require(person.avatar)" />    -->
          </v-avatar>
 

                  <div class="py-4 mx-2" id="div">
                    <p> {{ answer.description }}</p>
                    <v-btn text color="teal accent-4">
                      {{answer.rates }} likes
                    </v-btn>
                  </div>
                  
                    
                </v-row>
                <v-row v-if="answerMessage">
                  <p>
                    {{ answerMessage }}
                  </p>
                </v-row>

                <v-row justify="center">
                  <v-dialog v-model="dialog" persistent max-width="290">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn class="py-4 black--text"  outlined dark v-bind="attrs" v-on="on">
                        Add Answer
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title class="text-h5">
                        Add your Answers
                      </v-card-title>
                      <h3 class="mx-3 red--text" >{{alert}}</h3>
                      <h3 class="mx-3 red--text" >{{message}}</h3>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-form class="py-3">
                          <v-textarea
                            v-model="description"
                            label="Enter your Answer"
                            clearable
                            prepend-icon=" fa fa-pencil"
                          >
                          </v-textarea>

                          <v-btn
                            flat
                            outlined
                            class=" px-2 mx-4 mt-3"
                            @click="giveAnswer(question._id)"
                          >
                            Add Answer
                          </v-btn>
                          <v-btn
                            flat
                            outlined
                            class=" px-2 mx-0 mt-3"
                            @click="dialog = false"
                          >
                            Done
                          </v-btn>
                        </v-form>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-row>
              </v-card-text>
            </v-card>
          </v-card-actions>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>
<script>
import axios from "axios";
const qID = localStorage.getItem('qID');
const url = 'http://localhost:8888/api/';
const token = localStorage.getItem('tok')
const userId = localStorage.getItem('user');
export default {
  props: ["qID"],
  
  data: () => {
    return {
      message: "",
      answerMessage: "",
      dialog: false,
      dialog2: false,
      description: "",
      response: "",
      qOwner:'',
      alert:'',
      question: "",
      users:[],
      answers: [],
      item: ["programming", "Graphics", "Architecture"],
    };
  },
  
  mounted() {
    console.log(qID);
  
      axios
      .get(
        `${url}getQuestion/${qID}`
        // {  headers: { Authorization: `Bearer ${token}` },
      )
      .then((res) => {
        if (res.data.status == "success") {
          this.question = res.data.myQuestions;
          this.qOwner = res.data.user.username
          this.response = res.data.myQuestions;
        } else {
          this.answerMessage = res.data.message;
        }
      })
      .catch((err) => {
        console.log(err);
      });
//For the answers of the question
      axios
      .get(
        `${url}getallAnswers/${qID}`
        // {  headers: { Authorization: `Bearer ${token}` },
      )
      .then((res) => {
        if (res.data.status == "success") {
          this.answers = res.data.reason;
          console.log("Q id "+ qid);
          this.response = res.data.reason;
          this.users = res.data.user
          
        } else {
          this.answerMessage = res.data.message;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods:{
    giveAnswer(qID) {
    if (!token) {
        this.alert = "You need to login first";
        setTimeout(() => this.$router.push("/login"), 4000);
      } else {
        let data = {
          qID: qID,
          description: this.description,
        }
        axios
          .post(`${url}giveAnswer/${userId}`, data)
          .then((res) => {
            this.answers.push(res.data.reason);
          })
          .catch((err) => {
            this.answerMessage = "error loading answers";
          });
      }
   }
  }
}
</script>

<style scoped>
#div{
  border-radius: 5%;
}
</style>