<template lang="pug">
  PrimaryLayout
    template(v-slot:header)
      div.text-center.mx-auto
        h3.mx-auto Excursion Reports
        .caption A limited number of these reports are available to Ambassadors.
    template(v-slot:body)
      v-card(tile dark width="100%")
        v-card-text
          v-row(justify="center" no-gutters)
            excursionReport(
              v-for="(item, i) in items"
              :key="i"
              :body="item.body"
              :date="item.date"
            )
</template>

<script>
import PrimaryLayout from "/src/views/layouts/Primary.vue"
import { db } from "/src/db"

export default {
  components: { 
    PrimaryLayout, 
    excursionReport: () => import("@/components/excursionReport")
  },
  data: () => ({
    items: []
  }),
  beforeMount(){
    db.ref('excursions/').once('value', snapshot => {
      const results = snapshot.val()
      console.log("YO", results)
      let items = []
      for(let result in results){
        let item = results[result]
        console.log("ITEM")
        items.push(item)
      }

      this.items = items
    })
  }
}
</script>
