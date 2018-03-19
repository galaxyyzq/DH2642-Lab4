<template>
  <div class="sidebar">
    <p class="sidebartitle">Selected Dish<p>
      <p>Total number of guests: {{ numberOfGuests }}</p>
      <el-input-number v-model="numberOfGuests" @change="onDidChangeNumberOfGuests" :min="1" :max="20"></el-input-number>

      <div class="menudish">
        <el-row>
          <el-col :span="18">DISHNAME{{selectDishes.length}}</el-col>
          <el-col :span="6">COST</el-col>
        </el-row>
        <el-row v-for="item in selectDishes">
          <el-col :span="18">{{item.title}}</el-col>
          <el-col :span="6">{{item.title}}</el-col>
        </el-row>
      </div>

      <router-link :to="'/confirm'">
        <el-button type="primary" round style="width:100%;margin-top:20px">CONFIRM DINNER</el-button>
      </router-link>


    </div>
  </template>

  <script>

  import { bus } from "../main"

  export default {
    props: ['model'],
    // this methods is called by React lifecycle when the
    // component is created that's a good place to setup model observer
    created() {
      this.model.addObserver(this);

      bus.$on("addToMenu",(data) =>{
        console.log(this);
        this.selectDishes.push(data);

      })

    },

    // this is called when component is removed destroyed
    // good place to remove observer
    beforeDestroy() {
      this.model.removeObserver(this)
    },

    // we define and initalise the data we want to use and modify in the component
    data() {
      return {
        numberOfGuests: this.model.getNumberOfGuests(),
        selectDishes: []
      }
    },

    methods: {
      // in our update function we modify the the property of
      // the compoented which will cause the component to re-render
      update() {
        this.numberOfGuests = this.model.getNumberOfGuests()
      },

      // our handler for the input's on change event
      onDidChangeNumberOfGuests(e) {
        this.model.setNumberOfGuests(+e.target.value)
      }
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
