/* eslint-disable vue/no-mutating-props */
/* eslint-disable vue/no-setup-props-destructure */
import { defineComponent } from 'vue'
import './style.scss'

export default defineComponent({
  name: 'ButtonTertiary',

  props: {
    label: { type: String },
    cursor: { type: Boolean },
    onClick: { type: Function as any }
  }
})
