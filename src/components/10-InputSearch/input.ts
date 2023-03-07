import { defineComponent, ref, watch } from 'vue'

import './style.scss'

export default defineComponent({
  name: 'InputSearch',
  props: {
    value: {
      type: String
    },
    type: { type: String, required: true },
    placeholder: { type: String, required: true },
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
