<template lang="pug">
  v-dialog
    template(v-slot:activator="{ on }")
      v-card(v-on="on")
        v-card-title {{ dossier.name }}
        v-card-text
          v-img(:src="`/src/assets/images/${dossier.image}`")
    v-card
      v-card-title {{ dossier.name }}
      v-card-text 
        v-img(:src="`/src/assets/images/${dossier.image}`" contain)
</template>

<script>
import axios from "axios"
import { db } from "/src/db"

const dossiers = db.ref('dossiers')

export default {
  props: {
    id: { type: [String, Number], default: null }
  },
  data: () => ({
    dossier: null
  }),
  beforeMount(){
    db.ref('dossiers/' + this.id).once('value', snapshot => {
      console.log("SS", snapshot.val())
      const document = snapshot.val()
      console.log("DOCUMENT", document);
      this.dossier = document
      })

    }
}
</script>
