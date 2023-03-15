<script>
import {computed, defineComponent} from 'vue'
import {useNamespace} from '../../utils/hooks.util'

export default defineComponent({
  name: 'AAside',
  props: {
    width: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const ns = useNamespace('aside')
    const styleWidth = computed(() => (props.width ? {width: props.width} : {}))
    return {
      ns,
      styleWidth
    }
  }
})
</script>

<template>
  <aside :style="styleWidth" :class="ns.b()">
    <slot/>
  </aside>
</template>

<style>
.a-aside {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 200px;
  flex-shrink: 0;
  overflow: auto;}
</style>
