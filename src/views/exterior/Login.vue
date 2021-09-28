<template lang="pug">
  PrimaryLayout
    template(v-slot:header)
      h3.mx-auto Network LogIn
    template(v-slot:body)
      v-text-field(v-model="username" label="Identifier (E-mail)")
      v-text-field(v-model="password" label="Password")
    template(v-slot:actions)
      SignUp
      v-spacer
      v-dialog(v-model="dialog" width="300")
        template(v-slot:activator="{ on }")
          v-btn(@click="login" v-on="on") Connect
        v-card
          v-card-title Please stand by. . . 
          v-card-text
</template>

<script>
import PrimaryLayout from "../layouts/Primary.vue"
import SignUp from "@/components/SignUp";

export default {
  name: "Login",
  components: { PrimaryLayout, SignUp },
  data: () => ({
    dialog: false,
    username: null,
    password: null,
  }),
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.username,
        password: this.password,
      }).then(() => {
        this.dialog = true
        setTimeout(() => {
          this.dialog = false;
          this.$router.push({ name: "AmbassadorDashboard" })
        }, 2000)
      })
      ;
    },
  },
};
</script>
