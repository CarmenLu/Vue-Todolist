<template>
<div id="app">
<h1>Todo Something！</h1>
<Todolist></Todolist>
</div>
</template>

<script>
import Todolist from './components/Todolist.vue'

export default {
  components: {
    Todolist
  }
}
</script>

<style>
#app {
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.5;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #191970;
}

h1 {
  text-align: center;
}
</style>
