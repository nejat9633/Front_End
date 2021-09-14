<template>
<v-flex >
  <v-container fluid pa-5>
   <v-row>
                <div  class="pa-3 mb-3 text-h5 dark"  >
                    <span > CLUBS YOU ARE A MEMBER OF   </span>
                </div>
    </v-row>
    <v-data-iterator
      :items="items"
      :events="events"
      :search="search"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar   
          light
          class="mb-1"
        >
        <v-spacer> </v-spacer>
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search A Club"
          ></v-text-field>
  </v-toolbar>
      </template>

      <template >
        <v-row>
       
  
<v-card flat class="pa-5 my-3" color="grey lighten-4" v-for="event in events" v-bind:key="event">
    <v-layout >
      <v-flex >
          <v-row>
        <v-col>
       <div class="caption black--text">{{event.title}}</div>
       <div>{{event.body}}</div>
       <div>{{event.createdAt}}</div>
        </v-col>

        <v-col>
        <div> <v-img src="@/assets/notice1.jpg" max-width="200" max-height="300"> </v-img>  </div>
        </v-col>
       </v-row>

  <v-row>
        <v-card-actions class="pa-4 " flat>

      <v-tooltip bottom >
      <template v-slot:activator="{ on, attrs }">
        <v-btn class=" pa-3 mx-1" 
        color="blue "  
        @click="view"
          v-bind="attrs"
          v-on="on"
          outlined
          elevation="0"
        > View full size</v-btn>
      </template>
      <span>View Answers</span>
      </v-tooltip>

        <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="fa fa-pencil pa-3 mx-1" color="red "
         @click="edit()" 
          v-bind="attrs"
          outlined
          elevation="0"
          v-on="on">Edit </v-btn>
     </template>
      <span>Edit Question</span>
      </v-tooltip>

     <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class=" pa-3 mx-1" 
        color=" grey " 
        @click="erase" 
        elevation="0"
        outlined
          v-bind="attrs"
          v-on="on">Delete</v-btn>
        </template>
      <span>Delete Question</span>
      </v-tooltip>

        </v-card-actions>
        </v-row>
    
      </v-flex>
    </v-layout>

      </v-card>
          
        </v-row>

    
    </template>
    </v-data-iterator>
   
  </v-container>
  <student_page class="mt-5"/>
</v-flex>
</template>


<script>
import student_page from "@/components/Student/student_page.vue";

export default {
  components: {
    student_page,
  },

  data() {
    return {
      overlay: false,
      alert: false,
      
      search: "",
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 8,
      sortBy: "name",
      keys: ["title"],
     
        events: [{
                title: "someone",
                image: 'image',
                createdAt: 'Sep 12, 2017',            
                body: "Listen to your favorite artists and albums whenever and wherever online and offline"
            },
        {
         title: "someone",
                image: 'image',
                createdAt: 'Sep 12, 2017',            
                body: "Listen to your favorite artists and albums whenever and wherever online and offline"
            },
      ],
    };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter((key) => key !== "Name");
    },
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
  },
};
</script>