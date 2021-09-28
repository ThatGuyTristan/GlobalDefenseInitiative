<template lang="pug">
  v-card
    v-card-title 
      h3.mx-auto Soldier Dossiers
    v-card-text
</template>

<script>
import axios from "axios"

export default {
  data: () => ({
    items: []
  }),
  methods: {
    load(){
      axios
        .get(`/dossiers.json?auth=${this.$store.state.idToken}`)
        .then((resp) => {
          let items = []
          for(let result in resp.data){
            items.push(resp.data[result])
          }
          this.items = items;
        })
        .catch(error => console.log(error))
    }
  }
}
</script>
