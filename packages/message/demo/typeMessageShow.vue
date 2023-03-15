<template>
  <a-button type="success" size="small" @click="open2">success</a-button>
  <a-button type="warning" size="small" @click="open3">warning</a-button>
  <a-button type="info" size="small" @click="open1">message</a-button>
  <a-button type="error" size="small" @click="open4">error</a-button>
</template>

<script setup>
import { AMessageFn } from '../utils/message'
  const open1 = () => {
    AMessageFn('this is a message.')
  }
  const open2 = () => {
    AMessageFn({
      message: 'Congrats, this is a success message.',
      type: 'success'
    })
  }
  const open3 = () => {
    AMessageFn({
      message: 'Warning, this is a warning message.',
      type: 'warning'
    })
  }
  const open4 = () => {
    AMessageFn.danger?.('Oops, this is a error message.')
  }
</script>
