<template lang="pug">
  PrimaryLayout
    template(v-slot:header)
      h3.mx-auto Administrator Dashboard
    template(v-slot:body)
      v-card
        v-card-title Dossiers
        v-card-text
        v-card-actions
      v-card
        v-card-title Excursion Reports
        v-card-text
        v-card-actions
      v-card
        v-card-title Feedback Notes
        v-card-text
        v-card-actions
</template>

<script>
import PrimaryLayout from "/src/views/layouts/Primary"

export default {
  components: { PrimaryLayout }
}

</script>