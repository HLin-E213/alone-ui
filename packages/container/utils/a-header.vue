<script>
import {computed, defineComponent} from 'vue'
import {useNamespace} from '../../utils/hooks.util'

export default defineComponent({
  name: 'AHeader',
  props: {
    height: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const styleHeight = computed(() => (props.height ? {height: props.height} : {}))
    const ns = useNamespace('header')
    return {
      styleHeight,
      ns
    }
  }
})
</script>

<template>
  <header :style="styleHeight" :class="ns.b()">
    <slot/>
  </header>
</template>

<style>
.a-header {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 42px;
  flex-shrink: 0;
  padding-left: 12px;
  padding-right: 12px;
}
</style>
