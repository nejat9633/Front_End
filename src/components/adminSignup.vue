<template>
  <v-card elevation="16" class="mx-auto my-12" max-width="700">
    <v-row class="mx-10">
      <v-col class="mx-6">
        <v-row class="mx-1">
          <v-col class="mx-7">
            <v-form
              ref="form"
              class="px-4-sm pt-4"
              v-model="valid"
              lazy-validation
            >
              <v-card-title justify="center">
                <v-form-title class="pb-4 mx-15">
                  <h4>CHANGE YOUR PASSWORD</h4>
                </v-form-title>
              </v-card-title>
              <v-row>
                <h3 class="text--blue">
                  An email with a defualt password has been sent to you. Make
                  sure to fill your sent password on the space provided !
                </h3>
              </v-row>

              <v-row justify="center">
                <v-text-field
                  v-model="sentpassword"
                  :rules="passwordRules"
                  :counter="10"
                  label="Sent Password"
                  required
                  outlined
                  clearable
                >
                </v-text-field>
              </v-row>

              <v-row justify="center">
                <v-text-field
                  v-model="newpassword"
                  :rules="passwordRules"
                  :counter="10"
                  label="New Password"
                  required
                  outlined
                  clearable
                >
                </v-text-field>
              </v-row>

              <v-row justify="center">
                <v-btn
                  color="green darken-1"
                  elevation="3"
                  justify="center"
                  text--white
                  class="d-flex align center ma-2"
                  width="200"
                  @click="submit()"
                >
                  <span>SUBMIT</span>
                </v-btn>

                <v-btn
                  @click="clear"
                  elevation="3"
                  justify="center"
                  text--white
                  class="d-flex align center mb-2"
                  dark
                  width="200"
                >
                  CLEAR
                </v-btn>
              </v-row>
              <v-row v-if="status">
                <v-col>
                  <h5>
                    {{ message }}
                  </h5>
                </v-col>
                <v-col>
                  <v-btn
                    @click="clear"
                    elevation="3"
                    justify="center"
                    text--white
                    class="d-flex align center mb-2"
                    primary
                    width="200"
                  >
                    Resend Email
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    sentpassword: "",
    newpassword: "",
    respose: "",
    status: false,
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length >= 3 || "Minimum length is 3 characters.",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) =>
        /(?=.*\d)(?=.*[a-z]).{6,}/.test(v) ||
        "Password must contain at least lowercase letter, one number, a special character ",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) =>
        /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        ) || "E-mail must be valid",
    ],
  }),

  methods: {
    submit() {
      let data = {
          newpassword: this.newpassword,
          sentpassword: this.sentpassword
        }
      if (this.$refs.form.validate()) {
        
        axios
          .post(
            `http://localhost:8888/api/adminsPasswordReset/${localStorage.getItem(
              "user"
            )}`, data
          )
          .then((res) => {
            if (res.data.status == "success") {
              // localStorage.setItem('token', )
              this.$store
                .dispatch("login", res.data)
                .then(() => {
                    this.$router.push('/login')
                  /*if (res.data.user.role == "student") {
                    this.$router.push("/student");
                  } else if (res.data.user.role == "forum-admin") {
                    this.$router.push("/forumAdmin");
                  } else if (res.data.user.role == "info-admin") {
                    this.$router.push("/infoAdmin");
                  } else if (res.data.user.role == "material-admin") {
                    this.$router.push("/materialAdmin");
                  } else if (res.data.user.role == "club-president") {
                    this.$router.push("/clubPresident");
                  } else {
                    this.$router.push("/super");
                  }*/
                })
                .catch(() => {
                  this.message = res.data.message;
                  this.status = true;
                });
            }
          });
      }
    },

    clear() {
      (this.sentpassword = ""),
        (this.newpassword = ""),
        this.$refs.observer.reset();
    },
  },
};
</script>
