import { defineComponent, ref, watch } from 'vue'

import { mask } from 'vue-the-mask'

import './style.scss'

export default defineComponent({
  name: 'InputPhone',

  directives: { mask },

  props: {
    value: {
      type: String
    },
    label: { type: String, required: true },
    type: { type: String, required: true },
    placeholder: { type: String, required: true },
    maxlength: { type: String },
    minlength: { type: String },
    notObligatory: { type: Boolean },
    onInput: {
      type: Function as any,
      required: true
    },
    clean: {
      type: Boolean
    }
  },

  setup(props) {
    const inputValue = ref(props.value)

    watch(
      () => props.value,
      (val) => {
        inputValue.value = val
      }
    )

    watch(
      () => inputValue.value,
      (val) => {
        props.onInput(val)
      }
    )

    watch(
      () => props.clean,
      (isClean) => {
        if (!isClean) {
          inputValue.value = ''
        }
      }
    )

    return {
      inputValue
    }
  }
})
