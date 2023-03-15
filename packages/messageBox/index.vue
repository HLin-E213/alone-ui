<!--
 * @Author 黄小林
 * @Description 
-->

<template>
  <util-modal :visible="visible_" z-index="10" @closed="closeModal">
    <transition name="message-box">
      <div v-show="visible_" :class="[ns.b()]">
        <div class="flex justify-between items-center">
          <span class="font-14">{{ title }}</span>
          <Close
              v-if="showClose"
              class="close-btn a-cursor"
              @click="confirmAll('cancel')"
          />
        </div>
        <div class="p-tb-12 flex items-center">
          <message-icon v-if="boxType === 'confirm'" class="mr-4" :type="type" size="21"/>
          <span class="" v-html="message"></span>
        </div>
        <div class="flex justify-end">
          <a-button size="small" class="ml-12" v-if="showCancelButton" @click="confirmAll('cancel')">{{
              cancelText
            }}
          </a-button>
          <a-button size="small" class="ml-12" type="primary" @click="confirmAll('confirm')">{{
              confirmText
            }}
          </a-button>
        </div>
      </div>
    </transition>
  </util-modal>
</template>
<script>
import {Close} from '@element-plus/icons-vue'
import UtilModal from './utils/util-modal.vue'
import {defineComponent, nextTick, reactive, ref, toRefs} from 'vue'
import {useNamespace} from '../utils/hooks.util'
import MessageIcon from '../message/utils/message-icon.vue'
import AButton from '../button/index.vue'

export default defineComponent({
  name: 'AMessageBox',
  components: {
    UtilModal,
    Close,
    MessageIcon,
    AButton
  },
  setup(props, {emit}) {
    const ns = useNamespace('message-box')
    const visible_ = ref(false)
    const state = reactive({
      title: '',
      message: 'Message',
      confirmText: 'OK',
      cancelText: 'Cancel',
      type: 'info',
      boxType: 'alert',
      distinguishCancelAndClose: false,
      showClose: true,
      showCancelButton: true,
      center: false,
      action: '',
      showInput: false
    })
    // 接受遮罩层事件
    const closeModal = (e) => {
      if (state.distinguishCancelAndClose && (e.type === 'click' || e.type === 'Escape')) {
        closed('close')
      }
    }
    // 关闭
    const closed = (action) => {
      state.action = action
      if (!visible_.value) return
      visible_.value = false
      nextTick(() => {
        if (state.action) emit('action', state.action)
      })
    }
    // 按钮
    const confirmAll = (type) => {
      closed(type)
    }
    return {
      ...toRefs(state),
      confirmAll,
      closeModal,
      ns,
      visible_
    }
  }
})
</script>

<style lang="scss" scoped>
.a-message-box {
  width: 420px;
  background-color: rgba(255, 255, 255, 1);
  padding: 8px 16px;
  border-radius: 4px;
  transform: translateX(-50%) translateY(-50%) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 99;
}

.close-btn {
  width: 18px;
  color: #807f7f;
  height: 18px;
}

.message-box-enter-active {
  animation: 0.5s message-open-close;
}

.message-box-leave-active {
  animation: 0.5s message-open-close;
  animation-direction: reverse;
}

@keyframes message-open-close {
  from {
    transform: translateY(-40px) translateX(-50%);
    opacity: 0;
  }
  to {
    transform: translateY(-50%) translateX(-50%);
    opacity: 1;
  }
}

</style>
