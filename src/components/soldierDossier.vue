<template lang="pug">
  v-dialog(width="500" height="300" v-model="dialog")
    template(v-slot:activator="{ on }")
      v-card.ma-2(tile width="250" height="250" v-on="on")
        v-card-title
          .header.mx-auto {{ dossier.name }}
        v-card-text
          v-img.mx-auto(contain max-height="150" max-width="150" :src="require(`@/assets/images/personnel/${imgUrl}`)")
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
              v-img(:src="require(`@/assets/images/personnel/${imgUrl}`)" contain)
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
import { db } from "/src/db"

export default {
  props: {
    id: { type: [String, Number], default: null }
  },
  data: () => ({
    dialog: false,
    dossier: null
  }),
  computed: {
    imgUrl(){
      let url = this.dossier.image ? this.dossier.image + '.jpeg' : 'unknown.jpeg'
      return url
    }
  },
  beforeMount(){
    db.ref('dossiers/' + this.id).once('value', snapshot => {
      const document = snapshot.val()
      this.dossier = document
      })
    }
}
</script>
