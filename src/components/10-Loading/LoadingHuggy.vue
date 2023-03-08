<template>
  <div class="progress" v-if="active" :class="{ table: loadingTable }">
    <img src="https://static.huggy.cloud/img/loadinghuggy.gif" alt="loading" />
  </div>
</template>
<script src="./loading.ts"></script>
