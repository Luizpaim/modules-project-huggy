<template>
  <span class="spanInput">
    <label class="labelInput" :for="label">{{ label }}</label>
    <input
      :id="label"
      class="inputPhone"
      :class="{ notObligatory: notObligatory, invalid: !inputValue }"
      :type="type"
      v-model="inputValue"
      @input="updateValue"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :minlength="minlength"
      v-mask="'(##) ####-####'"
    />
  </span>
  <span :class="{ invalidMessage: !inputValue }" class="spanMessage">Campo obrigatório</span>
</template>
<script src="./input.ts"></script>
