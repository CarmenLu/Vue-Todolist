<template>
<div id="TodoListUnitem">
<li>
{{ todo.text }}
<button class="button1"  @click="$emit('hasFinished',todo)">✓</button>
<button class="button2"  @click="$emit('remove', todo.id)">
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
.button1{
  background-color:#00008B;
    border: 2px;
    color: #FFFFFF;
  text-decoration: none;
    display: inline-block;
    font-size: 12px;
    font-weight:bold;
    border-radius: 4px;
}

</style>
