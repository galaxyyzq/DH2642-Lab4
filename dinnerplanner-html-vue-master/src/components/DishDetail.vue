<template>
  <div>
    <el-row>
      <el-col :span="20">
          <h4>Ingredient for {{ numOfGuests.length }} people</h4>
      </el-col>
      <el-col :span="4">
        <router-link :to="'/search'">
          <el-button type="normal" round style="margin-top:20px" class="back">BACK TO SEARCH</el-button>
        </router-link>
      </el-col>
    </el-row>

    <el-row>
      <el-col :lg="15" :md="20" style="padding-right:15px;">
          <p class="dishestitle">{{ dish.title }}</p>
          <img v-bind:src="dish.image" />
          <p>{{ dish.instructions }}</p>

            <el-button type="primary" round style="margin-top:20px" v-on:click="adddishtomenu" id="dishID">ADD TO MENU</el-button>


      </el-col>
      <el-col :lg="9" :md="20">
        <div class="ingredientbox">
          <h3>Ingredient Detail</h3>
          <hr>
          <br>
          <tr v-for="ingredient in dish.extendedIngredients" :id="ingredient.id" :key="ingredient.id">
            <td>
              {{ingredient.name}}
            </td>
            <td>
              {{numOfGuests.length * ingredient.amount  +"  "+ ingredient.unit}}
            </td>
            <td>
              {{ingredient.amount * 3 *numOfGuests.length}}
            </td>
          </tr>
        </div>
      </el-col>
    </el-row>



  </div>

</template>

<script>

var dishID = this.id;

import { modelInstance } from "../data/DinnerModel";

export default {


  props:["id","model","selectedDishes","numOfGuests"],

  mounted() {
    modelInstance.getDish(this.id).then(dish => {
      this.status = 'LOADED'
      this.dish = dish
    }).catch(() => {
      this.status = 'ERROR'
    })
  },

  methods:{

    adddishtomenu:function(){

      var isDishExist=false;

      for (var i = 0; i <this.selectedDishes.length; i++) {
        if (this.dish.id === this.selectedDishes[i].id) {
          alert('This dish is already in your menu');
          isDishExist=true;
        }
      }

      if (!isDishExist) {
        this.selectedDishes.push(this.dish);
      }
    }

  },

  data: function () {
    return {
      status: 'INITIAL',
      dish: {
        title:"loading, please wait...",
        instructions:"",
        extendedIngredients:[],
      },
      modelInstance: this.model,
      selectedDishes:[]

    }
  }



}
</script>

<style>

.ingredientbox{
  border: solid 1px #ccc;
  margin: 20px 12px 20px 12px;
  padding: 10px 12px 20px 12px;
}

.dishestitle{
  font-size: 24px;
}
.back{
  position:absolute;
  top:5px;
}

</style>
