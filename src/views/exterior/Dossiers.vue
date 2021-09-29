<template lang="pug">
  PrimaryLayout
    template(v-slot:header)
      div.text-center.mx-auto 
        h3 Staff Dossiers
        .caption These profiles are visable to the public on a voluntary basis only.
    template(v-slot:body)
      v-container
        v-row(justify="center" no-gutters)
          v-col(v-for="(item, i) in dossiers" :key="i") 
            SoldierDossier(:id="item.id")
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
    const ref = db.ref('dossiers')
    ref.orderByChild('public').equalTo(true).once('value', snapshot => {
      const dossiers = snapshot.val()
      this.dossiers.push(dossiers)

      let items = []
      for(let result in dossiers){
        let item = dossiers[result]
        item.id = result
        console.log("AAAAAAH", item)
        items.push(item)
      }
      this.dossiers = items
      console.log("DOSSES", this.dossiers);
    })
    // axios
    //   .get('dossiers.json')
    //   .then((resp) => {
    //     let items = []
    //     for(let result in resp.data){
    //       items.push(resp.data[result])
    //     }
    //     console.log(items)
    //     this.items = items
    //   })
    //   .catch(error => console.log(error))
  }  
};
</script>