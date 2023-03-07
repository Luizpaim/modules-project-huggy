import { defineComponent } from 'vue'
import './style.scss'

export default defineComponent({
  name: 'AlertMessage',

  props: {
    type: { type: String, default: '' },
    dismissible: { type: Boolean, default: true }
  },

  data() {
    return {
      show: true
    }
  },
  computed: {
    classes(): string {
      return ['alert', `alert-${this.type}`, this.dismissible ? 'alert-dismissible' : ''].join(' ')
    }
  },
  methods: {
    hide(): void {
      this.show = false
    }
  }
})
