<template>
  <div class="select-dish">
      
      
          <!-- collapse menu in small size screen -->
    <el-row class="hidden-sm-and-up">
      <el-collapse >
        <el-collapse-item title="Dish Menu" name="1">
              <sidebar :model="this.model" v-bind:selectedDishes="selectedDishes" v-bind:numOfGuests="numOfGuests"/>
        </el-collapse-item>
      </el-collapse>
    </el-row>
      
    <!-- We pass the model as property to the Sidebar component -->
    <el-row>
      <el-col :span="6">
        <sidebar :model="this.model" class="hidden-xs-only" v-bind:selectedDishes="selectedDishes" v-bind:numOfGuests="numOfGuests"/>
      </el-col>
      <el-col :span="18">
        <detail :id="this.id" :model="this.model" v-bind:selectedDishes="selectedDishes" v-bind:numOfGuests="numOfGuests"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import DisheDetail from '@/components/DishDetail'
// import { bus } from "../main"

export default {
  props: ['model','id','selectedDishes','numOfGuests'],
  components: {
    'sidebar': Sidebar,
    'detail': DisheDetail
  }
}
</script>
