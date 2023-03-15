<script setup>
import {computed, useSlots} from 'vue'
import {useNamespace} from '../../utils/hooks.util'

const props = defineProps({
  direction: {
    type: String,
    default: ''
  }
})
const ns = useNamespace('container')
const isVertical = computed(() => {
  if (props.direction === 'vertical') {
    return true
  } else if (props.direction === 'horizontal') {
    return false
  }
  const slot = useSlots()
  if (slot && slot.default) {
    const vNodes = slot.default()
    return vNodes.some((vNode) => {
      const tag = (vNode.type).name
      return tag === 'AHeader' || tag === 'AFooter'
    })
  } else {
    return false
  }
})
</script>

<template>
  <section :class="[ns.b(), ns.is(isVertical, 'vertical')]">
    <slot/>
  </section>
</template>
<style lang="scss">
.a-container{
  flex-basis: auto;
  box-sizing: border-box;
  display: flex;
  min-width: 0px;
  flex-shrink: 1;
  flex-grow: 1;
  flex-direction: row;
}
.is-vertical{
  flex-direction: column;
}
</style>

