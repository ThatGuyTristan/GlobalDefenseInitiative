<template lang="pug">
  v-card
    v-card-title 
      h3.mx-auto Ambassador Feedback
    v-card-text
      v-data-table(
        :headers="headers" 
        :items="items" 
        :hide-default-header="!items.length"
        :hide-default-footer="!items.length"
        )
        template(v-slot:top)
          div.text-right
            New(@submitted="load")
        template(v-slot:item.overall="{ item }")
          v-chip(:color="getColor(item)") {{ getOverallScore(item) }}
        template(v-slot:no-data) 
          h3 No Feedback Notes Available 
          New(@submitted="load" table)
</template>

<script>
import axios from "axios"

export default {
  components: { New: () => import("/src/views/ambassador/feedback/New") },
  data: () => ({
    headers: [
      { text: "Title", sortable: true, value: 'title' },
      { text: "Author", sortable: false, value: 'author' },
      { text: "Safety", sortable: true, value: 'safety', align: 'center' },
      { text: "Interaction", sortable: false, value: 'interaction', align: 'center'},
      { text: "Cleanup", sortable: false, value: 'cleanup', align: 'center' },
      { text: "Overall", sortable: false, value: 'overall', align: 'center' },
      { text: "Date", sortable: true, value: 'date', align: 'right' }
    ],
    items: []
  }),
  methods: {
    load(){
      axios
        .get(`/feedbacknotes.json?auth=${this.$store.state.idToken}`)
        .then((resp) => {
            let items = []
            for(let result in resp.data){
              items.push(resp.data[result])
            }
            this.items = items;
        })
        .catch((error) => {console.log(error)})
    },
    getOverallScore(item){
      console.log(typeof item.interaction, typeof item.safety, typeof item.cleanup)
      let score = Number(item.interaction) + Number(item.safety) + Number(item.cleanup)
      let total = Number(score / 3)
      console.log(total)
      total = isNaN(total) ? 'X' : total
      return total
    },
    getColor(item){
      let value = this.getOverallScore(item)

      if(value > 4){
        return 'green'
      } else if(value > 2 && value < 4) {
        return 'yellow'
      } else {
        return 'red'
      }
    }
  },
  beforeMount(){
    console.log("Beforemount");
    this.load();
  }
}
</script>
