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
      :items-per-page.sync="itemsPerPage"
      :page.sync="page"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar
          
      light
          class="mb-1"
        >
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search A Club"
          ></v-text-field>

        <!--      color="blue-grey lighten-1"
        
        <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-spacer></v-spacer>
            <v-select
              v-model="sortBy"
              flat
              solo-inverted
              hide-details
              :items="keys"
              prepend-inner-icon="mdi-magnify"
              label="Sort by"
            ></v-select>
           -->
            <v-spacer></v-spacer>
             <v-btn-toggle
              v-model="sortDesc"
              mandatory
            >
            
 <v-tooltip bottom>
         <template v-slot:activator="{ on, attrs }">
           <v-btn 
             v-bind="attrs"
             v-on="on"
              large
                depressed
                color="blue-grey lighten-2"
                :value="false"
             >
          <v-icon color="primary">mdi-arrow-up </v-icon>
           </v-btn>
         </template>
        <span> Sort in Ascending (A to Z) Order </span>
         </v-tooltip>


            <v-tooltip bottom>
         <template v-slot:activator="{ on, attrs }">
           <v-btn 
             v-bind="attrs"
             v-on="on"
              large
                depressed
                color="blue-grey lighten-2"
                :value="true"
             >
          <v-icon color="primary">mdi-arrow-down </v-icon>
           </v-btn>
         </template>
        <span> Sort in Descending (Z to A) Order </span>
         </v-tooltip>

          
            </v-btn-toggle>
         
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >

          <v-hover>
    <template v-slot:default="{ hover }"  >
      <v-card
        class="mx-auto ma-3"
        max-width="300"
       min-height="300" 
      
       >

        <v-img  :src="item.image" 
    
        height="200"
         contain ></v-img>

        <v-card-text>
          <h2 class="text-h6 primary--text">
           {{item.name}}
          </h2>

          {{item.description}}  </v-card-text>

        <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#036358"  >

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
      transition="scale-transition"   >

     {{item.content}}
    </v-alert>
          </div>
          
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
          </v-hover>
          <v-flex> 
    <v-btn
  color="pink"
  dark
  class="ma-2"
  :style="{left: '50%', transform:'translateX(-50%)'}"  > 
        Leave
    </v-btn>
 
  </v-flex>
          <!--  <v-card >
            <v-img :src="item.image"  height="200"
         contain   ></v-img>

              <v-card-title class="subheading font-weight-bold">
                {{ item.name }}
              </v-card-title> 
              <v-divider></v-divider>             
            </v-card>
           -->
          </v-col>
        </v-row>
      </template>


      <template v-slot:footer>
        <v-row
          class="mt-2"
          align="center"
          justify="center"
        >
          <span class="grey--text"  >Items per page</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                text
                color="black"
                class="ml-2"
                v-bind="attrs"
                v-on="on"
              >
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <span
            class="mr-4
            grey--text"
          >
            Page {{ page }} of {{ numberOfPages }}
          </span>
          <v-btn
            fab
            dark
            color="blue-grey lighten-2"
            class="mr-1"
            @click="formerPage"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn
            fab
            dark
            color="blue-grey lighten-2"
            class="ml-1"
            @click="nextPage"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-iterator>
   
  </v-container>
  <student_page class="mt-5"/>
</v-flex>

</template>

<script>

import student_page from "@/components/Student/student_page.vue"
 
export default {
    
   components: {
    student_page
    },

    data () {
        
      return {
        overlay: false,
      alert: false,

        itemsPerPageArray: [4, 8, 12],
        search: '',
        filter: {},
        sortDesc: false,
        page: 1,
        itemsPerPage: 8,
        sortBy: 'name',
        keys: [
          'Members', 
        ],
        items: [
          {
           name: "AASTU charity club",
          description: "  A vacation you will never forget!", 
          content: " sthwhere the qclubs are Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae odio consectetur quis necessitatibus dolores asperiores sint cum, at eum quisquam mollitia nisi aperiam autem, laborum doloribus aliquam praesentium aspernatur! Tempora.",
          image: require("../../assets/notice1.jpg")
           
          },
          {
            name: " AASTU Multimedia Club",
            description: "Tation you will never forget! ",
            content: " Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Pellentesque posuere. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.Phasellus nec sem in justo pellentesque facilisis. Phasellus magna. ",
            image: require("../../assets/notice2.jpg")
          },
        
        ],
      }
    },
    computed: {
      numberOfPages () {
        return Math.ceil(this.items.length / this.itemsPerPage)
      },
      filteredKeys () {
        return this.keys.filter(key => key !== 'Name')
      },
    },
    methods: {
      nextPage () {
        if (this.page + 1 <= this.numberOfPages) this.page += 1
      },
      formerPage () {
        if (this.page - 1 >= 1) this.page -= 1
      },
      updateItemsPerPage (number) {
        this.itemsPerPage = number
      },
    },
  }
</script>