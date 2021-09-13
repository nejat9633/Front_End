<template>
  <div>
    <v-container class="py-4">
      <div>
        <h2>Events</h2>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class=" pa-3 mx-1"
              color="black "
              @click="add"
              v-bind="attrs"
              v-on="on"
              outlined
              elevation="0"
            >
              Add new event <v-icon class="fa fa-plus"></v-icon
            ></v-btn>
          </template>
          <span>New notice papers</span>
          <v-card>
            <v-spacer></v-spacer>
            <v-btn absolute> tiif</v-btn>
            <v-card-title class="text-h5 grey lighten-2">
             New Event/Notice
            </v-card-title>

            <v-card-text>
              <form>
                <v-text-field
                  v-model="name"
                  :error-messages="nameErrors"
                  :counter="10"
                  label="Name"
                  required
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  :error-messages="emailErrors"
                  label="E-mail"
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field>
                <v-select
                  v-model="select"
                  :items="items"
                  :error-messages="selectErrors"
                  label="Item"
                  required
                  @change="$v.select.$touch()"
                  @blur="$v.select.$touch()"
                ></v-select>
                <v-file-input label="File input" outlined dense></v-file-input>

                
              </form>

            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-btn class="mr-4" @click="submit">
                  submit
                </v-btn>
                <v-btn @click="dialog = false && reveal" color="primary" text >
                  Done
                </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>

      <v-card
        flat
        class="pa-5 my-3"
        color="grey lighten-4"
        v-for="event in events"
        v-bind:key="event"
      >
        <v-layout>
          <v-flex>
            <v-row>
              <v-col>
                <div class="caption black--text">{{ event.title }}</div>
                <div>{{ event.body }}</div>
                <div>{{ event.createdAt }}</div>
              </v-col>
              <v-col>
                <div>
                  <v-img
                    src="@/assets/file_1630045180557.jpg"
                    max-width="200"
                    max-height="300"
                  >
                  </v-img>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-card-actions class="pa-4 " flat>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      class=" pa-3 mx-1"
                      color="blue "
                      @click="view"
                      v-bind="attrs"
                      v-on="on"
                      outlined
                      elevation="0"
                    >
                      View full size</v-btn
                    >
                  </template>
                  <span>View Answers</span>
                </v-tooltip>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      class="fa fa-pencil pa-3 mx-1"
                      color="red "
                      @click="edit()"
                      v-bind="attrs"
                      outlined
                      elevation="0"
                      v-on="on"
                      >Edit
                    </v-btn>
                  </template>
                  <span>Edit Question</span>
                </v-tooltip>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      class=" pa-3 mx-1"
                      color=" grey "
                      @click="erase"
                      elevation="0"
                      outlined
                      v-bind="attrs"
                      v-on="on"
                      >Delete</v-btn
                    >
                  </template>
                  <span>Delete Question</span>
                </v-tooltip>
              </v-card-actions>
            </v-row>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>

    <admin_page />
  </div>
</template>

<script>
import admin_page from "@/components/infoAdmin/admin_page";
import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
      select: { required },
      checkbox: {
        checked (val) {
          return val
        },
      },
    },
  components: {
    admin_page,
  },
  computed:{
selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Item is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
  },
  mounted() {
    return axios
      .get(`${url}getEvent/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.body.status == "success") {
          this.events = res.body.Events;
        } else {
          this.message = res.body.message;
        }
      });
  },
  data() {
    return {
      message: "",
      dialog: false,
      events: [
        {
          title: "someone",
          image: "image",
          createdAt: "Sep 12, 2017",
          body:
            "Listen to your favorite artists and albums whenever and wherever online and offline",
        },

        {
          title: "someone",
          image: "image",
          body:
            "Listen to your favorite artists and albums whenever and wherever online and offline",
          createdAt: "Sep 12, 2017",
        },
        {
          title: "someone",
          image: "image",
          createdAt: "Sep 12, 2017",
          body:
            "Listen to your favorite artists and albums whenever and wherever online and offline",
        },
      ],
      
    };
  },
  methods:{
    submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = false
      },
  }
};
</script>
