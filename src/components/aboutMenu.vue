<template lang="pug">
  v-menu(dark transition="slide-y-transition" bottom)
    template(v-slot:activator="{ on }")
      v-btn(v-on="on" text) About
    v-list
      v-list-item
        v-list-item-content About Alumni Multinational
      v-list-item(:to="{ name: 'PublicHistory' }") 
        v-list-item-content History
      v-list-item(:to="{ name: 'PublicStatus' }")
        v-list-item-content World Status
      v-list-item(:to="{ name: 'PublicDossiers' }")
        v-list-item-content Public Dossiers
</template>
