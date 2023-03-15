/**
 * @author: 黄小林
 * @Date: 2023/3/10
 * @Desc: 无
 **/
import { computed, defineComponent, provide } from 'vue'
import '../style/row.scss'
export const rowGutter = Symbol()

const props = {
  tag: {
    type: String,
    default: 'div'
  },
  gutter: {
    type: Number,
    default: 0
  },
  justify: {
    type: String,
    default: 'start'
  },
  align: {
    type: String,
    default: 'top'
  }
}

const ARow = defineComponent({
  name: 'ARow',
  props: props,
  setup(props, { slots }) {
    provide(
      rowGutter,
      computed(() => props.gutter)
    )
    // 间距
    const style = computed(() => {
      const styles = {
        'margin-left': '',
        'margin-right': ''
      }
      if (props.gutter) {
        styles['margin-left'] = `${props.gutter / 2}px`
        styles['margin-right'] = styles['margin-left']
      }
      return styles
    })
    // justify align
    const flex = computed(() => {
      const justifyClass = `justify-${props.justify}`
      const alignClass = `items-${props.align}`
      return [justifyClass, alignClass]
    })
    return () => (
      <props.tag class={['a-row', ...flex.value]} style={style.value}>
        {slots.default?.()}
      </props.tag>
    )
  }
})

export default ARow
