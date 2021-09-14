<template>
<v-container> 

<v-card>
    <v-card-title> 
        <h2>Add a New Club</h2>
    </v-card-title>

<v-divider></v-divider>
  <v-card-text>
   <v-form class="px-3" >
        <v-text-field  
            label="Title of the Club"
            clearable
            prepend-icon="mdi-transfer-right">
        </v-text-field>

         <v-text-field  label="Description of the Club"
            clearable
             prepend-icon="mdi-transfer-right">
        </v-text-field>
        

    <v-file-input
    label="Image Input"
    filled
    prepend-icon="mdi-camera"
    ></v-file-input>

    <v-textarea
            v-model="content" 
            label="Enter the detail info of the club"
            clearable
            prepend-icon=" mdi-pencil"
    >
        </v-textarea>
        <v-btn flat class="success mx-0 mt-3" @click="submit()"> Add Club </v-btn>
     </v-form>

    </v-card-text>  
  </v-card>
</v-container>
</template>


<script>
export default ({
   
data() { 
  return{
     overlay: false,
      alert: false,
  }
   
}

})
</script>