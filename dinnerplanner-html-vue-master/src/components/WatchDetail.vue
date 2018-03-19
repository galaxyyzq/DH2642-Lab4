<template>
  <div class="select-dish">
    <!-- We pass the model as property to the Sidebar component -->
    <el-row>
      <el-col :span="6">
        <sidebar :model="this.model" v-bind:selectedDishes="selectedDishes" v-bind:numOfGuests="numOfGuests"/>
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
