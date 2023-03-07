import { defineComponent } from 'vue'

import stores from './store'
import type { IContact } from './services/Contacts'

import ButtonPrimary from '../../components/1-ButtonPrimary/ButtonPrimary.vue'
import InputText from '../../components/2-InputText/InputText.vue'
import InputPhone from '../../components/3-InputPhone/InputPhone.vue'
import InputMobile from '../../components/4-InputMobile/InputMobile.vue'
import ButtonSecodary from '../../components/5-ButtonSecodary/ButtonSecodary.vue'
import Alert from '../../components/6-Alert/Alert.vue'

import iconPlus from '../../assets/image/iconPlus.png'
import './style.scss'

export default defineComponent({
  name: 'AddNewContact',

  props: {
    token: { type: String, required: true }
  },

  data() {
    return {
      cursor: false,
      iconPlus: iconPlus,
      modalClose: true,
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
      } as IContact
    }
  },

  components: {
    ButtonPrimary,
    InputText,
    InputPhone,
    InputMobile,
    ButtonSecodary,
    Alert
  },

  computed: {
    validateField(): boolean {
      return (
        this.payload.name.trim() === '' ||
        this.payload.email.trim() === '' ||
        this.payload.phone.trim() === '' ||
        this.payload.mobile.trim() === ''
      )
    }
  },
  emits: ['addNewContact'],
  methods: {
    showModal() {
      const modal = document.getElementById('newContact') as HTMLDialogElement
      modal.showModal()
    },

    closeModal() {
      this.payload.name = ''
      this.payload.email = ''
      this.payload.address = ''
      this.payload.district = ''
      this.payload.mobile = ''
      this.payload.phone = ''
      this.payload.state = ''
      const modal = document.getElementById('newContact') as HTMLDialogElement
      modal.close()
    },

    saveContact() {
      const phone = this.payload.phone.replace(/\D/g, '')
      const mobile = this.payload.mobile.replace(/\D/g, '')

      this.payload.phone = phone
      this.payload.mobile = mobile

      stores
        .dispatch('ActionPostContacts', {
          payload: this.payload,
          token: this.token
        })
        .then(async () => {
          this.showMessage('success', 'Contato salvo com sucesso!')
          this.$emit('addNewContact')
          await this.delay(1000)
          this.closeModal()
        })
        .catch((error) => {
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
