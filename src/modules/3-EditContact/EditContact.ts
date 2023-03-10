import { defineComponent } from 'vue'

import stores from './store'
import type { IContact } from './services/Contacts'

import ButtonPrimary from '../../components/1-ButtonPrimary/ButtonPrimary.vue'
import InputText from '../../components/2-InputText/InputText.vue'
import InputPhone from '../../components/3-InputPhone/InputPhone.vue'
import InputMobile from '../../components/4-InputMobile/InputMobile.vue'
import ButtonSecodary from '../../components/5-ButtonSecodary/ButtonSecodary.vue'
import Alert from '../../components/6-Alert/Alert.vue'
import LoadingHuggy from '../../components/10-Loading/LoadingHuggy.vue'

import './style.scss'

export default defineComponent({
  name: 'EditContact',

  props: {
    token: { type: String, required: true },
    id: { type: String, required: true }
  },

  data() {
    return {
      alert: {
        message: '',
        type: '',
        visible: false
      },
      delay: (ms: number) => new Promise((res) => setTimeout(res, ms)),
      payload: {
        name: '',
        email: '',
        address: '',
        district: '',
        mobile: '',
        phone: '',
        state: ''
      } as IContact,
      active: false,
      activeButton: true
    }
  },

  components: {
    ButtonPrimary,
    InputText,
    InputPhone,
    InputMobile,
    ButtonSecodary,
    Alert,
    LoadingHuggy
  },

  computed: {
    validateField(): boolean {
      return (
        String(this.payload.name).trim() === '' ||
        String(this.payload.email).trim() === '' ||
        String(this.payload.phone).trim() === '' ||
        String(this.payload.mobile).trim() === '' ||
        this.activeButton === false
      )
    }
  },

  watch: {
    async id() {
      this.active = true
      await this.getContact()
      this.active = false
    }
  },
  emits: ['editContact'],

  methods: {
    async getContact() {
      if (this.id) {
        await stores
          .dispatch('ActionGetByIdContact', {
            id: Number(this.id),
            token: this.token
          })
          .then(async () => {
            if (stores.state.contact) {
              this.payload.name = stores.state.contact.name
              this.payload.email = stores.state.contact.email
              this.payload.address = stores.state.contact.address
              this.payload.district = stores.state.contact.district
              this.payload.mobile = stores.state.contact.mobile
              this.payload.phone = stores.state.contact.phone
              this.payload.state = stores.state.contact.state
            }
          })
          .catch((error) => {
            this.showMessage('danger', error.response.data.reason)
          })
      }
    },

    closeModal() {
      if (stores.state.contact) {
        this.payload.name = stores.state.contact.name
        this.payload.email = stores.state.contact.email
        this.payload.address = stores.state.contact.address
        this.payload.district = stores.state.contact.district
        this.payload.mobile = stores.state.contact.mobile
        this.payload.phone = stores.state.contact.phone
        this.payload.state = stores.state.contact.state
      }
      const modal = document.getElementById('editContact') as HTMLDialogElement
      modal.close()
    },

    async saveContact() {
      this.active = true
      this.activeButton = false
      const phone = this.payload.phone.replace(/\D/g, '')
      const mobile = this.payload.mobile.replace(/\D/g, '')

      this.payload.phone = phone
      this.payload.mobile = mobile

      await stores
        .dispatch('ActionPutContact', {
          payload: this.payload,
          id: Number(this.id),
          token: this.token
        })
        .then(async () => {
          this.active = false
          this.showMessage('success', 'Contato salvo com sucesso!')
            .then(() => {
              this.active = true
              this.$emit('editContact')
            })
            .finally(() => {
              this.closeModal()
              this.active = false
              this.activeButton = true
            })
        })
        .catch((error) => {
          this.active = false
          this.activeButton = true
          this.showMessage('danger', error.response.data.reason)
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
    },

    updateValueName(val: string) {
      this.payload.name = val
    },
    updateValueEmail(val: string) {
      this.payload.email = val
    },
    updateValueAddress(val: string) {
      this.payload.address = val
    },
    updateValueDistrict(val: string) {
      this.payload.district = val
    },
    updateValueMobile(val: string) {
      this.payload.mobile = val
    },
    updateValuePhone(val: string) {
      this.payload.phone = val
    },
    updateValueState(val: string) {
      this.payload.state = val
    }
  }
})
