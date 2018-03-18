<template>
  <div class="Dishes">
    <p class="dishestitle">Find a Dish</p>

    <!-- Search function -->
    <div class="searchbar">

      <el-select v-model="dishtype" @change="changeTypeUrl" placeholder="Type" ref="dishtype">
            <el-option label="Main Course" value="main+course"></el-option>
            <el-option label="Appetizer" value="appetizer"></el-option>
            <el-option label="Salad" value="salad"></el-option>
            <el-option label="Breakfast" value="breakfast"></el-option>
            <el-option label="Soup" value="soup"></el-option>
            <el-option label="Sauce" value="sauce"></el-option>
        </el-select>

      <el-input placeholder="Search the Dish" v-model="dishinput" style="width: 300px; margin-left:10px"clearable></el-input>

    </div>

    <!-- dishes result -->
    <em v-if='status === "INITIAL"'>Loading...</em>
    <b v-else-if='status === "ERROR"'>Failed to load data, please try again</b>
    <router-link :to="'/dish/' + dish.id" :id="dish.id" :key="dish.id" v-for="dish in filterDish" >
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
  props:["model","dishtype","dishinput"],
  data() {
    return {
      status: 'INITIAL',
      dishes: [],
      dishinput:'',
      dishtype:''
    }

  },
  methods:{
    changeTypeUrl: function(){
      // console.log(this.$refs.dishtype.value);
      modelInstance.selectType = this.$refs.dishtype.value;
      // console.log(modelInstance.selectType);;
    }
  },
  computed:{
    filterDish:function(){
      return this.dishes.filter((dish) => {
        return dish.title.match(this.dishinput)
      });
    }
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
