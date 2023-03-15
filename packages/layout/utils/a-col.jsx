/**
 * @author: 黄小林
 * @Date: 2023/3/10
 * @Desc: 无
 **/
import { computed, defineComponent, inject} from 'vue'
export const rowGutter = Symbol()
const props = {
  tag: {
    type: String,
    default: 'div'
  },
  span: {
    type: Number,
    default: 24
  },
  offset: {
    type: Number,
    default: 0
  },
  pull: {
    type: Number,
    default: 0
  },
  push: {
    type: Number,
    default: 0
  }
}

const ACol = defineComponent({
  name: 'ACol',
  props: props,
  setup(props, { slots }) {
    const gutter = inject(
      rowGutter,
      computed(() => 0)
    )
    const getPercentage = (x) => x * 100
    const style = computed(() => {
      let all = {}
      // gutter 边距
      if (gutter.value) {
        const padding = {
          paddingLeft: `${gutter.value / 2}px`,
          paddingRight: `${gutter.value / 2}px`
        }
        all = { ...all, ...padding }
      }
      // 自身站位
      if (props.span) {
        const marginwidth = {
          maxWidth: `${getPercentage(props.span / 24)}%`,
          flexBasis: `${getPercentage(props.span / 24)}%`
        }
        all = { ...all, ...marginwidth }
      }
      // offset
      if (props.offset) {
        const offest = {
          marginLeft: `${getPercentage(props.offset / 24)}%`
        }
        all = { ...all, ...offest }
      }
      // 左右偏移
      if (props.push || props.pull) {
        const pushPull = {
          position: 'relative'
        }
        if (props.push) pushPull.left = `${getPercentage(props.push / 24)}%`
        if (props.pull) pushPull.right = `${getPercentage(props.pull / 24)}%`
        all = { ...all, ...pushPull }
      }
      return all
    })
    return () => (
      <props.tag class="a-col" style={style.value}>
        {slots.default?.()}
      </props.tag>
    )
  }
})

export default ACol
