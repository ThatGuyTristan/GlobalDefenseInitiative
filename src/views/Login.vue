<template lang="pug">
  div
    v-row
      v-col.mx-auto(cols="6")
        v-card-text
          v-text-field(v-model="username" label="Identifier")
          v-text-field(v-model="password" label="Password")
        v-card-actions
          v-spacer
          v-btn(@click="login") Connect
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default { 
  name: "Login",
  data: () => ({
    username: null, 
    password: null
  }),
  methods: {
    login() {
      this.$store.dispatch('login', {
        email: this.username,
        password: this.password
      })
    }
  }
}</script>

