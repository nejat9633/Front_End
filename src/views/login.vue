<template>
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
                  v-model="name"
                  :rules="nameRules"
                  label="Username"
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
                  @click="resetValidation"
                  elevation="2"
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
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      icon: "fa fa-lock",
    };
  },
};
</script>
