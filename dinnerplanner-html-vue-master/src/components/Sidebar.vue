<template>
  <div class="sidebar">
    <p class="sidebartitle">Selected Dish<p>
      <p>Total number of guests: {{ numOfGuests.length }}</p>
     <!-- <el-input-number v-model="numberOfGuests" @change="onDidChangeNumberOfGuests" :min="1" :max="20"></el-input-number> -->
      <el-button  v-on:click="minus">-</el-button>
        <span style="margin:0 15px 0 15px">{{ numOfGuests.length }}</span>
      <el-button  v-on:click="plus">+</el-button>

      <div class="menudish">
        <el-row>
          <el-col :span="18">DISHNAME</el-col>
          <el-col :span="6">COST</el-col>
        </el-row>
        <el-row v-for="item in selectedDishes">
          <br>
          <el-col :span="18">{{item.title}}</el-col>
          <el-col :span="6">{{item.pricePerServing*numOfGuests.length}}</el-col>
        </el-row>
      </div>

      <router-link :to="'/confirm'">
        <el-button type="primary" round style="width:100%;margin-top:20px">CONFIRM DINNER</el-button>
      </router-link>


    </div>
  </template>

  <script>


  export default {
    props: ['model','selectedDishes','numOfGuests'],

    // this methods is called by React lifecycle when the
    // component is created that's a good place to setup model observer
    created() {
      this.model.addObserver(this);
    },

    // this is called when component is removed destroyed
    // good place to remove observer
    beforeDestroy() {
      this.model.removeObserver(this)
    },


    methods: {
      minus:function(){
       this.numOfGuests.pop();
      },
       plus:function(){
       this.numOfGuests.push("0");
      },
    }
  }
  </script>

  <style>
  .sidebar{
    padding: 0 20px 0 20px;
    margin-right: 20px;
  }

  *{
    font-family: 'Slabo 27px', serif;
  }

  .sidebartitle{
    font-size: 24px;
    font-family: 'Slabo 27px', serif;
  }

  .menudish{
    margin: 30px 0 20px 0;
  }


  </style>
