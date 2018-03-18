<template>
    <div>
    <h4>My dinner: {{ numberOfGuests }} people</h4>
    <router-link :to="'/search'">
            <el-button type="primary" round style="margin-top:20px" class="backtosearch">GO BACK AND EDIT YOUR DINNER</el-button>
    </router-link>
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
    
    props:["model"],
        
    data: function () {
       return {
       status: 'INITIAL',
       numberOfGuests: modelInstance.getNumberOfGuests(),
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
    .printbutton{
    text-align:center;
    }
</style>