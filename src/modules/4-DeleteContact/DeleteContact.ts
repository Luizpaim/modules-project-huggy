import { defineComponent } from 'vue'

import stores from './store'

import ButtonSecodary from '../../components/5-ButtonSecodary/ButtonSecodary.vue'
import Alert from '../../components/6-Alert/Alert.vue'
import ButtonDelete from '../../components/8-ButtonDelete/ButtonDelete.vue'
import ButtonTertiary from '../../components/9-ButtonTertiary/ButtonTertiary.vue'

import './style.scss'
import type { IContact } from './services/Contacts'

export default defineComponent({
  name: 'DeleteContact',

  props: {
    token: { type: String, required: true },
    id: { type: String, required: true }
  },

  data() {
    return {
      cursor: false,
      alert: {
        message: '',
        type: '',
        visible: false
      },
      contactDelete: {} as IContact,
      delay: (ms: number) => new Promise((res) => setTimeout(res, ms))
    }
  },

  components: {
    ButtonSecodary,
    Alert,
    ButtonDelete,
    ButtonTertiary
  },
  watch: {
    async id() {
      await this.getContact()
    }
  },

  emits: ['deleteContact'],
  methods: {
    closeModal() {
      const modal = document.getElementById('deleteContact') as HTMLDialogElement
      modal.close()
    },
    async getContact() {
      if (this.id) {
        await stores
          .dispatch('ActionGetByIdContact', {
            id: Number(this.id),
            token: this.token
          })
          .then(() => {
            if (stores.state.contact) this.contactDelete = stores.state.contact
          })
          .catch((error) => {
            this.showMessage('danger', error.response.data.reason)
          })
      }
    },
    async deleteContact() {
      await stores
        .dispatch('ActionDeleteContact', {
          id: Number(this.id),
          token: this.token
        })
        .then(async () => {
          this.showMessage('success', 'Contato excluido com sucesso!')
            .then(() => {
              this.$emit('deleteContact')
            })
            .finally(() => {
              this.closeModal()
            })
        })
        .catch(async (error) => {
          this.showMessage('danger', error.response.data.reason).finally(() => {
            this.closeModal()
          })
        })
    },

    async showMessage(type: string, message: string) {
      switch (type) {
        case 'success':
          this.alert.type = 'success'
          this.alert.message = message
          this.alert.visible = true
          await this.delay(3000)
          this.alert.visible = false
          break

        case 'danger':
          this.alert.type = 'danger'
          this.alert.message = message
          this.alert.visible = true
          await this.delay(3000)
          this.alert.visible = false
          break
      }
    }
  }
})
