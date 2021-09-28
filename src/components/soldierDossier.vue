<template lang="pug">
  v-dialog
    template(v-slot:activator="{ on }")
      v-card(v-on="on")
        v-card-title {{ item.name }}
        v-card-text
          v-img(:src="`/src/assets/images/${item.image}`")
    v-card
      v-card-title {{ item.name }}
      v-card-text 
        v-img(:src="`/src/assets/images/${item.image}`" contain)
</template>

<script>
import axios from "axios"
import { getDatabse, ref, onValue } from "firebase/database"

export default {
  props: {
    id: { type: [String, Number], default: null }
  },
  data: () => ({
    item: null
  }),
  methods: {
    load(){
      console.log("Hello")
      // const db = this.getDatabase();
      // const dbRef = ref(db, `dossiers/` + this.id)
      // onValue(dbRef, (snapshot) => {
      //   const data = snapshot.val();
      //   console.log("data", data)
      // })
    }
  },
  beforeMount(){
    this.load();
  }
}

</script>
