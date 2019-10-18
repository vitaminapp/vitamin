<template>
  <div class="container">
　　<div class="left">
    <input type="text" v-model="price">
    {{price|current}}
  </div> 
　　<div class="right">right</div> 
  </div>
</template>

<script>
import "./index.scss"
export default {
  name: 'SetServer',
  data(){
    return{
      price:10
    }
  },
  computed:{
   
  },
  methods:{
  
  }
}
</script>

<style scoped>
</style>
