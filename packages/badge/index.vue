<!--
 * @Author 黄小林
 * @Description 
-->
<template>
  <div class="a-badge relative inline-block align-middle">
    <slot></slot>
    <sub
        v-show="!hidden && (content || content === '0' || isDot)"
        :class="['a-sup__base', ...classCom]"
        v-text="content"
    ></sub>
  </div>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'danger',
    validator: (value) => {
      return ['primary', 'success', 'info', 'warning', 'danger'].includes(value)
    }
  },
  value: {
    type: [Number, String]
  },
  max: {
    type: Number,
    default: 99
  },
  hidden: {
    type: Boolean,
    default: false
  },
  isDot: {
    type: Boolean,
    default: false
  }
})
// 内容
const content = computed(() => {
  if (props.isDot) return ''
  if (typeof props.value === 'number' && typeof props.max === 'number') {
    return props.max < props.value ? `${props.max}+` : `${props.value}`
  }
  return `${props.value}`
})
const classCom = computed(() => {
  const isDot = props.isDot ? 'a-badge__dot' : 'a-badge__content'
  const type = props.type ? `a-badge__type--${props.type}` : ''
  return [isDot, type]
})
</script>

<style scoped lang="scss">
$badgeSize: 19px;
.a-badge{
  position: relative;
  display: inline-block;
  vertical-align: middle;
}
.a-sup__base {
  transform: translateY(-50%) translate(100%);
  @apply align-baseline;
}
.a-badge__content {
  padding: 0 6px;
  height: 19px;
  right: 10.5px;
  position: absolute;
  top: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 9999px;
  border-width: 1px;
  font-size: 10px;
  line-height: 19px;
  color: $white;
}
.a-badge__dot {
  height: 8px;
  width: 8px;
  position: absolute;
  top: 0;
  right: 1px;
}
.a-badge__type--primary {
  background-color: $primary;
}
.a-badge__type--success {
  background-color: $success;
}
.a-badge__type--warning {
  background-color: $warning;
}
.a-badge__type--danger {
  background-color: $error;
}
.a-badge__type--info {
  background-color: $info;
}
</style>

