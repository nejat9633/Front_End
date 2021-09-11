<template>
<div>
<v-container>
<h3>Students and Recently added questions</h3>
  <v-card v-for="questn in questions" v-bind:key="questn"
    class="mx-auto"
    max-width="auto"
    flat
    outlined
  >
  
    <v-card-text>
      <div>
          <v-responsive class="pt-4 pl-5 ">
          <v-avatar size="30" >
          <v-img :src="require('../assets/avatar_1.png')" /> 

         </v-avatar>
          </v-responsive>
      </div>
      
      <p> {{questn.firstname + " " + questn.lastname}} </p>
      <div class="text--primary">
        {{questn.question}}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
      outlined
        text
        color="primary"
        @click="reveal = true"
      >
        Delete
      </v-btn>
      <v-btn
        text
        outlined
        color="primary"
        @click="reveal = true"
      >
        Ban Account
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p class="text-h4 text--primary">
            Origin
          </p>
          <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            text
            color="teal accent-4"
            @click="reveal = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
  </v-container>
    <forumAdmin/>
  </div>
</template>

<script>
import forumAdmin from '@/components/ForumAdmin/forumAdmin.vue'
export default {
    components:{
        forumAdmin
    }, 
    data: ()=>{
        return{
        questions:[
            {
                firstname: "Sifen", lastname: "Sifen", 
                question: "How to eat without chewing ?"
            },
            {
                firstname: "Sifen", lastname: "Sifen", 
                question: "How to eat eat without chewing ?"
            },
            {
                firstname: "Sifen", lastname: "Sifen", 
                question: "How to eat without chewing ?"
            }
        ], 

      
        }
    }
}
</script>