<template>
  <div class="Dishes">
    <p class="dishestitle">Find a Dish</p>

    <!-- Search function -->
    <div class="searchbar">

      <el-dropdown>
        <el-button type="normal">Type<i class="el-icon-arrow-down el-icon--right"></i></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="main+course">Main Course</el-dropdown-item>
          <el-dropdown-item command="appetizer">Appetizer</el-dropdown-item>
          <el-dropdown-item command="salad">Salad</el-dropdown-item>
          <el-dropdown-item command="breakfast">Breakfast</el-dropdown-item>
          <el-dropdown-item command="soup">Soup</el-dropdown-item>
          <el-dropdown-item command="sauce">Sauce</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-input placeholder="Search the Dish" v-model="dishinput" style="width: 300px; margin-left:10px"clearable></el-input>

    </div>

    <!-- dishes result -->
    <em v-if='status === "INITIAL"'>Loading...</em>
    <b v-else-if='status === "ERROR"'>Failed to load data, please try again</b>
    <router-link v-for="dish in dishes" :id="dish.id" :key="dish.id" :to="'/dish/' + dish.id">
      <el-col  :xs="12" :sm="10" :md="5" :lg="5" :xl="5" class="dishbox">
        <el-card :body-style="{ padding: '0px', height: '260px'}">
          <img v-bind:src="baseURI + dish.image" class="dishpic"/>
          <div class="dishtext">{{ dish.title }}</div>
        </el-card>
      </el-col>
    </router-link>

  </div>
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
    dishinput: ''
  }
}

</script>
<style>
.dishestitle{
  font-size: 24px;
  font-family: 'Slabo 27px', serif;
}

.searchbar{
  margin: 10px 0 30px 0;
}

.dishpic{
  width: 100%;
  height: 180px;
}
.dishtext{
  /* height: 60px */
  font-size: 16px;
  font-family: 'Slabo 27px', serif;
  text-align: center;
  color: #999999;
  padding: 5px 10px 5px 10px;
}
.dishbox{
  margin: 0 10px 20px 0;
}

</style>
