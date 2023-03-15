<!--
 * @Author 黄小林
 * @Description 
-->
<template>
  <transition name="message">
    <div
        v-if="visible"
        ref="messageRef"
        :style="style[type]"
        class="a-message flex items-center p-lr-18 md-12"
        :class="{ 'justify-center': center }"
    >
      <a-badge v-if="repeatNum > 1" :value="repeatNum" :type="type" class="a-message__badge"/>
      <message-icon :type="type"/>
      <span class="pl-12 txt-hide" v-html="message"> </span>
      <Close v-if="showClose" class="close-btn a-cursor" @click="close"/>
    </div>
  </transition>
</template>

<script setup>
import {onMounted, ref, watch} from 'vue'
import {style} from './utils/dataMock.js'
import ABadge from '../badge/index.vue'
import {Close} from '@element-plus/icons-vue'
import MessageIcon from './utils/message-icon.vue'

const visible = ref(false)
const props = defineProps({
  type: {
    type: String,
    default: 'info',
    validator: (value) => {
      return ['success', 'info', 'warning', 'danger'].includes(value)
    }
  },
  message: {
    type: String
  },
  duration: {
    type: Number,
    default: 3000
  },
  showClose: {
    type: Boolean,
    default: false
  },
  center: {
    type: Boolean,
    default: false
  },
  onClose: {
    type: Function
  },
  grouping: {
    type: Boolean,
    default: false
  },
  repeatNum: {
    type: Number,
    default: 0
  }
})

const messageRef = ref()

// 关闭
function close() {
  visible.value = false
  props.onClose && props.onClose(messageRef)
}

// 清楚定时器
function clearTimer() {
  clearTimeout(timer.value)
}

const timer = ref()

function startTimer() {
  if (props.duration > 0) {
    timer.value = setTimeout(() => {
      if (visible.value) close()
    }, props.duration)
  }
}

onMounted(() => {
  // @ts-ignore
  // console.log(style[props.type as string].icon)
  startTimer()
  visible.value = true
})

// 当合并的时候，每次有新的，以最新的关闭为准
watch(
    () => props.repeatNum,
    () => {
      clearTimer()
      startTimer()
    }
)
</script>

<style lang="scss" scoped>
.a-message {
  height: 46px;
  width: 380px;
  position: relative;
  z-index: 999;
}

.a-message__badge {
  position: absolute;
  top: 0;
  right: 0;
}

.close-btn {
  width: 16px;
  color: #aaa;
  height: 16px;
  position: absolute;
  right: 4px;
}

.message-enter-active {
  animation: 0.5s message-open-close;
}

.message-leave-active {
  animation: 0.5s message-open-close;
  animation-direction: reverse;
}

@keyframes message-open-close {
  from {
    transform: translateY(-40px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
