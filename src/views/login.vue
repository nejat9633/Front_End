<template>
<v-flex>
  <v-container class="mx-lg my-12" >
    <v-row class="mx-16">
      <v-col class="mx-15">
        <v-row class="mx-9" justify="center">
          <v-col class="mx-15">
            <v-form
              ref="form"
              class="px-4-sm pt-4"
              v-model="valid"
              lazy-validation
            >
              <v-row justify="center">
                <v-form-title class="pb-4">
                  <h3>LOGIN</h3>
                </v-form-title>
              </v-row>
              <v-row justify="center">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  id="email"
                  type="email"
                  name="email"
                  required
                  outlined
                >
               <template v-slot:append>
                  <v-icon class="fa fa-user"></v-icon>
                  </template>
                </v-text-field>
              </v-row>
              <v-row justify="center">
                <v-text-field
                  v-model="password"
                  :rules="passwordRules"
                  :counter="10"
                  label="Password"
                  id="password"
                  type="password"
                  required
                  :key="icon"
                  icon
                  outlined
                 
                >
                <template v-slot:append>
                  <v-icon class="fa fa-lock"></v-icon>
                  </template>
                </v-text-field>
              </v-row>

              <v-row justify="center">
                <v-btn
                  color="secondary-dark"
                  @click="submit"
                  elevation="4"
                  justify="center"
                  text--white
                  class="d-flex align center"
                  width="200"
                >
                  <span>login</span>
                </v-btn>
              </v-row>
            </v-form>

            <v-row class="pt-4 mt-4" justify="center">
        
              <v-btn
                href="http://localhost:8081/#/signup"
                target="_blank"
                text--blue
                elevation="0"
                color="#66BB6A"
                x-large>

                <span class="mr-2" > Create New Account <v-icon class="fa fa-arrow"></v-icon> </span>
              </v-btn>

            </v-row>

            <v-row class="pt-4 mt-4" justify="center"   >
         
                <div class="d-flex align-center ">
                  <v-btn elevation="0" x-small bottom>
                      <h4 class="blue--text" > Forgot Password ? </h4>
                    </v-btn>
                </div>
            </v-row>

          </v-col>
        </v-row>
      </v-col>
    </v-row>
 
  </v-container>
   </v-flex>
</template>
<script>
import axios from 'axios'
export default {
  name: "login",
  data() {
    return {
      email: '',
      password: '',
      icon: "fa fa-lock",
      emailRules:
      [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
        
      ],
      passwordRules:
      [
        v => v.length >= 6 || 'Minimum length is 6 characters.'
      ],
    }
     },
    methods:
    {
      submit()
      {
        if(this.$refs.form.validate())
        {
        console.log(this.name, this.password)
        const credentials = {
        email: this.email,
        password: this.password,
      };

      axios
        .post("http://localhost:8888/api/login", credentials)
        .then((res) => {
          this.response = res.data;
          if (res.status == 200 && res.data.status == "failure") {
            this.message = res.data.message;
          } else if (
            res.data.user.role != "student" &&
            res.data.user.passwordModified == false
          ) {
            this.$router.push("/signup");
          } else {
            console.log(res.status);
            this.$store
              .dispatch("login", res.data)
              .then(() => {
                if (res.data.user.role == "student") {
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
                }
              })
              .catch(() => {
                this.cred = " Wrong Input";
              });
          }
        })
        .catch((err) => {
          this.message = " Wrong Password";
        });

      /* axios.post('http://localhost:8888/api/login', credentials, {
       //headers:{
       //}
     //})
           .then(res => {
             this.response = res
           })
           .catch(error => {
             this.response = error
           });*/
 
        }
      }
    },
 
}
</script>
