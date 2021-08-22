<template>



 <v-card
    elevation="16"
    class="mx-auto my-12"
    max-width="500"
  >
<v-row class="mx-10">
      <v-col class="mx-6">
        <v-row class="mx-1" >
          <v-col class="mx-7">

            <v-form
              ref="form"
              class="px-4-sm pt-4"
              v-model="valid"
              lazy-validation
            >
              <v-card-title justify="center">           
                <v-form-title class="pb-4 mx-15" >
                  <h3>SIGN UP</h3>
                </v-form-title>
              </v-card-title>
              
              <v-row justify="center">
              <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      label="First Name"
      required
      outlined
      clearable
      @input="$v.first_name.$touch()"
      @blur="$v.first_name.$touch()"
    ></v-text-field>
  
              </v-row>

 <v-row justify="center">
              <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      label="Last Name"
      required
      outlined
      clearable
      @input="$v.last_name.$touch()"
      @blur="$v.last_name.$touch()"
    ></v-text-field>
              </v-row>

              <v-row justify="center">
              <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      outlined
      clearable
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
              </v-row>

              <v-row justify="center">
                <v-text-field
                  v-model="password"
                  :rules="passwordRules"
                  :counter="10"
                  label="Password"
                  required
                  outlined
                  clearable
                   @input="$v.password.$touch()"
                  @blur="$v.password.$touch()"
                >
                </v-text-field>
              </v-row>

              <v-row justify="center">
                <v-btn
                  color="secondary-dark"
                 
                  elevation="2"
                  justify="center"
                  text--white
                  class="d-flex align center"
                  width="200"
                  @click="submit">
                  <span>submit</span>
                </v-btn>
               
                <v-btn 
                  @click="clear"
                  elevation="2"
                  justify="center"
                  text--white
                  class="d-flex align center"
                  
                  width="200">
                  clear    
                </v-btn>
              </v-row>
            </v-form>
</v-col>
        </v-row></v-col></v-row>
 </v-card>

          

</template>

<script>

export default {
    components: {},

    data: () => ({
        first_name: '',
        last_name: '',
        email: '',
        password:''
    
}),
methods: {

    submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.first_name ='',
        this.last_name = '',
        this.email = '',
        this.password = '',
        this.$refs.observer.reset()
},
}
}
</script>