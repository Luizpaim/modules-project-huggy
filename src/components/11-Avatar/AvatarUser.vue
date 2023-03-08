<template>
  <div class="avatar">
    <img v-if="src" :src="src" />
    <div v-else class="initials">
      <span>{{ initials }}</span>
    </div>
  </div>
</template>
<script src="./avatar"></script>
