<template>
    <v-container>
        <v-row>
                <div  class="pa-3  text-h5 dark" >
                    <span> Latest Events</span>
                </div>
        </v-row>
        <v-row>
        </v-row>
        <v-row>
            
<v-col       v-for="event in events" v-bind:key="event">
 <v-hover>
    <template v-slot:default="{ hover }">
      <v-card

        class="mx-auto"
        max-width="344"
       min-height="450" 
       max-height="auto"
       >
        <v-card-text v-bind:event="event">
          <h2 class="text-h6 primary--text">
            {{event.title}}
           
          </h2>
        <v-img :src="require(`../assets/${event.file}`)" height="350" contain></v-img>

          <h5> Travel to the best outdoor experience on planet Earth. A vacation you will never forget! </h5>
           Posted On: {{event.posted_date}}
        </v-card-text>
          
        <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#036358"
          >
             <div>
            <v-btn v-if="!alert"
        dark
        @click="alert = true">See more info</v-btn>
  
          <v-alert
      v-model="alert"
      color="#212121"
      dark
      dismissible
      border="top"
      icon="mdi-dots-horizontal"
      transition="scale-transition"
    >
    {{event.body}}
    </v-alert>
          </div>
          
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
                            
        </v-card-text>

        <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#036358"
          >
        <div>
            <v-btn v-if="!alert"
        dark
        @click="alert = true">See more info</v-btn>
  
          <v-alert
      v-model="alert"
      color="#212121"
      dark
      dismissible
      border="top"
      icon="mdi-dots-horizontal"
      transition="scale-transition"
    >
      Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. 
      In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Pellentesque posuere. 
      Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
      Phasellus nec sem in justo pellentesque facilisis. Phasellus magna. 
      Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo. In hac habitasse platea dictumst. Praesent turpis.
    </v-alert>
          </div>
    
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
  </v-col>


         <!--   
           DON'T DELETE 
           we may need this !!

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
             -->

        </v-row>
    </v-container>
</template>
<script>
import axios from 'axios'
export default {
data: () => ({
      overlay: false,
      alert: false,
      events: [],
      message:"",
      img: ''
    }),
    name:'Home',
    methods:{
      fe: function(){
        this.message
      },
      arrayToBuffer(buffer){
        console.log("function execution")
        console.log(" from funvtion "+buffer)
        var binary = ''
        var bytes = [].slice.call(new Uint8Array(buffer));
        console.log("bytes " +bytes)
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary)
      }
    },
   /* created:{
   /*   getEvent: ()=>{
        return axios.get('http://localhost/8888/api/getEvent')
                    .then((res)=>{
                     this.events = res.data
                    })
                    .catch((err) => {
                      this.message =' There is no Event Posted!'
                    })
      }
    },*/
    mounted(){
  
       return axios.get('http://localhost:8888/api/getEvent')
                    .then((res)=>{
                      console.log(" the first image"+ res.data.body.Event[0])
                      this.img = "jfkfj"
                     this.events = res.data.body.Event
                     console.log(this.events[0].file)
                   // console.log( this.arrayToBuffer(this.events[0].file))
                     this.message = res.data.body
                    })
                    .catch((err) => {
                      this.message =' There is no Event Posted!'
                    })
      
    },
    computed: {},
    
}
</script>