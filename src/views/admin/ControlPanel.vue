<template lang="pug">
  PrimaryLayout
    template(v-slot:header)
      h3.mx-auto Administrator Dashboard
    template(v-slot:body)
      v-card
        v-card-title Dossiers
        v-card-text
          v-text-field(v-model="dossier.name" label="Name")
          v-text-field(v-model="dossier.age" label="Age")
          v-text-field(v-model="dossier.rank" label="Rank")
          v-text-field(v-model="dossier.service" label="Years of Service")
          v-checkbox(v-model="dossier.public")
        v-card-actions
          v-spacer
          v-btn(text color="green darken-4" @click="addDossier") Add
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
import axios from "axios"

export default {
  components: { PrimaryLayout },
  data: () => ({
    dossier: {}
  }),
  methods:{
    addDossier(){
      axios
      .post(`/dossiers.json?auth=${this.$store.state.idToken}`, this.dossier)
      .then((resp) => { console.log(resp), this.reset(); })
      .catch(error => console.log("error"))
    }
  }
}

</script>