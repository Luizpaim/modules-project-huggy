<template>
  <ButtonPrimary
    label="Fazer login com a Huggy"
    :onClick="RedirectAuthHuggy"
    :cursor="cursor"
    v-on:update:cursor="cursor = $event"
  />
</template>
<script src="./authHuggy.ts"></script>
