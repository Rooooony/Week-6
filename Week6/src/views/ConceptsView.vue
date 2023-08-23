<script setup>
import { ref } from 'vue'
const text = ref('Item')
const checked = ref(true)


</script>

<template>
  <div>

    <h1>Check List</h1>
    <input v-model="text"/> 
    <br> 
    {{ text }}
    <br>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">Checked: {{ checked }}</label>

  </div>

</template>

<style scoped>
div{
  border: 5px outset lightgreen;
  background-color: grey;
  text-align: center;
}

</style>