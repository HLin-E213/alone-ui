<script>
import {computed, defineComponent} from 'vue'
import {useNamespace} from '../../utils/hooks.util'

export default defineComponent({
  name: 'AFooter',
  props: {
    height: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const ns = useNamespace('footer')
    const styleHeight = computed(() => (props.height ? {height: props.height} : {}))
    return {
      ns,
      styleHeight
    }
  }
})
</script>

<template>
  <footer :class="ns.b()" :style="styleHeight">
    <slot/>
  </footer>
</template>

<style>
.a-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 3.5rem;
  flex-shrink: 0;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
</style>
