<template lang="pug">
  div
    v-row
      v-col.mx-auto(cols="6")
        v-card-text
          v-text-field(v-model="username" label="Identifier")
          v-text-field(v-model="password" label="Password")
        v-card-actions
          v-spacer
          SignUp
          v-btn(@click="login") Connect
          v-spacer
</template>

<script>
import axios from "axios";
import SignUp from "@/views/SignUp";

export default {
  name: "Login",
  components: { SignUp },
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
