
<script setup>
import baseButton from './demo/baseButton.vue';
import disabledButton from './demo/disabledButton.vue';
import sizeButton from './demo/sizeButton.vue';
</script>
# 按钮 Button
 
## 基础用法 
<baseButton/>
<show-code compName="button" demoName="baseButton"/>

## 禁用状态
你可以使用 **disabled** 属性来定义按钮是否被禁用，该属性接受一个 **Boolean** 类型的值       

<disabledButton/>
<show-code compName="button" demoName="disabledButton"/>

## 调整尺寸
除了默认的大小，你可以使用 **size** 属性配置尺寸，可使用 **small**           

<sizeButton/>
<show-code compName="button" demoName="sizeButton"/>



## Button 属性

| 参数   | 说明 | 类型 | 默认值 |
|------|--| ---- | ------ |
| type |  按钮类型, **primary** **success** **error** **warning** **info** | String | default  |
| disabled | 按钮是否为禁用状态 | Boolean  | false  |
| size |  按钮尺寸, 可选 **small** | String  | -  |
