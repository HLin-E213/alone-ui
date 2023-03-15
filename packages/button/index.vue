<!--
 * @Author 黄小林
 * @Description 
-->
<template>
  <button :class="_class" :disabled="disabled">
    <span><slot></slot></span>
  </button>
</template>

<script setup>
import {computed} from "vue"

const props = defineProps({
  type: {
    type: String,
    default: 'default'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: ''
  }
})

const _class = computed(() => {
  return [
    'a-button a-cursor',
    `a-button-${props.type}`,
    props.disabled ? 'a-disabled' : '',
    props.size === 'small' ? 'a-button-small' : ''
  ]
})

</script>

<style lang="scss" scoped>
button {
  outline: none;
  border: none;
}

.a-button {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 4px;
  background-color: #f0f0f0;

  &:hover, &:focus {
    opacity: .8;
  }
}

.a-button-default {
  background-color: $white;
  color: $text;
  border: 1px solid $border-1;
}

.a-button-primary {
  background-color: $primary;
  color: $white;
  border: 1px solid $primary;
}

.a-button-success {
  background-color: $success;
  color: $white;
  border: 1px solid $success;
}

.a-button-error {
  background-color: $error;
  color: $white;
  border: 1px solid $error;
}

.a-button-warning {
  background-color: $warning;
  color: $white;
  border: 1px solid $warning;
}

.a-button-info {
  background-color: $info;
  color: $white;
  border: 1px solid $info;
}

.a-button-small {
  padding: 5px 12px;
}
</style>