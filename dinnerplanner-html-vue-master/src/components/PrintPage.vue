<template>
    <div>
    <h4>My dinner: {{ numOfGuests.length }} people</h4>
    <router-link :to="'/search'">
            <el-button type="primary" round style="margin-top:20px" class="backtosearch">GO BACK AND EDIT YOUR DINNER</el-button>
    </router-link>
     <div  v-for="item in selectedDishes" >
          <h3>{{ item.title }}</h3>
          <img v-bind:src="item.image" />
          <h4>Preparation</h4>
          <p>{{ item.instructions }}</p>
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
    .backtosearch{
    position: absolute;
    right: 20px;
    top: 120px;
    }

</style>