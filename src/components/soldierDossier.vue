<template lang="pug">
  v-dialog(width="500" height="300" v-model="dialog")
    template(v-slot:activator="{ on }")
      v-card.ma-2(tile width="250" height="250" v-on="on")
        v-card-title
          .header.mx-auto {{ dossier.name }}
        v-card-text
          v-img(v-if="dossier.image" contain max-height="200" max-width="150" :src="`@/assets/images/${dossier.image}.jpeg`")
          v-img.mx-auto(v-else contain max-height="200" max-width="150" src="@/assets/images/jacob.jpeg")
          .header.mt-2.text-center {{ dossier.rank }}
    v-card(tile)
      v-card-title 
        .h5 {{ dossier.name }}
        v-spacer
        .h6 {{ dossier.rank }}
      v-card-text
        v-container.mx-auto
          v-row.mx-auto
            v-col
              v-img(v-if="dossier.image" :src="`@/assets/images/${dossier.image}.jpeg`" contain)
              v-img(v-else contain max-height="200" max-width="150" src="@/assets/images/jacob.jpeg")
            v-col
              v-row.py-1(v-for="(item, key) in dossier" no-gutters)
                v-col
                  .body-2.font-weight-black {{ key | capitalize }}
                v-col.text-right
                  .body-2 {{ item | capitalize }}
      v-card-actions 
        v-btn(text color="red darken-4" @click="dialog = false") Close

</template>

<script>
// import axios from "axios"
import { db } from "/src/db"

// const dossiers = db.ref('dossiers')
export default {
  props: {
    id: { type: [String, Number], default: null }
  },
  data: () => ({
    dialog: false,
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
