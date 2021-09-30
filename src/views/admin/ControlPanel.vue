<template lang="pug">
  PrimaryLayout
    template(v-slot:header)
      h3.mx-auto Administrator Dashboard
    template(v-slot:body)
      v-card
        v-card-title Dossiers
        v-card-text
          v-text-field(v-model="dossier.name" label="Name" outlined)
          v-text-field(v-model="dossier.age" label="Age" outlined)
          v-text-field(v-model="dossier.rank" label="Rank" outlined)
          v-text-field(v-model="dossier.service" label="Years of Service" outlined)
          v-text-field(v-model="dossier.position" label="Position" outlined)
          v-checkbox(v-model="dossier.public" label="Public?" outlined)
        v-card-actions
          v-spacer
          v-btn(text color="green darken-4" @click="addDossier") Add Dossier
      v-card.my-2
        v-card-title Excursion Reports
        v-card-text
          v-text-field(v-model="excursion.date" label="Excursion Date" outlined)
          v-textarea(v-model="excursion.body" label="Report . . ." outlined)
        v-card-actions
          v-spacer
          v-btn(text color="green darken-4" @click="addExcursion") Add Excursion Report
      v-card
        v-card-title Feedback Notes
        v-card-text
          v-textarea(v-model="feedbackNote.body" label="Feedback. . ." outlined)
          v-row 
            v-col(cols="4")
              v-text-field(type="number" v-model="feedbackNote.cleanup" label="Cleanup" outlined)
            v-col(cols="4")
              v-text-field(type="number" v-model="feedbackNote.interaction" label="Interaction" outlined)
            v-col(cols="4")
              v-text-field(type="number" v-model="feedbackNote.safety" label="Safety" outlined)
        v-card-actions
          v-spacer
          v-btn(text color="green darken-4" @click="addFeedbackNote") Add Feedback Note
</template>

<script>
import PrimaryLayout from "/src/views/layouts/Primary"
import axios from "axios"

export default {
  components: { PrimaryLayout },
  data: () => ({
    dossier: {},
    excursion: {},
    feedbackNote: {}
  }),
  methods:{
    addDossier(){
      axios
        .post(`/dossiers.json?auth=${this.$store.state.idToken}`, this.dossier)
        .then((resp) => { 
          console.log(resp), 
          this.reset(); 
          this.$eventHub.$emit("setSnack", "Dossier added.")
        })
        .catch(error => console.log(error))
    },
    addExcursion(){
      axios
        .post(`/excursions.json?auth=${this.$store.state.idToken}`, this.excursion)
        .then((resp) => { 
          console.log(resp), 
          this.reset(); 
          this.$eventHub.$emit("setSnack", "Excuriosn Report added.")  
        })
        .catch(error => { console.log(error)})
    },
    addFeedbackNote(){
      this.feedbackNote.time = this.getFutureDate();
      axios 
        .post(`/feedbacknotes.json?auth=${this.$store.state.idToken}`, this.feedbackNote)
        .then((resp) => { 
          console.log(resp), 
          this.reset() 
          this.$eventHub.$emit("setSnack", "Excuriosn Report added.")
        })
        .catch(error => { console.log(error) })
    }
  }
}

</script>