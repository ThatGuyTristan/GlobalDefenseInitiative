<template lang="pug">
  PrimaryLayout
    template(v-slot:header)
      h3.mx-auto Welcome back, {{ user.authData.displayName }}.
      v-spacer
      h3.mx-auto {{ getFutureDate() }}
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
    }
  },
  beforeMount(){
    setInterval(() => {
      this.$eventHub.$emit("overlayOff")
    }, 2000)
  },
  created() {
    this.userObj = this.$store.dispatch("findUser");
  },
};
</script>
