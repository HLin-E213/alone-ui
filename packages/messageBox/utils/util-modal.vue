<script setup>
  import { computed, onMounted, onUnmounted } from 'vue'
  import { useNamespace } from '../../utils/hooks.util'

  const props = defineProps({
    visible: {
      type: Boolean,
      default: false
    },
    mask: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: String,
      default: '9'
    }
  })
  const ns = useNamespace('modal')
  const $emit = defineEmits(['closed'])
  const closed = (type) => {
    $emit('closed', { type })
  }
  const keyDownHandler = (e) => {
    if (e.code === 'Escape') closed(e.code)
  }
  const zIndexStyle = computed(() => {
    return {
      zIndex: props.zIndex
    }
  })
  onMounted(() => {
    document.addEventListener('keydown', keyDownHandler)
  })
  onUnmounted(() => {
    document.removeEventListener('keydown', keyDownHandler)
  })
</script>

<template>
  <div
    v-show="visible"
    :style="zIndexStyle"
    :class="ns.is(mask, 'mask')"
    class="util-modal"
    @click.self="closed('click')"
  >
    <slot />
  </div>
</template>

<style scoped>
  .util-modal {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }
  .is-mask {
    background-color: rgba(24, 24, 27, .7);
  }
</style>
