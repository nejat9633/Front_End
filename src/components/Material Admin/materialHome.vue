<template>
<v-flex >
  <v-container fluid pa-5 >


<v-dialog max-width="600px" v-model="dialog2">

<template v-slot:activator="{ on, attrs }" >

        <v-btn
          class=" primary my-3 pa-5"
  :style="{left: '50%', transform:'translateX(-50%)'}" 
          dark
          v-bind="attrs"
          v-on="on"
          elevation="6"
          large   
          >
        <v-icon class="pr-3">mdi-plus-circle</v-icon>
          New Material
        </v-btn>
      </template>

<v-card>
    <v-card-title> 
        <h2>Add a New Material</h2>
    </v-card-title>

<v-divider></v-divider>

  <v-card-text>
   <v-form class="px-3" >

        <v-text-field  label="Course title of the Material"
            clearable
             prepend-icon="mdi-transfer-right">
        </v-text-field>

         <v-text-field  label="Year in number"
            clearable
             prepend-icon="mdi-numeric">
        </v-text-field>

  <v-file-input
    label="file Input"
    filled
    prepend-icon="mdi-paperclip"
  ></v-file-input>

        
        <v-btn flat class="success mx-0 mt-3" @click="submit()"> Add Material </v-btn>
         <v-btn flat class=" mx-2 mt-3"
                @click="dialog2 = false"
                outlined
              >Close</v-btn>
     </v-form>

    </v-card-text>  
  </v-card>

</v-dialog>
        <div  class="pa-2   text-h5 dark" >
        <h2> Posted Materials </h2>
        </div>


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
          class="mb-1"
        >
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search"
          ></v-text-field>

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
            <v-spacer></v-spacer>
            <v-btn-toggle
              v-model="sortDesc"
              mandatory
            >

              <v-btn
                large
                depressed
                color="blue-grey lighten-2"
                :value="false"
              >
                <v-icon>mdi-arrow-up</v-icon>
               
              </v-btn>
             
              <v-btn
                large
                depressed
                color="blue-grey lighten-2"
                :value="true"
              >
                <v-icon>mdi-arrow-down</v-icon>
              </v-btn>
            </v-btn-toggle>
          </template>
        </v-toolbar>
      </template>

      <template v-slot:default="props" >
        <v-row>
          <v-col class="grey lighten-2"
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="3" 
          >

            <v-card >
              <v-card-title class="subheading font-weight-bold">
                {{ item.name }}
              </v-card-title>
<v-card-subtitle>
File Attached: {{item.file}}
</v-card-subtitle>
              <v-divider></v-divider>

              <v-list dense>
                <v-list-item
                  v-for="(key, index) in filteredKeys"
                  :key="index"
                >

                  <v-list-item-content :class="{ 'blue--text': sortBy === key }">
                    {{ key }}:
                  </v-list-item-content>
                  
                  <v-list-item-content
                    class="align-end"
                    :class="{ 'blue--text': sortBy === key }"
                  >
                    {{ item[key.toLowerCase()] }}
                  </v-list-item-content>
                </v-list-item>
                 
              </v-list>
              
            </v-card>
           
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
  <material-page/>
</v-flex>

</template>

<script>

import MaterialPage from './materialPage.vue'
 
export default {
   
   components: {
      MaterialPage
    },

    data () {
        
      return {
        itemsPerPageArray: [4, 8, 12],
        search: '',
        filter: {},
        sortDesc: false,
        page: 1,
        itemsPerPage: 8,
        sortBy: 'name',
        dialog2: false,
        keys: [
          'Year', 
          //'Semester',
        ],
        items: [
          {
            name: 'Data Structure',
            year: 2,
            file: 'xyz place',
            Semester: 1,
          },
          {
            name: 'Database ',
             year: 2,
            file: 'xyz place',
             Semester: 2 ,
          },
          {
            name: 'Web Design',
            year: 2,
            file: 'xyz place',
             Semester:1 ,
          },
          {
            name: 'SQAT ',
            year: 4,
            file: 'xyz place',
             Semester: 2,
          },
          {
            name: 'Programming I',
             year: 1,
            file: 'xyz place',
             Semester:1, 
          },
          {
            name: 'Multimedia System',
             year: 4,
            file: 'xyz place',
             Semester: 2 
          },
          {
            name: 'Entreprenership',
            year: 4,
            file: 'xyz place',
             Semester: 2
          },
          {
            name: 'system programming',
            year: 2,
            file: 'xyz place',
             Semester: 1 
          },
          {
            name: 'Digital Logic Design',
            year: 1,
            file: 'xyz place',
             Semester: 1 
          },
          {
            name: 'Operating System',
            year: 3,
            file: 'xyz place',
             Semester: 1 
          },
            {
            name: 'Programming II',
             year: 1,
            file: 'xyz place',
             Semester: 2
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