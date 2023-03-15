<template>
  <a-button size="small" @click="openCenter">Centered text</a-button>
</template>

<script setup>
import { AMessageFn } from '../utils/message'

  const openCenter = () => {
    AMessageFn({
      showClose: true,
      message: 'Centered text',
      center: true
    })
  }
</script>
