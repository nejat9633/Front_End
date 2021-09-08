<template>
  <v-flex>
    <v-bottom-navigation :value="value" color="teal" grow>
      <v-select
        :items="items"
        label="Category"
        max-width="500"
        class="ma-1"
      ></v-select>

      <v-btn max-width="500" min-width>
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
    <v-alert
      v-if="message"
      border="left"
      colored-border
      color="deep-red accent-4"
      elevation="2"
    >
      Aliquam eu nunc. Fusce commodo aliquam arcu. In consectetuer turpis ut
      velit. Nulla facilisi.. Morbi mollis tellus ac sapien. Fusce vel dui.
      Praesent ut ligula non mi varius sagittis. Vivamus consectetuer hendrerit
      lacus. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
      nisi.
    </v-alert>
    <div class="pa-3 headline text-h5 dark">
      <span>Highly Rated Questions</span>
    </div>
    <v-container>
      <v-row>
        <v-col cols="">
          <v-card
            flat
            class="pa-5 my-3"
            width="800"
            color="grey lighten-4"
            v-for="question in questions"
            :key="question"
          >
            <v-layout row wrap >
              <v-flex>
                <v-avatar>
                  <v-img :src="require('../assets/avatar_1.png')" />
                  <!--    <v-img :src="require(person.avatar)" />    -->
                </v-avatar>
                <div class="caption black--text">{{ question.title }}</div>
                <div>{{ question.description }}</div>

                <v-card-actions class="pa-4 " flat>
                      <v-btn
                        class=" pa-3 mx-1"
                        color="blue accent-2"
                        text
                        @click="giveAnswer(question._id)"
                        transparent
                      >
                        {{ 3 }}
                        <!--put the number of answers given using a coounter of the answers-->
                        answers
                      </v-btn>

                  <v-btn
                    class="pa-3 mx-1"
                    color="blue accent-2"
                    text
                    @click="Like(question._id)"
                  >
                    <v-icon class="mr-3">mdi-thumb-up</v-icon>
                    {{ question.rate }}
                    Like
                  </v-btn>
                  <v-dialog v-model="dialog2" max-width="600px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        class="pa-3 mx-1"
                        color="red lighten-1"
                        text
                        v-on="on"
                        v-bind="attrs"
                        @click="report()"
                      >
                        <v-icon class="mr-3">mdi-alert-circle</v-icon>
                        Report
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <h2>{{ question.title }}</h2>
                      </v-card-title>

                      <v-divider></v-divider>

                      <v-card-text>
                        <v-form class="px-3">
                          <v-select> </v-select>
                          <v-textarea
                            v-model="description"
                            label="Enter your reason"
                            clearable
                            prepend-icon=" mdi-pencil"
                          >
                          </v-textarea>

                          <v-btn
                            flat
                            outlined
                            class=" px-2 mx-4 mt-3"
                            @click="report(question._id)"
                          >
                            Add Answer
                          </v-btn>
                          <v-btn
                            flat
                            outlined
                            class=" px-2 mx-0 mt-3"
                            @click="dialog2 = false"
                          >
                            Done
                          </v-btn>
                        </v-form>
                      </v-card-text>
                    </v-card>
                  </v-dialog>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-card>
        </v-col>
        <v-col>
          <v-card flat class="pa-5 my-3" color="grey lighten-4" left>
            <span>
              you can post any question in diffrent categories.
            </span>
            <v-chip-group active-class="primary--text" column>
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
      {{answer}}
    </v-container>
  </v-flex>
</template>

<script>
const url = "http://localhost:8888/api/";
import axios from "axios";
const token = localStorage.getItem("tok");
const userId = localStorage.getItem("user");
export default {
  components: {},
  methods: {
    giveAnswer(qID) {
      console.log(qID);
        localStorage.setItem('qID', qID);
        console.log('clicked')
        setTimeout(()=>{
        this.$router.push('/question&answer')

        }, 4000)
      },
    Like(qID) {
      axios
        .post(`${url}rateQuestion/${qID}`, {
          headers: { 'Auhorization': `Bearer ${token}` },
        })
        .then((res) => {
          if (res.data.status == "success") {
            this.message = res.data.message;
          } else this.message = res.data.message;
        });
    },
    getAnswers(qID) {
      axios
        .get(`${url}getallAnswers/${qID}`, 
       // {  headers: { Authorization: `Bearer ${token}` },
        )
        .then((res) => {
          if (res.data.status == "success") {
            this.answers = res.data.result;
            this.response = res.data.result;
          } else {
            this.answerMessage = res.data.message;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    axios.get(`${url}allquestions`).then((res) => {
      if (res.data.status == "success") {
        this.questions = res.data.allQuestions;
        this.response = res.data.allQuestions;
      } else {
        this.message = res.data.message;
      }
    });
    //axios.get(`${url}getallAnswers/`)
  },

  data: () => {
    return {
      message: "",
      answerMessage: "",
      dialog: false,
      dialog2: false,
      description: "",
      response: "",
      questions: [],
      answers: [],
      item: ["programming", "Graphics", "Architecture"],
    };
  },
}
</script>
