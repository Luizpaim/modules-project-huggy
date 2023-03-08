<template>
  <dialog id="newContact" class="dialog">
    <LoadingHuggy :active="active" :loadingTable="true" />
    <header class="titleDialog">
      <h2>Adicionar novo contato</h2>
    </header>
    <main class="contentDialog">
      <div class="text">
        <InputText
          :value="this.payload.name"
          label="Nome"
          type="text"
          placeholder="Nome completo"
          @input="updateValueName"
          minlength="3"
          maxlength="50"
        />
      </div>

      <div class="text">
        <InputText
          :value="this.payload.email"
          label="Email"
          type="email"
          placeholder="Email"
          @input="updateValueEmail"
          minlength="50"
          maxlength="150"
        />
      </div>
      <div class="phone">
        <InputPhone
          :value="this.payload.phone"
          label="Telefone"
          type="text"
          placeholder="Telefone"
          @input="updateValuePhone"
          minlength="14"
          maxlength="14"
        />
      </div>
      <div class="phone">
        <InputMobile
          :value="this.payload.mobile"
          label="Celular"
          type="text"
          placeholder="Celular"
          @input="updateValueMobile"
          minlength="16"
          maxlength="16"
        />
      </div>
      <div class="address">
        <InputText
          :value="this.payload.address"
          label="Endereço"
          type="text"
          placeholder="Endereço"
          @input="updateValueAddress"
          minlength="50"
          maxlength="300"
          :notObligatory="true"
        />
      </div>
      <div class="rowAddress">
        <div class="district">
          <InputText
            :value="this.payload.district"
            label="Bairro"
            type="text"
            placeholder="Bairro"
            @input="updateValueDistrict"
            minlength="50"
            maxlength="150"
            :notObligatory="true"
          />
        </div>
        <div class="state">
          <InputText
            :value="this.payload.state"
            label="Estado"
            type="text"
            placeholder="Estado"
            @input="updateValueState"
            minlength="10"
            maxlength="30"
            :notObligatory="true"
          />
        </div>
      </div>
      <Alert v-if="alert.visible" :dismissible="false" :type="alert.type">{{
        alert.message
      }}</Alert>
    </main>
    <footer class="btnFooter">
      <div class="rowBtn">
        <div class="btnCancel">
          <ButtonSecodary label="Cancelar" :onClick="closeModal" />
        </div>
        <div class="btnSave">
          <ButtonPrimary
            :disabled="validateField"
            label="Salvar"
            :onClick="saveContact"
            :cursor="validateField"
          />
        </div>
      </div>
    </footer>
  </dialog>
  <ButtonPrimary
    :disabled="cursor"
    :image="iconPlus"
    label="Adicionar contato"
    :onClick="showModal"
  />
</template>
<script src="./addNewContact.ts"></script>
