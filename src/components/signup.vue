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
              lazy-validation>

              <v-card-title justify="center">           
                <v-form-title class="pb-4 mx-15" >
                  <h3>SIGN UP</h3>
                </v-form-title>
              </v-card-title>
              
            <v-row justify="center">
              <v-text-field
              v-model="first_name"
              :rules="nameRules"
              label="First Name"
              required
              outlined
              clearable
              >
              </v-text-field>
            </v-row>

    <v-row justify="center">
      <v-text-field
      v-model="last_name"
      :rules="nameRules"
      label="Last Name"
      required
      outlined
      clearable
      >
      </v-text-field>
    </v-row>

    <v-row justify="center">
     <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
      outlined
      clearable
      >
      </v-text-field>
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
                  @click="submit">
                  <span>REGISTER</span>
                </v-btn>
               
                <v-btn 
                  @click="clear"
                  elevation="3"
                  justify="center"
                  text--white
                  class="d-flex align center mb-2"
                  dark
                  width="200">
                  CLEAR   
                </v-btn>

              </v-row>
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>

export default 
{

    data: () => ({
        first_name: '',
        last_name: '',
        email: '',
        password:'',
      nameRules: 
      [
        v => !!v || 'Name is required',
        v => v.length >= 3 || 'Minimum length is 3 characters.',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      passwordRules:
      [
       v => !!v || 'Password is required',
       v => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) || 'Password must contain at least lowercase letter, one number, a special character and one uppercase letter',
      ],
     emailRules: 
      [
       v => !!v || 'E-mail is required',
       v => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid',
      ],
      
    }),
    
    methods: 
    {

    submit () 
    {
         if(this.$refs.form.validate())
        {
        console.log(this.first_name, this.last_name, this.email, this.password)
        }
      },

      clear ()
       {
        this.first_name ='',
        this.last_name = '',
        this.email = '',
        this.password = '',
        this.$refs.observer.reset()
       },
      }
}

</script>