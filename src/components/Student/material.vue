<template>
<v-container >

<v-row id="first">
    <p>this is the material page.</p>
</v-row>


 <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
        >
        <v-row>       
           <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>

            
          </v-list-item-content>
        </v-row>
                  <v-divider ></v-divider>
        </v-list-item>
      </v-list>

</v-container>
</template>

<script>

export default{
 data: () => ({
    drawer: null,
    items: [
          { title: 'first year', },
          { title: 'second year', },
          { title: 'third year',   },
          { title: 'fourth year' },
        ], 
  }),
}
</script>