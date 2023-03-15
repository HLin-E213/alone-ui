<script setup>
import baseInput from './demo/baseInput.vue';
import disabledInput from './demo/disabledInput.vue';
import clearInput from './demo/clearInput.vue';
import passwordInput from './demo/passwordInput.vue';
</script>


# 输入框 Input

通过鼠标或键盘输入字符

## 基础用法

<baseInput />
<show-code compName="input" demoName="baseInput" />     

## 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件

<disabledInput />
<show-code compName="input" demoName="disabledInput" /> 


## 一键清空

使用 `clearable` 属性即可得到一个可一键清空的输入框

<clearInput />
<show-code compName="input" demoName="clearInput" /> 


## 密码框

使用 `show-password` 属性即可得到一个可切换显示隐藏的密码框

<passwordInput />
<show-code compName="input" demoName="passwordInput" />


## Input 属性

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| modelValue / v-model | 绑定值 | string / number | --- | --- |
| type | 类型 | string | text，password 和其他原生 input 的 type 值 | --- |
| placeholder | 输入框占位文本 | string | --- | --- |
| disabled | 是否禁用 | boolean | --- | false |
| showPassword | 显示切换密码图标 | boolean | --- | false |
| clearable | 开启清空按钮 | boolean | --- | false |


## Input 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| `change` | 仅在输入框失去焦点或用户按下回车时触发 | value: string | number) |
| `input` | 在 Input 值改变时触发 | value: string | number) |
| `clear` | 在点击由 clearable 属性生成的清空按钮时触发 | --- |

