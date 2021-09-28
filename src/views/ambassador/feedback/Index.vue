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
          v-chip {{ getOverallScore(item) }}
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
      { text: "Body", sortable: false, value: 'body' },
      { text: "Safety", sortable: true, value: 'safety' },
      { text: "Interaction", sortable: false, value: 'interaction'},
      { text: "Cleanup", sortable: false, value: 'cleanup' },
      { text: "Overall", sortable: false, value: 'overall' },
      { text: "Date", sortable: true, value: 'date', align: 'right' }
    ],
    items: []
  }),
  created(){
    console.log("ROOT", this.$router.route)
  },
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
      let score = (item.interaction + item.safety + item.cleanup) / 5
      return score
    }
  },
  beforeMount(){
    console.log("Beforemount");
    this.load();
  }
}
</script>
