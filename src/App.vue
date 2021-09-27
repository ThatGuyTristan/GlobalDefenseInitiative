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
      v-spacer
      LogInButton
    v-navigation-drawer(clipped app v-model="appBar" v-if="loggedIn")
      v-list
        v-list-item(v-for="i in 10") {{ i }} Ello
    v-main(id="main")  
      router-view
        v-container
          v-layout
            v-flex(:width="width" height="100%")
</template>

<script>
import LogInButton from "./components/logInButton"

export default {
  name: "App",
  components: { LogInButton },
  data: () => ({
    appBar: null,
    exteriorRoutes: [
      { text: "About", destination: "About" },
      { text: "Contact", destination: "Contact" }
    ]
  }),
  computed: {
    loggedIn(){
      return this.$store.state.idToken != null;
    },
    width(){
      return this.$vuetify.breakpoint.xs ? "100%" : "66%"
    }
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
