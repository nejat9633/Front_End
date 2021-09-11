<template>
  <v-row justify="center">
    <v-expansion-panels popout>
      <v-expansion-panel
        v-for="(item) in notice"
        :key="item"
      >
        <v-expansion-panel-header>{{item.name}}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-simple-table height="300px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Calories
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in notice"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.content }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script>

import clubPres from '@/components/Club President/clubPres.vue'
export default {
   components: {clubPres},
data() { 
  return{
      overlay: false,
      alert: false,
       name:'Home',
        notice: [
          {
          name: "AASTU charity club",
          description: " Travel to the best outdoor orget!", 
          content: " sthwhere the qclubs are Lorendae odio consectetur quis necessitatibus dolores asperiores sint cum, at eum quisquam mollitia nisi aperiam autem, laborum doloribus aliquam praesentium aspernatur! Tempora.",
          image: require("../assets/notice1.jpg")
          },

          {
            name: "AASTU sth",
            description: "hello there",
            content: "lorem ipsum sth lorem ipsum sth loreorem ipsum sth lorem ipsum sth ",
            image: require('../assets/notice1.jpg')
         },
         { 
            name: " AASTU Free Tutor",
            description: "Travel to thetion you wilet! ",
            content: " Phasellus tempus. Fusce ac vestibulum et, tempor auctor, justo. Pellentesque posuere. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.Phasellus nec sem in justo pellentesque facilisis. Phasellus magna. ",
            image: require("../assets/notice2.jpg")
         },
           { 
            name: " AASTU Free Tutor for 2nd year ",
            description: "Travel to the best outdoor n planet ",
            content: " Phasellus tempus. Fusce ac felis sit amet ligula pharetravestibulum et, tempor auctor, justo. Pellentesque posuere. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.Phasellus nec sem in justo pellentesque facilisis. Phasellus magna. ",
            image: require("../assets/notice2.jpg")
         },
         
            ],    

  }
   
}
 
}
</script>