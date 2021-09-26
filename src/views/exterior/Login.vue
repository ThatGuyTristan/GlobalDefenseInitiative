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
      v-btn(@click="login") Connect
</template>

<script>
import PrimaryLayout from "../layouts/Primary.vue"
import SignUp from "@/components/SignUp";

export default {
  name: "Login",
  components: { PrimaryLayout, SignUp },
  data: () => ({
    username: null,
    password: null,
  }),
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.username,
        password: this.password,
      });
    },
  },
};
</script>
