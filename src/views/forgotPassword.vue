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
                  <h3>Forgot Password</h3>
                </v-form-title>
              </v-row>
               <v-row>
                <v-alert
                  v-if="message"
                  justify="center"
                  outlined
                  type="warning"
                  prominent
                  border="left"
                >
                  {{ message }}
                </v-alert>
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
                <v-btn
                  color="secondary-dark"
                  @click="search()"
                  elevation="1"
                  justify="center"
                  text--white
                  class="d-flex align center"
                  width="200"
                >
                  <span>Search Account</span><v-icon class="fa fa-arrow-right"></v-icon>
                </v-btn>
              </v-row>
        
              <v-row justify="center">
                <v-text-field
                  v-model="token"
                  label="Token"
                  id="password"
                  type="text"
                  required
                  :key="icon"
                  icon
                  outlined
                 
                >
                <template v-slot:append>
                  <v-icon class="fa fa-hashtag"></v-icon>
                  </template>
                </v-text-field>
              </v-row>
                            <v-row justify="center">
                <v-text-field
                  v-model="password"
                  :rules="passwordRules"
                  label="New Password"
                  id="password"
                  type="text"
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
                  @click="submit()"
                  elevation="4"
                  justify="center"
                  text--white
                  class="d-flex align center"
                  width="200"
                >
                  <span>submit</span><v-icon class="fa fa-arrow-right"></v-icon>
                </v-btn>
              </v-row>
            </v-form>

           
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
      response:'',
      message: '',
      token:''
    }
     },
    methods:
    {
      search()
      {
          let mail = {email: this.email}
        if(this.$refs.form.validate())
        {  
     axios
        .post("http://localhost:8888/api/forgotPassword", mail)
        .then((res) => {
          this.response = res.data;
          if (res.data.status == "failure") {
            this.message = res.data.message;
          }
          else{
              this.message =" An Email has been sent to you"
        }
         })
    }
      },
      submit(){
          let data = {
              token: this.token,
             password: this.password
          }
          axios
        .post("http://localhost:8888/api/users/resetPassword", data)
        .then((res) => {
          this.response = res.data;
          if (res.data.status == "failure") {
            this.message = res.data.message;
          }
          else{
              this.message =" You have successfuly changed your password."
              setTimeout(()=>{
                this.$router.push('/login')
              }, 4000);
          }
         })
      }
      
      }
}

</script>