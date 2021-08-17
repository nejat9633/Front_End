<template>
   <v-app>
    <v-app-bar 
     app
     color="lightgrey" 
     dark >
      <div class="d-flex align-left">
        <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text
        >
          <div class="d-flex align-center">
            <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              :src="require('./assets/images.jpeg')"
              transition="scale-transition"
              width="110"
            />
          </div>
          <span class="mr-2">Aastu Student's Center</span>
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Home</span>
      </v-btn>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2 ">Events Board</span>
      </v-btn>


      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Forum</span>
      </v-btn>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Clubs</span>
      </v-btn>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2 blue--text">login</span>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view> </router-view>
      </v-container>
    </v-main>
    <v-spacer></v-spacer>
    <v-footer dark padless >
      <v-col class="text-center" cols="12">
        <v-icon class="fa fa-instagram"></v-icon>
        {{ new Date().getFullYear() }} —
        <v-btn target="_blank" text><strong>About Us</strong></v-btn>
      </v-col>
    </v-footer>
    <v-spacer></v-spacer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

 components: {
    
  },
  
  data: () => ({
    //
  }),
};
</script>
