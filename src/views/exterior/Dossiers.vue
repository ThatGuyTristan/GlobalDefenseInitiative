<template lang="pug">
  PrimaryLayout
    template(v-slot:header)
      div.text-center.mx-auto 
        .h3 Public Dossiers
        .caption These Soldier Profiles are visable to the public on a voluntary basis only.
    template(v-slot:body)
      v-row(no-gutters).text-center
        SoldierDossier(v-for="(item, i) in items" :key="i" :id="item.id")
</template>

<script>
import PrimaryLayout from "../layouts/Primary.vue"
import axios from "axios"

export default {
  name: "About",
  components: {
    PrimaryLayout, 
    SoldierDossier: () => import("/src/components/soldierDossier")},
  data: () => ({
    items: []
  }),
  beforeMount(){
    axios
      .get('dossiers.json')
      .then((resp) => {
        let items = []
        for(let result in resp.data){
          items.push(resp.data[result])
        }
        console.log(items)
        this.items = items
      })
      .catch(error => console.log(error))
  }  
};
</script>