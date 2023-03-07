<template>
  <span class="spanInput">
    <label class="labelInput" :for="label">{{ label }}</label>
    <input
      :id="label"
      class="inputText"
      :class="{ notObligatory: notObligatory, invalid: !inputValue }"
      :type="type"
      v-model="inputValue"
      @input="updateValue"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :minlength="minlength"
    />
  </span>
  <span :class="{ notMessage: notObligatory, invalidMessage: !inputValue }" class="spanMessage"
    >Campo obrigatório</span
  >
</template>
<script src="./input.ts"></script>
