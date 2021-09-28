<template lang="pug">
  PrimaryLayout
    template(v-slot:header)
      h3.mx-auto Welcome back, {{ user.authData.displayName }}.
      v-spacer
      h3.mx-auto {{ futureDate }}
    template(v-slot:body)
      router-view
</template>

<script>
import PrimaryLayout from "/src/views/layouts/Primary.vue"

export default {
  name: "Dashboard",
  components: {PrimaryLayout},
  data: () => ({
    userObj: null,
    time: null,
  }),
  computed: {
    user() {
      return !this.$store.getters.user ? false : this.$store.getters.user;
    },
    ambassador(){
      return this.$store.getters.ambassador;
    },
    futureDate(){
      let timestamp = new Date(new Date().setFullYear(new Date().getFullYear() + 50))
      let arr = timestamp.toString().split(" ")
      arr = arr.slice(1, 4)
      arr = arr.join(" ")
      return arr
    }
  },
  created() {
    this.userObj = this.$store.dispatch("findUser");
  },
};
</script>
