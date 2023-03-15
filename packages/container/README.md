<script setup>
import baseContainer from './demo/baseContainer.vue';
import asideContainerShow from './demo/asideContainerShow.vue';
import headerContainerShow from './demo/headerContainerShow.vue';
import headerFooterContainerShow from './demo/headerFooterContainerShow.vue';
import asideAllContainerShow from './demo/asideAllContainerShow.vue';
</script>

# Container 布局容器
用于布局的容器组件，方便快速搭建页面的基本结构：<br>
`<a-container>`：外层容器。 当子元素中包含 `<a-header>` 或 `<a-footer>` 时，全部子元素会垂直上下排列， 否则会水平左右排列。<br>

`<a-header>`：顶栏容器。<br>

`<a-aside>`：侧边栏容器。<br>

`<a-main>`：主要区域容器。<br>

`<a-footer>`：底栏容器。<br>
> **Tip**<br>
> 以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。 此外， `<a-container>`的直接子元素必须是后四个组件中的一个或多个。 后四个组件的亲元素必须是一个 `<a-container>`

## 常见页面布局

<baseContainer />
<show-code compName="container" demoName="baseContainer"/>

<br>
<br>


<asideContainerShow/>
<show-code compName="container" demoName="asideContainerShow"/>

<br>
<br>

<headerContainerShow/>
<show-code compName="container" demoName="asideContainerShow"/>


<br>
<br>

<headerFooterContainerShow/>
<show-code compName="container" demoName="headerFooterContainerShow"/>
<br>
<br>

<asideAllContainerShow />
<show-code compName="container" demoName="asideAllContainerShow"/>

## Container 属性
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `a-header` 或 `a-footer` 时为 vertical，否则为 horizontal |

## Header 属性
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| height | 顶栏高度 | string | -- | 64px |

## Aside  属性
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| width | 侧边栏宽度 | string | -- | 240px |

## Footer 属性
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| height | 底栏高度 | string | -- | 64px |

