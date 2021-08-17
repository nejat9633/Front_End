<template>
    <v-container>
        <v-row>
                <div class="pa-3 blue--text">
                    <h2> Latest Events</h2>
                </div>
        </v-row>
        <v-row>
            
<v-col>
 <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
        class="mx-auto"
        max-width="344"
       min-height="450" 
       max-height="450"
       >
        <v-img src="../assets/notice1.jpg" height="350" contain></v-img>

        <v-card-text>
          <h2 class="text-h6 primary--text">
            Skill Up!
          </h2>
          Travel to the best outdoor experience on planet Earth. A vacation you will never forget!
        </v-card-text>

        <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#036358"
          >
            <v-btn>See more info</v-btn>
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
</v-col>

<v-col>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
        class="mx-auto"
        max-width="344"
        min-height="450"
        max-height="650"
      >
        <v-img src="../assets/notice2.jpg" height="350" contain></v-img>

        <v-card-text>
          <h2 class="text-h6 primary--text">
            AASTU Free Tutor 
          </h2>
          Travel to the best outdoor experience on planet Earth. A vacation you will never forget! 
          Lorem ipsum dolor sit amet consectetur, 
                   
        </v-card-text>

        <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#036358"
          >
            <v-btn>See more info</v-btn>
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
  </v-col>

<v-col>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
        class="mx-auto"
        max-width="344"
        min-height="450"
        max-height="650"
      >
        <v-img src="../assets/notice1.jpg" height="350" contain></v-img>

        <v-card-text>
          <h2 class="text-h6 primary--text">
            AASTU Free Tutor 
          </h2>
          Travel to the best outdoor experience on planet Earth. A vacation you will never forget!                    
        </v-card-text>

        <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#036358"
          >
            <v-btn>See more info</v-btn>
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
  </v-col>
            
            <v-col>
                <v-row class="mt-16">
                </v-row>
                 <v-row class="mt-16">
                </v-row>
                <v-row class="mt-16">
                <v-btn elevation="0" plain class="mt-16" color="blue" >
                 <v-icon x-large class="fa fa-angle-right"></v-icon>
                </v-btn>
                </v-row>
            </v-col>
             
        </v-row>
    </v-container>
</template>
<script>
export default {
data: () => ({
      overlay: false,
    }),
    name:'Home'
}
</script>