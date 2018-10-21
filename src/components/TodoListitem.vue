<template>
<div id="TodoListitem">
<li>
{{todo.text}}
<button class="button2" @click="$emit('remove', todo.id)">
X
</button>
</li>
</div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>
<style>
.button2{
  background-color:#DC143C;
    border: 2px;
    border-radius: 4px;
    color: white;
     float:right;
  text-decoration: none;
    display: inline-block;
  font-size: 12px;
  font-weight:bold;
}
</style>
