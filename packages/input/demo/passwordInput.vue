<script setup>
  import { ref } from 'vue'
  const input = ref('')
</script>

<template>
  <a-input v-model="input" type="password" placeholder="Please input" show-password />
</template>
