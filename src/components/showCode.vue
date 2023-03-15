<!--
 * @Author 黄小林
 * @Description
-->
<template>
  <div class="pre-code-box">
    <transition name="slide-fade">
      <pre class="language-html"
           v-if="showCode"
           v-highlight>
        <code class="language-html">{{ sourceCode }}</code>
        <span class="copy-code a-cursor" @click="copyCode">复制代码</span>
      </pre>
    </transition>
    <div class="showCode" @click="showOrhideCode">
      <span>{{ showCode ? "隐藏代码" : "查看代码" }}</span>
        <a-icon :name="showCode?'CaretTop':'CaretBottom'" />
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import {AMessageFn} from "../../packages";

const props = defineProps({
  compName: {
    type: String,
    default: '',
    required: true
  },
  demoName: {
    type: String,
    default: '',
    required: true
  }
})
const showCode = ref(false)
const showOrhideCode = () => {
  showCode.value = !showCode.value
}

const sourceCode = ref('')

async function getSourceCode() {
  sourceCode.value = (await import(/* @vite-ignore */`/packages/${props.compName}/demo/${props.demoName}.vue?raw`)).default
}
const copyCode = () => {
  const input = document.createElement('input')
  document.body.appendChild(input)
  input.setAttribute('value', sourceCode.value)
  input.setAttribute('readonly', 'readonly')
  input.select()
  input.setSelectionRange(0, 9999) // 如果select 没有选择到
  if (document.execCommand('copy')) {
    AMessageFn.success({
      message: '复制代码成功',
      center: true
    })
  }
  document.body.removeChild(input)
}
onMounted(() => {
  getSourceCode()
})
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.1s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: .5;
}

.pre-code-box {
  width: 100%;
  height: auto;
  overflow: hidden;
  border: 1px solid #ebebeb;
  margin: 10px 0 15px 0;
  position: relative;
  transition: all 0.15s ease-out;

  .showCode {
    width: 100%;
    line-height: 40px;
    font-size: 14px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;
    box-shadow: 0 16px 15px -16px rgb(0 0 0 / 10%);
    color: #505050;
    cursor: pointer;

    i {
      margin-left: 10px;
    }

    i.rotate {
      transform: rotate(180deg);
    }

    &:hover {
      background: #f9f9f9;
      color: #67C23A;
    }
  }

  &:hover {
    box-shadow: 0 16px 15px -16px rgb(0 0 0 /10%);
  }
}
table{
  border: 1px;
}
.copy-code{
  display: inline-block;
  padding: 4px 8px;
  position: absolute;
  top: 30px;
  right: 15px;
  color: #666;
  &:hover{
    color: #67C23A;
  }
}
</style>