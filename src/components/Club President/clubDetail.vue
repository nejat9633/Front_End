<template>
    <v-container>
<div class="ml-2">
 <h2> Detailed Members Information   </h2>
</div>

<v-card flat class="pa-5 my-3" color="grey ligthen-2">

             <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           First Name
          </th>
          <th class="text-left">
           Last Name
          </th>
          <th class="text-left">
            Department
          </th>
          <th class="text-left">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="member in Members"
          :key="member"
        >
          <td>{{ member.firstname }}</td>
          <td>{{ member.lastname }}</td>
          <td>{{ member.department }}</td>
          <td>  
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        text
          color="red"
          v-bind="attrs"
          v-on="on"
          small
          outlined
        >
          KICK OUT
        </v-btn>
      </template>
      <v-card>
        
        <v-card-text> <br/> Are you sure you want to kick out this student? </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Yes
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            No
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</v-card>
    <club-pres/>
    </v-container>

</template>


<script>
import clubPres from '@/components/Club President/clubPres.vue'

export default ({
   components: {
        clubPres,
    },
    data() {
        return{
           dialog: false,
    Members: [
        {
            firstname: 'x', 
            lastname: 'y', 
            department: 'swe', 
         
        }, 
         {

            firstname: 'y', 
            lastname: 'yx', 
            department: 'arch', 
        
        },
        {

            firstname: 'y', 
            lastname: 'yx', 
            department: 'arch', 
           
        },

    ]
        }
        }
})
</script>
