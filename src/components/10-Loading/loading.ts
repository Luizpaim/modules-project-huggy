import { defineComponent } from 'vue'
import './style.scss'

export default defineComponent({
  name: 'ProgressSpinnerPers',
  props: {
    active: { type: Boolean },
    loadingTable: { type: Boolean }
  }
})
