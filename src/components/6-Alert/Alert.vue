<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div v-if="show" :class="classes">
    <div class="message"><slot></slot></div>

    <div><button class="close" @click="hide">&times;</button></div>
  </div>
</template>
<script src="./alert.ts"></script>
