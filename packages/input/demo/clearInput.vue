<script setup>
  import { ref } from 'vue'
  const input = ref('')
</script>

<template>
  <a-input v-model="input" type="text" placeholder="Please input" clearable />
</template>
