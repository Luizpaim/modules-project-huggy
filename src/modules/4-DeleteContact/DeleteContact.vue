<template>
  <dialog id="deleteContact" class="dialogDelete">
    <header class="titleDialog">
      <h2>Excluir este contato?</h2>
    </header>
    <Alert v-if="alert.visible" :dismissible="false" :type="alert.type">{{ alert.message }}</Alert>
    <footer class="btnFooter">
      <div class="rowBtn">
        <div class="btnCancel">
          <ButtonSecodary label="Cancelar" :onClick="closeModal" />
        </div>
        <div class="btnSave">
          <ButtonTertiary label="Excluir" :onClick="deleteContact" />
        </div>
      </div>
    </footer>
  </dialog>
</template>
<script src="./DeleteContact.ts"></script>
