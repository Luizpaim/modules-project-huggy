import { defineComponent } from 'vue'
import './style.scss'

export default defineComponent({
  name: 'ButtonEdit',

  props: {
    label: { type: String },
    cursor: { type: Boolean },
    image: { type: String },
    disabled: { type: Boolean },
    onClick: { type: Function as any }
  }
})
