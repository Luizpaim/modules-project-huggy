import { defineComponent } from 'vue'

import './style.scss'

export default defineComponent({
  name: 'AvatarUser',

  props: {
    src: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },

  computed: {
    initials() {
      const words = this.name.split(' ')
      if (words.length === 1) {
        return words[0].charAt(0).toUpperCase()
      } else {
        return words[0].charAt(0).toUpperCase() + words[1].charAt(0).toUpperCase()
      }
    }
  }
})
