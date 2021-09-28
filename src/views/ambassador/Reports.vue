<template lang="pug">
  PrimaryLayout
    template(v-slot:header)
      h3.mx-auto Excursion Reports
    template(v-slot:body)
      h3.mx-auto Testing
</template>

<script>
import PrimaryLayout from "/src/views/layouts/Primary.vue"
// import firebase from "/src/mixins/firebase"

export default {
  // mixins: [firebase],
  components: { PrimaryLayout },
  data: () => ({
    items: []
  }),
  created(){
    console.log("ROOT", this.$router.route)
  },
  beforeMount(){
    console.log("Beforemount");
    // let data = this.readDatabase('feedback/')
    // this.items = data
    }
}
</script>
