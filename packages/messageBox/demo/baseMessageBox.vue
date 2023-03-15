<template>
  <a-button @click="open">Click to open the Message Box</a-button>
</template>
<script setup>
  import { MessageBoxFn } from '../../../packages/messageBox/index'
  import { AMessageFn } from '../../../packages/index'
  const open = () => {
    MessageBoxFn('This is a message', 'Title', {
      callback: (action) => {
        AMessageFn({
          type: 'info',
          message: `action: ${action}`
        })
      }
    })
  }
</script>
