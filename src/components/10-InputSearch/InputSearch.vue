<template>
  <span class="spanInputSearch">
    <img src="@/assets/image/iconSearch.png" alt="" />
    <input
      id="search"
      class="inputSearch"
      :type="type"
      v-model="inputValue"
      @input="updateValue"
      :placeholder="placeholder"
    />
  </span>
</template>
<script src="./input.ts"></script>
