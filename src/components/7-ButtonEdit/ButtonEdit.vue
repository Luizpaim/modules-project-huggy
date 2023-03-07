<template>
  <button :disabled="disabled" class="btnEdit" @click="onClick" :class="{ cursor: cursor }">
    <img src="@/assets/image/iconEdit.png" alt="" />
  </button>
</template>
<script src="./button.ts"></script>
