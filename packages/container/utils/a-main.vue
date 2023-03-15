<script>
import {defineComponent} from 'vue'
import {useNamespace} from '../../utils/hooks.util'

export default defineComponent({
  name: 'AMain',
  setup() {
    const ns = useNamespace('main')
    return {
      ns
    }
  }
})
</script>

<template>
  <main :class="ns.b()">
    <slot/>
  </main>
</template>

<style>
.a-main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: auto;
  box-sizing: border-box;
  flex-shrink: 1;
  flex-grow: 1;
  overflow: auto;
  padding: 12px;
}
</style>
