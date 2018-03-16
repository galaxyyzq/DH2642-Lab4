<template>
  <div class="select-dish">
    <!-- We pass the model as property to the Sidebar component -->
    <el-row>
      <el-col :span="6">
        <sidebar :model="this.model"/>
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
  props: ['model'],
  components: {
    'sidebar': Sidebar,
    'dishes': Dishes
  }
}
</script>
