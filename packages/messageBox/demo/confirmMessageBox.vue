<template>
  <a-button @click="open">Click to open the Message Box</a-button>
</template>
<script setup>
import { MessageBoxFn } from '../../../packages/messageBox/index'
import { AMessageFn } from '../../../packages/index'
  const open = () => {
    MessageBoxFn('proxy will permanently delete the file. Continue?', 'Warning', {
      boxType: 'confirm',
      type: 'warning'
    })
      .then(() => {
        AMessageFn({
          type: 'success',
          message: 'Delete completed'
        })
      })
      .catch(() => {
        AMessageFn({
          type: 'danger',
          message: 'Delete canceled'
        })
      })
  }
</script>