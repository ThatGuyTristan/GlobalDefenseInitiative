<template lang="pug">
  <template lang="pug">
  PrimaryLayout
    template(v-slot:header)
      div.text-center.mx-auto 
        h3 Staff Dossiers
        .caption All Staff Dossiers available to registered Ambassadors.
    template(v-slot:body)
      v-card(tile)
        v-card-text
          v-row(justify="center" no-gutters)
            SoldierDossier(:id="item.id" v-for="(item, i) in dossiers" :key="i")
</template>

<script>
import PrimaryLayout from "../layouts/Primary.vue"
import { db } from "/src/db"

export default {
  name: "About",
  components: {
    PrimaryLayout, 
    SoldierDossier: () => import("/src/components/soldierDossier")},
  data: () => ({
    dossiers: []
  }),
  beforeMount(){
    db.ref('dossiers').once('value', snapshot => {
      const dossiers = snapshot.val()

      let items = []
      for(let result in dossiers){
        let item = dossiers[result]
        item.id = result
        items.push(item)
      }
      this.dossiers = items;
    })
  }  
};
</script>
</template>