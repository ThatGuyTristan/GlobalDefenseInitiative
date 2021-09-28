<template lang="pug">
  v-dialog(persistent v-model="dialog" height="500" width="800")
    template(v-slot:activator=" { on }")
      v-btn(v-on="on" v-if="table") New Note
      v-btn(v-else v-on="on") + New Note
    v-card
      v-card-title
        h3 New Feedback Note
        v-spacer
        v-tooltip(right max-width="240")
          template(v-slot:activator="{ on }")
            v-btn(v-on="on" text @click="replaceShortHand") Replace Shorthand
          span(dark) We understand that there are many terms you may use repeatedly. To save you time, we have included the following shortcuts:
          v-list(dark dense)
            v-list-item(v-for="shortcut in shorthandWords") {{ shortcut }}
      v-card-text
        v-text-field(v-model="title" label="Title")
        v-textarea(v-model="body" label="Body")
      v-card-actions 
        v-btn(text @click="dialog = false") Cancel
        v-spacer
        v-btn(text @click="submit") Submit
</template>
<script>
import axios from "axios"

export default {
  props: { 
    table: {type: Boolean, default: false}
    },
  data: () => ({
    dialog: false,
    shorthandWords: ["SIQ: Soldier in Question", "PIC: Person in Charge", "DOI: Date of Incident", "FUR: Follow Up Requested"],
    title: null,
    body: null,
    safety: 3,
    interaction: 2,
    cleanup: 1,
  }),
  watch:{
    dialog(val){
      if(!val) {
        this.reset()
      }
    }
  },
  methods: {
    replaceShortHand(){
      const mapWords = new Map();
      mapWords.set("SIQ", "Soldier in Question")
      mapWords.set("PIC", "Person in Charge")
      mapWords.set("DOI", "Date of Incident")
      mapWords.set("FUR", "Follow Up Requested")

      let newString = this.body

      for(let [key, value] of mapWords){
        newString = newString.replace(key, value)
        newString = newString.replace(key.toLowerCase(), value)
      }
      this.body = newString
    },
    submit(){
      let data = {
        title: this.title,
        body: this.body,
        safety: this.safety, 
        interaction: this.interaction,
        cleanup: this.cleanup,
        date: new Date().getDate()
      }
      axios
        .post(`/feedbacknotes.json?auth=${this.$store.state.idToken}`, data)
        .then((resp) => { 
          this.dialog = false
          this.$emit("submitted")
          this.reset();
        })
        .catch((error) => { console.log(error)})
    },
    reset() {
      Object.assign(this.$data, this.$options.data.call(this));
    }
  }
}
</script>
