<template>
    <div>
        <v-container  class="my-5">  

<v-dialog max-width="600px">



<v-card>
    <v-card-title> 
        <h2>Add a New Question</h2>
    </v-card-title>

<v-divider></v-divider>

  <v-card-text>

   <v-form class="px-3" >
     <v-select
            v-model="catagory" 
            :items="titles"
            label="Title of your question."
            clearable
            require
            prepend-icon=" mdi-pencil"
        >
     </v-select>
             <v-text-field
            v-model="title" 
            label="Title of your question"
            clearable
            prepend-icon=" mdi-pencil"
        >
      
             </v-text-field>
        <v-textarea
            v-model="description" 
            label="Enter your question"
            clearable
            prepend-icon=" mdi-pencil"
        >
      
        </v-textarea>
        <v-btn flat class="success mx-0 mt-3" @click="submit"> Add Question </v-btn>
     </v-form>

  </v-card-text>  

</v-card>

</v-dialog>
</v-container>

    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>