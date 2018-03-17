<template>
    <div>
        <h4>ingredient for ? people</h4>
        <router-link :to="'/search'">
            <el-button type="primary" round style="margin-top:20px">BACK TO SEARCH</el-button>
        </router-link>
        
    </div>

</template>

<script>
import { modelInstance } from "../data/DinnerModel";


export default {
 mounted() {

  
}
}

</script>