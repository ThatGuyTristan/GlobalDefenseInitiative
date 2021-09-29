<template lang="pug">
  v-app(dark)
    v-app-bar(app clipped-left color="blue-grey darken-4" dark)
      div.d-flex.align-center
        router-link(:to="{ name: 'Home' }" )
          v-img(
            alt="Logo"
            class="shrink mr-2"
            contain
            src="@/assets/images/logo.png/"
            transition="scale-transition"
            width="60"
          )
        h3.text-uppercase Alumni MultiNational
        div.ml-9
          v-btn.mx-2(text dark v-for="route in publicRoutes" :to="{ name: route.destination } ") {{ route.name }}
          v-btn.mx-2(text dark v-if="loggedIn" :to="{ name: 'AmbassadorDashboard' }") Ambassador Dashboard
      v-spacer
      AdminButton(v-if="loggedIn")
      LogInButton
    AmbassadorNavigation(v-if="loggedIn && this.$route.name != 'AdminControlPanel'")
    v-main(id="main")
      v-overlay(:value="overlay" opacity="1" color="black")
        v-card(dark)
          v-card-title Please Stand By. . .   
      router-view
        v-container
          v-layout
            v-flex(:width="width" height="100%")
      Snackbar
</template>

<script>
import LogInButton from "./components/logInButton"
import AdminButton from "./components/adminButton"
import AboutMenu from "./components/aboutMenu"
import AmbassadorNavigation from "./components/ambassador/Navigation.vue"
import Snackbar from "./components/Snackbar.vue"

export default {
  name: "App",
  components: { AboutMenu, AdminButton, AmbassadorNavigation, LogInButton, Snackbar },
  data: () => ({
    overlay: false,
    appBar: null,
    publicRoutes: [
      { name: "History", destination: "PublicHistory" },
      { name: "World Status", destination: "PublicStatus" },
      { name: "Public Dossiers", destination: "PublicDossiers" }
    ]
  }),
  computed: {
    loggedIn(){
      return this.$store.getters.authenticated;
    },
    width(){
      return this.$vuetify.breakpoint.xs ? "100%" : "66%"
    }
  },
  created(){
    this.$eventHub.$on("overlayOn", () => { this.overlay = true})
    this.$eventHub.$on("overlayOff", () => { this.overlay = false})
    this.$store.dispatch("tryAutoLogin");
  }
};
</script>

<style scoped>
@font-face {
  font-family: "squareOne";
  src: url("./assets/fonts/SquareOne.ttf");
}

@font-face {
  font-family: "squareOneBold";
  src: url("./assets/fonts/SquareOneBold.ttf");
}

#main {
  background-image: url("./assets/images/dark_earth.jpeg");
  background-size: cover;
}
</style>
