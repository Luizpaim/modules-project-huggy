<template>
  <button :disabled="disabled" class="btnPrimary" @click="onClick" :class="{ cursor: cursor }">
    <img class="iconBtn" v-if="image" :src="image" alt="icon" />{{ label }}
  </button>
</template>
<script src="./button.ts"></script>
