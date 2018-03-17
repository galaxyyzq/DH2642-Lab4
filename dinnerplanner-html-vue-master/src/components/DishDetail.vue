<template>
    <div>
        <h4>ingredient for {{ numberOfGuests }} people</h4>
        
        <router-link :to="'/search'">
            <el-button type="primary" round style="margin-top:20px" class="backtosearch">BACK TO SEARCH</el-button>
        </router-link>
        <img v-bind:src="dish.image" />
        <p>{{ dish.name }}</p> 
        <p>{{ dish.instructions }}</p>
         <tr v-for="ingredient in dish.extendedIngredients" :id="ingredient.id" :key="ingredient.id">
                        <td> 
                            {{ingredient.name}}
                        </td>
                        <td> 
                            {{numberOfGuests * ingredient.amount  +"  "+ ingredient.unit}}
                        </td>
                        <td> 
                            {{ingredient.amount * 3 *numberOfGuests}}
                        </td>
         </tr>
        <router-link :to="'/search'" id="add">
            <el-button type="primary" round style="margin-top:20px" v-on:Click="adddishtomenu" id="dishID">ADD TO MENU</el-button>
        </router-link>
        
    </div>

</template>

<script>
    
var dishID = this.id;


import { modelInstance } from "../data/DinnerModel";

export default {
 mounted() {
    modelInstance.getDish(this.id).then(dish => {
      this.status = 'LOADED'
      this.dish = dish
    }).catch(() => {
      this.status = 'ERROR'
    })
    modelInstance.addDishToMenu(this.id);
  },
  methods:{
  adddishtomenu:function(){
        modelInstance.addDishToMenu(this.id);
    }
  },
  props:["id","model"],
  data: function () {
    return {
       status: 'INITIAL',
       numberOfGuests: modelInstance.getNumberOfGuests(),
       dish: {
          name:'loading, please wait...',
          instructions:"",
          extendedIngredients:[],
      },
      modelInstance: this.model,
      
    }
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

