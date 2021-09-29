<template lang="pug">
    v-dialog(v-model="dialog" width="500")
      template(v-slot:activator="{ on }")
        v-btn(v-on="on" text color="blue darken-4") Sign Up
      v-card(dark)
        v-card-title
          h2.mx-auto Ambassador Registration
        v-card-text
          v-text-field(v-model="displayName" label="Your Name")
          v-text-field(v-model="email" label="Email" hint="For reference only. We won't email you." persistent-hint)
          v-text-field(type="password" v-model="password" label="Password")
          v-text-field(type="password" v-model="passwordConfirm" label="Confirm Password")
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
    passwordConfirm: null,
    displayName: null
  }),
  methods: {
    checkPasswords(){
      if(this.password != this.passwordConfirm){
        alert("passwords must match")
        return false;
      } else {
        return true
      }
    },
    submit() {
      if(!this.checkPasswords()) { return }
      this.$store.dispatch("signUp", {
        email: this.email,
        password: this.password,
        displayName: this.displayName
      });
    },
  },
};
</script>
