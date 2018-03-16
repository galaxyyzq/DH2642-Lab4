<template>
  <div id="app">
    <div>
        <h1 align="center"
          style="font-family: 'Slabo 27px', serif;
          font-size: 48px; color: #ff4059;">
            Dinner Planner
        </h1>
        <hr>
    </div>

    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
