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
          v-for="member in members"
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
import clubPres from '@/components/clubPresident/clubPres.vue'
import clubD from './clubDetail.vue'
import axios from "axios";
const qID = localStorage.getItem("qID");
const url = "http://localhost:8888/api/";
const token = localStorage.getItem("tok");
const userId = localStorage.getItem("user");
export default ({
   components: {
        clubPres,
    },
    data() {
        return{
          members:'',
          message:'',
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
        },
        mounted(){
          axios.get(`${url}getclubmembers/${userId}`).then((res)=>{
           if(res.data.status == 'success'){
                   this.members = res.data.members

                   this.status = true
                 }
                 else{
                     this.message = 'There are no memebers in this club yet.'
                     this.response = res.data
                     this.status= true
                 }
        })
        }
})
</script>
