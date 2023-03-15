<script setup>
  import { AMessageFn } from '../utils/message'
  const open = (str) => {
    AMessageFn('测试一下' + str)
  }
</script>

<template>
  <a-button @click="open('fuck')">Show message</a-button>
  <a-button @click="open('<em>HTML</em>')">HTML</a-button>
</template>