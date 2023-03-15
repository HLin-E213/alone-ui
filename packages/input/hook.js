/**
 * @author: 黄小林
 * @Date: 2023/3/8
 * @Desc: 无
 **/
import { ref } from 'vue'

export const useMouseEnterLeave = () => {
  const mouse_is = ref(false)
  return {
    mouse_is,
    enter: () => {mouse_is.value = true},
    leave: () => {mouse_is.value = false}
  }
}

export const useClearModel = ($emit) => {
  return () => {
    $emit('update:modelValue', '')
    $emit('change', '')
    $emit('clear')
    $emit('input', '')
  }
}

export const useShowPassword = () => {
  const passwordVisible = ref(false)
  const changePasswordShow = () => {
    passwordVisible.value = !passwordVisible.value
  }
  return {
    passwordVisible,
    changePasswordShow
  }
}
