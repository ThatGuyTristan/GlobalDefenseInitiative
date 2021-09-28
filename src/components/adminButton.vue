<template lang="pug">
  div.d-flex.align-center.mx-3
    v-dialog(
      v-model="loginPrompt" 
      v-if="loggedIn && $route.name != 'AdminControlPanel'"
      width="300"
      height="300"
    )
      template(v-slot:activator="{ on }")
        v-btn(
          icon
          dark
          color="green darken-4"
        ) 
          v-icon(v-on="on") mdi-shield
      v-card(dark)
        v-card-title Enter Admin Password
        v-card-text
          v-text-field(v-model="passwordAttempt")
        v-card-actions
          v-btn(text color="red darken-4" @click="loginPrompt = false") Cancel
          v-spacer
          v-btn(text color="green darken-4" @click="adminLogin") Access
    
    v-dialog(v-else v-model="logoutPrompt")
      template(v-slot:activator="{ on }")
        v-btn(
          dark
          icon
          @click="adminlogOut"
        ) 
          v-icon(color="red darken-4") mdi-shield-outline
</template>

<script>
export default {
  data: () => ({
    loginPrompt: false,
    logoutPrompt: false,
    passwordAttempt: "",
  }),
  computed: {
    loggedIn(){
      return this.$store.state.idToken;
    }
  },
  methods: {
    adminLogin(){
      console.log('here');
      let pw = process.env.VUE_APP_ADMIN_PASSWORD
      if(this.passwordAttempt == pw) {
        this.$store.dispatch("setAdmin")
        this.$router.push({ name: "AdminControlPanel" })
      } else {
        console.log("Password rejected:", this.passwordAttempt, pw)
      }
    },
    adminlogOut(){
      this.$router.push({ name: "AmbassadorDashboard" })
    }
  }
}
</script>