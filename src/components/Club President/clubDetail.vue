<template>
    <v-container>
<div class="ml-2">
 <h2> Detailed Members Information   </h2>
</div>

<v-card flat class="pa-5 my-3" >
    <v-row justify="center">
    <v-expansion-panels inset>
      <v-expansion-panel
        v-for="(member) in Members"
        :key="member"
      >
        <v-expansion-panel-header >{{member.club}}</v-expansion-panel-header>
        <v-expansion-panel-content>


             <v-simple-table height="300px">
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

        </tr>
      </tbody>
    </template>
  </v-simple-table>


        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
    
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
    Members: [
        {
            firstname: 'x', 
            lastname: 'y', 
            department: 'swe', 
            club: 'Charity Club'
        },
        {

            firstname: 'y', 
            lastname: 'yx', 
            department: 'arch', 
            club: 'Multimedia Club'
        },

    ]
        }
        }
})
</script>
