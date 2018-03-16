<template>
  <div class="welcome">
    <p>
      {{ msg }}
    </p>
    <p>
      <router-link to="/search">
        <el-button type="primary" round style="width:300px;font-size:18px;">START</el-button>
      </router-link>
    </p>


  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Welcome to the dinner planner, you can make your own dishes now!'
    }
  }
}
</script>

<!-- Example of styling Vue components -->
<!-- With the scoped attribute, CSS will apply to elements of the current component only -->
<style scoped>
*{
  font-family: 'Slabo 27px', serif;
}

p{
  font-size: 24px;
  text-align: center;
  color: #333;
  margin-top: 80px;
}

</style>
