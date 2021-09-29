<template lang="pug">
  PrimaryLayout
    template(v-slot:header)
      h3.mx-auto Network LogIn
    template(v-slot:body)
      div.text-center
        v-card.mx-auto(dark flat width="500")
          v-card-title
            h4.mx-auto Ambassador Network Access 
          v-card-text 
            v-row(no-gutters) 
              v-text-field(v-model="username" label="Identifier (E-mail)")
            v-row(no-gutters)
              v-text-field(type="password" v-model="password" label="Password")
          v-card-actions 
            SignUp
            v-spacer
            v-btn(color="green darken-4" text @click="login" v-on="on") Connect
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
      this.overlay = true;
      this.$store
        .dispatch("login", {
        email: this.username,
        password: this.password,
      })
      .then(() => {
        this.$eventHub.$emit("overlayOn")
        setTimeout(() => {
          this.$router.push({ name: "AmbassadorDashboard" })
        }, 2000)
      })
      ;
    },
  },
};
</script>
