<template>
  <div class="about">
    <tester/>
    <h1>This is an about page</h1>
    <h6> about the developers
    1. Nejat Hussein 
    2. Samrawit Bezabih
    </h6>
    
    <pageHeader/>
  </div>

</template>
<script>
import pageHeader from '../components/pageHeader.vue'

export default ({
  Components: {
    pageHeader
  }
})
</script>
