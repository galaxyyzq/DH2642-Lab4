<template>
  <div class="select-dish">
    <!-- We pass the model as property to the Sidebar component -->
    <el-row>
      <el-col :span="6" class="hidden-xs-only">
        <sidebar :model="this.model" v-bind:selectedDishes="selectedDishes" v-bind:numOfGuests="numOfGuests"/>
      </el-col>
      <el-col :span="18">
        <dishes />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Dishes from '@/components/Dishes'

export default {
  props: ['model','selectedDishes',"numOfGuests"],
  components: {
    'sidebar': Sidebar,
    'dishes': Dishes
  }
}
</script>
