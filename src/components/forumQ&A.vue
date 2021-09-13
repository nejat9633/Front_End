<template>
  <v-container>
    <v-card flat class="pa-5 my-3" color="grey lighten-4">
      <v-layout>
        <v-flex>
          <v-sheet color="cyan" elevation="3" class="pa-4" tile max-height="auto" max-width="400px">
            <v-avatar>
              <v-img :src="require('../assets/avatar_1.png')" />
              <!--    <v-img :src="require(person.avatar)" />    -->
            </v-avatar>
            <span>{{ qOwner }}</span>
            <div class="caption black--text">{{ question.title }}</div>
            <div>{{ question.description }}</div>
          </v-sheet>

          <v-card-actions class="pa-4 " flat>
            <v-card flat color="grey lighten-3" max-width="400px">
              <v-card-title>
                <h2>Answers</h2>
                <v-alert class="mx-3"
                  ><h4>{{ answerMessage }}</h4></v-alert
                >
              </v-card-title>

              <v-divider></v-divider>

              <v-card-text>
                <v-row v-for="answer in answers" :key="answer">
                  <v-avatar size="30">
                    <v-img :src="require('../assets/avatar_1.png')" />
                    <!--    <v-img :src="require(person.avatar)" />    -->
                  </v-avatar>

                  <div class="py-4 mx-2" id="div">
                    <p>{{ answer.description }}</p>
                    <v-btn text color="teal accent-4">
                      {{ answer.rates }} likes
                    </v-btn>
                  </div>
                </v-row>

                <v-row class="py-4" justify="center">
                  <h3>{{ answerMessage }}</h3>
                </v-row>
                <v-row justify="center">
                  <v-dialog v-model="dialog" persistent max-width="400">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        class="py-4 black--text"
                        outlined
                        dark
                        @click="checkLogin()"
                        v-bind="attrs"
                        v-on="on"
                      >
                        Add Answer
                      </v-btn>
                    </template>
                    <v-card max-width="600px" justify="center">
                      <v-card-title justify="center" class="text-h5">
                        Add your Answers
                      </v-card-title>
                      <h3 class="mx-3 red--text">Warning: {{ alert }}</h3>
                      <h3 class="mx-3 red--text">{{ message }}</h3>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-form
                          class="py-2 mx-1"
                          justify="center"
                          max-width="400px"
                        >
                          <v-textarea
                            v-model="description"
                            label="Enter your Answer"
                            clearable
                            full-width
                            prepend-icon="fa fa-pencil"
                          >
                          </v-textarea>

                          <v-btn
                            flat
                            outlined
                            class=" px-2 mx-4 mt-3"
                            @click="giveAnswer(question._id)"
                          >
                            post
                          </v-btn>
                          <v-btn
                            flat
                            outlined
                            class=" px-2 mx-0 mt-3"
                            @click="dialog = false"
                          >
                            cancel
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
      kjfkdjfkjdfkj
      {{  }}
    </v-card>
  </v-container>
</template>
<script>
import axios from "axios";
const qID = localStorage.getItem("qID");
const url = "http://localhost:8888/api/";
const token = localStorage.getItem("tok");
const userId = localStorage.getItem("user");
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
      qOwner: "",
      alert: '',
      question: "",
      users: [],
      answers: [],
      item: ["programming", "Graphics", "Architecture"],
    };
  },
  beforeMount() {
    axios
      .get(
        `${url}getQuestion/${localStorage.getItem("qID")}`
        // {  headers: { Authorization: `Bearer ${token}` },
      )
      .then((res) => {
        if (res.data.status == "success") {
          this.question = res.data.myQuestions;
          this.qOwner = res.data.user.username;
          this.response = res.data.myQuestions;
        } else {
          this.message = res.data.message;
        }
      })
      .catch((err) => {
        console.log(err);
      });

    //For the answers of the question
    axios
      .get(
        `${url}getallAnswers/${localStorage.getItem("qID")}`
        // {  headers: { Authorization: `Bearer ${token}` },
      )
      .then((res) => {
        if (res.data.status == "success") {
          this.answers = res.data.reason;
          console.log("Q id " + qid);
          this.response = res.data.reason;
          this.users = res.data.user;
        } else {
          this.answerMessage = "No Answer was given yet.";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  /*mounted() {
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
  },*/
  methods: {
    checkLogin(){
      if (localStorage.getItem("tok") == null  ) {
        this.alert = "You need to login first.";
        setTimeout(() => this.$router.push("/login"), 4000);
      }
      if(localStorage.getItem('role') != 'student'){
        this.alert = "Sorry, You are not authorized for this Action.";
        setTimeout(() => this.$router.push("/forum"), 4000); 
      }
    },
    giveAnswer() {
      if (localStorage.getItem("tok") == null) {
        this.alert = "You need to login first";
        setTimeout(() => this.$router.push("/login"), 4000);
      } else {
        let data = {
          qID: localStorage.getItem("qID"),
          description: this.description,
        };
        return axios
          .post(`${url}giveAnswer/${localStorage.getItem("user")}`, data, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("tok").toString()}`,
            },
          })
          .then((res) => {
            if (res.data.status == 'success'){
            this.answers.push(res.data.reason);
            this.answerMessage = " you have successfuly posted your ansewr.";
            this.alert = "Answer added successfully.";
            //this.$router.push('/question&answer')
            }
            else{
              this.alert = res.data
            }
          })
          .catch((err) => {
            this.answerMessage = "error loading answers";
          });
      }
    },
  },
};
</script>

<style scoped>
#div {
  border-radius: 5%;
}
</style>
