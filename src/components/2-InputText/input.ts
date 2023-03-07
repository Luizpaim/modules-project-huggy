import { defineComponent, ref, watch } from 'vue'

import './style.scss'

export default defineComponent({
  name: 'InputText',
  props: {
    value: {
      type: String,
      required: true
    },
    label: { type: String },
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

    return {
      inputValue
    }
  }
})
