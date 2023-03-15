<template>
  <a-button size="small" @click="open">Show message</a-button>
</template>

<script setup>
import { AMessageFn } from '../utils/message'

  const open = () => {
    AMessageFn({
      message: 'this is a message.',
      grouping: true,
      type: 'success'
    })
  }
</script>
