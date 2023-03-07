import { defineComponent } from 'vue'
import './style.scss'

export default defineComponent({
  name: 'ButtonPrimary',

  props: {
    label: { type: String, required: true },
    cursor: { type: Boolean },
    image: { type: String },
    disabled: { type: Boolean },
    onClick: { type: Function as any }
  }
})
