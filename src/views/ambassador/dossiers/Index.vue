<template lang="pug">
  v-card
    v-card-title
      div.text-center.mx-auto 
        h3.mx-auto Soldier Dossiers
        .caption All Dossiers available to registered Ambassadors
    v-card-text
      v-row(justify="center" no-gutters)
        Dossier(
          v-for="(item, i) in items"
          :id="item.id"
          :key="i"   
          )
</template>

<script>
import axios from "axios"

export default {
  components: {
    Dossier: () => import("@/components/soldierDossier.vue")
  },
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
            let item = resp.data[result]
            item.id = result
            items.push(item)
          }
          console.log(items)
          this.items = items;
        })
        .catch(error => console.log(error))
    }
  },
  beforeMount(){
    this.load();
  }
}
</script>
