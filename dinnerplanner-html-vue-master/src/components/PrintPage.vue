<template>
  <div>
    <el-row class="header">
      <el-col :sm="19">
        <h3>My dinner for: {{ numOfGuests.length }} people</h3>
      </el-col>
      <el-col :sm="5">
        <router-link :to="'/search'">
          <el-button type="normal" round style="margin-top:10px" class="backtosearch">GO BACK AND EDIT YOUR DINNER</el-button>
        </router-link>
      </el-col>
    </el-row>


    <div v-for="item in selectedDishes" class="printcontent">
      <h2>{{ item.title }}</h2>
      <el-row>
        <el-col :lg="10">
          <img v-bind:src="item.image" width="400px"/>
        </el-col>
        <el-col :lg="14" style="padding: 0 20px 0 0">
          <h3>Preparation</h3>
          <p>{{ item.instructions }}</p>
        </el-col>
      </el-row>
    </div>




  </div>
</template>

<script>


import { modelInstance } from "../data/DinnerModel";


export default {

  props:["model","selectedDishes","numOfGuests"],

  data: function () {
    return {
      status: 'INITIAL',
      dish: {
        name:"",
        instructions:"loading...",
        extendedIngredients:[],
      },
      modelInstance: this.model,

    }
  },
  components: {
  }
}
</script>

<style>
.printcontent{
  padding: 0 20px 0 20px;
  margin-bottom: 40px;
}


</style>
