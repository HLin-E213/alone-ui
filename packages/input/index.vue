<!--
 * @Author 黄小林
 * @Description 
-->
<template>
  <div class="a-input-wrap"
       @mouseenter="enter"
       @mouseleave="leave">
    <input
        :class="disabled?'a-disabled':''"
        :disabled="disabled"
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
        :value="modelValue"
        :placeholder="placeholder"
        @input="inputHandler"
        @change="$emit('change')"
    />
    <span v-if="clearable && modelValue && mouse_is" class="a-right-suffix">
        <a-icon
            name="CircleClose"
            size="16"
            @click="clearModel"
        />
      </span>
    <span v-if="showPassword && modelValue" class="a-right-suffix">
        <a-icon
            :name="passwordVisible?'hide':'view'"
            size="16"
            @click="changePasswordShow"
        />
      </span>
  </div>

</template>

<script setup>
import {useMouseEnterLeave, useClearModel, useShowPassword} from './hook'

defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text',
    validator: (value) => {
      return ['text', 'password', 'textarea'].includes(value)
    }
  },
  placeholder: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  showPassword: {
    type: Boolean,
    default: false
  }
})


const $emit = defineEmits(['update:modelValue', 'change', 'input'])
const {mouse_is, enter, leave} = useMouseEnterLeave()
const clearModel = useClearModel($emit)
const inputHandler = (e) => {
  let value = e.target.value
  $emit('update:modelValue', value)
}

const { passwordVisible, changePasswordShow } = useShowPassword()

</script>

<style lang="scss" scoped>
.a-input-wrap{
  width: 100%;
  box-sizing: border-box;
  display: inline-flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding-left: 12px;
  padding-right: 12px;
  border: 1px solid $border-1;
  &:not(.a-disabled):focus-within{
    box-shadow: 0 0 0 1px $success !important;
    transition: all .3s;
  }
  &:not(.a-disabled):hover{
    box-shadow: 0 0 0 1px $border-2;
    transition: all .3s;
  }
  input {
    width: 100%;
    height: 34px;
    line-height: 34px;
    outline: none;
    border: none;
    padding: 0 8px;
    color: $text;
    border-radius: 4px;
    font-size: 14px;
  }
  .a-right-suffix{
    display: inline-flex;
    height: 34px;
    align-items: center;
    align-self: flex-end;
    opacity: .4;
    cursor: pointer;
    &:hover{
      opacity: .6;
    }
  }
}
</style>