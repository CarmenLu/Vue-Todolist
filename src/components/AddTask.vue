<template>
<div id="AddTask">
<input type="text" class="input" :value="value" v-on="listeners">
</div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ' '
    }
  },
  computed: {
    listeners () {
      return {
        // Pass all component listeners directly to input
        ...this.$listeners,
        // Override input listener to work with v-model
        input: event => this.$emit('input', event.target.value)
      }
    }
  }
}
</script>

<style scoped>
.input {
  border: 2px solid #ccc;
  border-radius: 5px;
  color: #000;
  font-size: 1em;
  height: 15px;
  padding: 8px 12px;
  width: 100%;
}
</style>
