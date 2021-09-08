<template>
<v-flex>
  <div>
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
    <v-container>
      <v-alert
      v-if="message"
      border="left"
      colored-border
      color="deep-blue accent-4"
      elevation="2"
    >
      Aliquam eu nunc. Fusce commodo aliquam arcu. In consectetuer turpis ut velit. Nulla facilisi..

      Morbi mollis tellus ac sapien. Fusce vel dui. Praesent ut ligula non mi varius sagittis. Vivamus consectetuer hendrerit lacus. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
    </v-alert>
      <v-card
        v-for="questn in questions"
        v-bind:key="questn"
        class="mx-auto"
        max-width="auto"
        flat
      >
        <v-card-title>{{ questn.title }}</v-card-title>
        <v-card-text>
          <div>
            <v-responsive class="pt-4 pl-5 ">
              <v-avatar size="30">
                <v-img :src="require('../assets/avatar_1.png')" />
              </v-avatar>
            </v-responsive>
          </div>

          <p>{{ questn.title }}</p>
          <div class="text--primary">
            {{ questn.description }}
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="teal accent-4" @click="like(questn._id)">
            <span class="mx-2">{{ questn.rate }}</span> Like
          </v-btn>
          <v-dialog v-model="dialog" max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class=" mx-10  pa-5"
                text
                color="teal accent-4"
                v-bind="attrs"
                v-on="on"
                @click="getAnswers(questn._id)"
              >
                <v-icon class="fa fa-plus pr-3">mdi-plus-circle</v-icon>
                Answer
              </v-btn>
            </template>

            <v-card>
              <v-card-title>
                <h2>{{ questn.title }}</h2>
              </v-card-title>

              <v-divider></v-divider>

              <v-card-text>
                <v-row v-for="answer in answers" :key="answer">
                  <p>
                    {{ answer.description }}
                  </p>
                </v-row>
                <v-form class="px-3">
                  <v-textarea
                    v-model="description"
                    label="Enter your Answer"
                    clearable
                    prepend-icon=" mdi-pencil"
                  >
                  </v-textarea>

                  <v-btn flat outlined class=" px-2 mx-4 mt-3" @click="giveAnswer(questn._id)">
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
              </v-card-text>
            </v-card>
          </v-dialog>
          <v-btn text color="teal accent-4" @click="rev">
            Report
          </v-btn>
        </v-card-actions>

       </v-card>
      {{ answers }}
    </v-container>
  </div>
  </v-flex>
</template>
<script>
const url = "http://localhost:8888/api/";
import axios from "axios";
const token = localStorage.getItem('tok')
const userId = localStorage.getItem('user')
export default {
  components: {},
  methods: {
    giveAnswer(qID) {
      axios.post(`${url}giveAnswer/${userId}`);
    },
    like(qID) {
      axios.post(`${url}`);
    },
    getAnswers(qID) {
      axios
        .get(`${url}getallAnswers/${qID}`, {headers:{'Authorization': `Bearer ${token}`}} )
        .then((res) => {
          if (res.data.status == "success") {
            this.answers = res.data.result;
            this.response = res.data.result;
          } else {
            this.message = res.data.message;
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
      dialog: false,
      dialog2: false,
      response: "",
      questions: [],
      answers: [],
    };
  },
};
</script>
