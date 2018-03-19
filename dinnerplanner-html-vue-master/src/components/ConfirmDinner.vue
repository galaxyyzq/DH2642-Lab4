<template>
    <div>
    <h4>My dinner: {{ numOfGuests.length }} people</h4>
    <router-link :to="'/search'">
            <el-button type="primary" round style="margin-top:20px" class="backtosearch">GO BACK AND EDIT YOUR DINNER</el-button>
    </router-link>
        

      <el-col  :xs="12" :sm="10" :md="5" :lg="5" :xl="5" class="dishbox" v-for="item in selectedDishes" >
        <el-card :body-style="{ padding: '0px', height: '260px'}">
          <img  v-bind:src="item.image" class="dishpic"/>
          <div class="dishtext">{{ item.title }}</div>
        </el-card>
      </el-col>

        
    <div  class="printbutton">
            <router-link :to="'/print'" >
                 <el-button type="primary" round style="margin-top:20px">PRINT FULL RECIPE</el-button>
            </router-link>  
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
       selectedDishes:[],
       modelInstance: this.model,
        }
       },
    }
</script>

<style>
    .backtosearch{
    position: absolute;
    right: 20px;
    top: 120px;
    }
    .printbutton{
    text-align:center;
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