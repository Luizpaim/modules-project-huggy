<template>
  <button :disabled="disabled" class="btnDelete" @click="onClick" :class="{ cursor: cursor }">
    <img src="@/assets/image/iconDelete.png" alt="" />
  </button>
</template>
<script src="./button.ts"></script>
