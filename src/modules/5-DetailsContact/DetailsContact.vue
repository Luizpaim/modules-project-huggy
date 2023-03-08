<template>
  <dialog id="detailsContact" class="dialogDetails">
    <LoadingHuggy :active="active" :loadingTable="true" />
    <header class="titleDialogDetails">
      <div class="avatar"><Avatar :src="this.contactDetails.photo" :name="this.contactDetails.name" /></div>
      <div class="title">
        <h2>{{ this.contactDetails.name }}</h2>
      </div>
      <div class="btnActions">
        <div class="button">
          <ButtonEdit :onClick="openEditDialog" />
          <EditContact @editContact="getContact()" :id="this.idContact" :token="this.token" />
        </div>

        <div class="button">
          <DeleteContact :id="this.id" :token="this.token" @deleteContact="closeModal()" />
        </div>
        <div class="button">
          <button class="button" :onClick="closeModal">
            <img src="@/assets/image/iconClose.png" alt="" srcset="" />
          </button>
        </div>
      </div>
    </header>
    <main class="content">
      <div class="label">
        <div class="labelTitle">Email</div>
        <div class="labelText">{{ this.contactDetails.email }}</div>
      </div>
      <div class="label">
        <div class="labelTitle">Endereço</div>
        <div class="labelText">{{ this.contactDetails.address }}</div>
      </div>
      <div class="label">
        <div class="labelTitle">Bairro</div>
        <div class="labelText">{{ this.contactDetails.district }}</div>
      </div>
      <div class="label">
        <div class="labelTitle">Cidade</div>
        <div class="labelText">{{ this.contactDetails.city }}</div>
      </div>
      <div class="label">
        <div class="labelTitle">Estado</div>
        <div class="labelText">{{ this.contactDetails.state }}</div>
      </div>
    </main>
  </dialog>
</template>
<script src="./DetailsContact.ts"></script>
