import { defineComponent } from 'vue'

import stores from './store'

import ButtonPrimary from '../../components/1-ButtonPrimary/ButtonPrimary.vue'

export default defineComponent({
  name: 'AuthHuggy',
  data() {
    return {
      cursor: false,
      delay: (ms: number) => new Promise((res) => setTimeout(res, ms))
    }
  },

  components: {
    ButtonPrimary
  },

  props: {
    clientId: { type: String },
    urlCallback: { type: String }
  },

  methods: {
    async RedirectAuthHuggy() {
      this.cursor = true
      await this.delay(1000)
      stores.dispatch('ActionRedirectAuthHuggy', {
        clientId: this.clientId,
        urlCallback: this.urlCallback
      })

      this.cursor = false
    }
  }
})
