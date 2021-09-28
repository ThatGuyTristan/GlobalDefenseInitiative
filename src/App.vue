<template lang="pug">
  v-app
    v-app-bar(app clipped-left color="black" dark)
      div.d-flex.align-center
        router-link(:to="{ name: 'Home' }" )
          v-img(
            alt="Logo"
            class="shrink mr-2"
            contain
            src="../public/logo-dark.jpg"
            transition="scale-transition"
            width="60"
          )
        h3(id="titleText") Alumni MultiNational
        div.ml-5
          v-btn(text dark v-for="(route, i) in exteriorRoutes" :key="i" :to=" { name: route.destination }") {{ route.text }}
          v-btn.mx-2(text dark v-if="loggedIn" :to="{ name: 'AmbassadorDashboard' }") Ambassador Dashboard
      v-spacer
      LogInButton
    AmbassadorNavigation(v-if="loggedIn")
    v-main(id="main")  
      router-view
        v-container
          v-layout
            v-flex(:width="width" height="100%")
</template>

<script>
import LogInButton from "./components/logInButton"
import AmbassadorNavigation from "./components/ambassador/Navigation.vue"

export default {
  name: "App",
  components: { LogInButton, AmbassadorNavigation },
  data: () => ({
    appBar: null,
    exteriorRoutes: [
      { text: "About", destination: "About" },
      { text: "Contact", destination: "Contact" }
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
  background: linear-gradient(green, black);
}

#titleText {
  font-family: "squareOne";
}
</style>
