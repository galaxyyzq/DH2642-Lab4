<template>
  <el-main class="Dishes">
    <h4>Find a dish</h4>
    <ul>
      <em v-if='status === "INITIAL"'>Loading...</em>
      <b v-else-if='status === "ERROR"'>Failed to load data, please try again</b>
      <router-link v-for="dish in dishes" :id="dish.id" :key="dish.id" :to="'/dish/' + dish.id">
        <el-col :span="6">
        <img v-bind:src="baseURI + dish.image" class="dishpic"/>
            <div class="dishtext">{{ dish.title }}</div>
        </el-col>
      </router-link>
    </ul>
    </el-main>
</template>

<script>
  // Alternative to passing the moderl as the component property, 
  // we can import the model instance directly
  import { modelInstance } from "../data/DinnerModel";

  export default {
    // this methods is called by Vue lifecycle when the 
    // component is actually shown to the user (mounted to DOM)
    // that's a good place to call the API and get the data
      
      
    mounted() {
      // when data is retrieved we update it's properties
      // this will cause the component to re-render
      modelInstance.getAllDishes().then(dishes => {
        this.status = 'LOADED'
        this.dishes = dishes.results
        this.baseURI = dishes.baseUri
      }).catch(() => {
        this.status = 'ERROR'
      })
    },
    props:["model"],
    data() {
      return {
        status: 'INITIAL',
        dishes: []
      }
    }
  }
    
</script>
<style>
  .el-col {
    border-radius: 5px;
  }
  .dishpic{
	width: 200px;
	height: 160px;
  }
  .dishtext{
    height: 50px
  }
</style>
