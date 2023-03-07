import { defineComponent } from 'vue'

import stores from './store'

import ButtonSecodary from '../../components/5-ButtonSecodary/ButtonSecodary.vue'
import Alert from '../../components/6-Alert/Alert.vue'
import ButtonDelete from '../../components/8-ButtonDelete/ButtonDelete.vue'
import ButtonTertiary from '../../components/9-ButtonTertiary/ButtonTertiary.vue'
import EditContact from '../../modules/3-EditContact/EditContact.vue'
import DeleteContact from '../../modules/4-DeleteContact/DeleteContact.vue'
import ButtonEdit from '../../components/7-ButtonEdit/ButtonEdit.vue'

import './style.scss'
import type { IContact } from './services/Contacts'

export default defineComponent({
  name: 'DetailsContact',

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
      delay: (ms: number) => new Promise((res) => setTimeout(res, ms)),
      contactDetails: {} as IContact | null,
      idContact: ''
    }
  },

  components: {
    ButtonSecodary,
    Alert,
    ButtonDelete,
    ButtonTertiary,
    EditContact,
    DeleteContact,
    ButtonEdit
  },
  watch: {
    async id() {
      await this.getContact()
    }
  },

  emits: ['detailsContact'],

  methods: {
    openEditDialog() {
      this.idContact = this.id
      const modal = document.getElementById('editContact') as HTMLDialogElement
      modal.showModal()
    },
    async closeModal() {
      this.$emit('detailsContact')
      await this.delay(1000)
      const modal = document.getElementById('detailsContact') as HTMLDialogElement
      modal.close()
    },

    async getContact() {
      if (this.id) {
        await stores
          .dispatch('ActionGetByIdContact', {
            id: Number(this.id),
            token: this.token
          })
          .then(async () => {
            if (stores.state.contact) {
              this.contactDetails = stores.state.contact
            }
          })
          .catch((error) => {
            this.showMessage('danger', error.response.data.reason)
          })
      }
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