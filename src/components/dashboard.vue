<template lang="pug">
  PrimaryLayout
    template(v-slot:header)
      h3.mx-auto Welcome back, Commander.
    template(v-slot:body)
</template>

<script>
import PrimaryLayout from "/src/views/layouts/Primary.vue"


export default {
  components: {PrimaryLayout},
  computed: {
    user() {
      return !this.$store.getters.user ? false : this.$store.getters.user;
    },
    ambassador(){
      return this.$store.getters.ambassador;
    }
  },
  created() {
    this.$store.dispatch("findUser");
  },
};
</script>
