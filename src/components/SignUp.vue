<template lang="pug">
    v-dialog(v-model="dialog" width="500")
      template(v-slot:activator="{ on }")
        v-btn(v-on="on") Sign Up
      v-card
        v-card-title New User Register
        v-card-text
          v-text-field(v-model="displayName" label="Your Name")
          v-text-field(v-model="email" label="Email")
          v-text-field(v-model="password" label="Password")
        v-card-actions
          v-btn(@click="dialog = false") Cancel
          v-spacer
          v-btn(@click="submit") Register
</template>

<script>
export default {
  name: "SignUp",
  data: () => ({
    dialog: false,
    email: null,
    password: null,
    displayName: null
  }),
  methods: {
    submit() {
      this.$store.dispatch("signUp", {
        email: this.email,
        password: this.password,
        displayName: this.displayName
      });
    },
  },
};
</script>
