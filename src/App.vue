<template lang="pug">
  v-app
    v-app-bar(app color="black" dark)
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
        h3(id="titleText") Global Defense Initiative
        div.ml-5
          v-btn(text dark v-for="(route, i) in exteriorRoutes" :key="i" :to=" { name: route.destination }") {{ route.text }}
      v-spacer
      LogInButton
    v-main(id="main")
      router-view
        v-navigation-drawer(permanent)
        v-container
          v-layout
            v-flex(height="100%")
</template>

<script>
import LogInButton from "./components/logInButton"

export default {
  name: "App",
  components: { LogInButton },
  data: () => ({
    exteriorRoutes: [
      { text: "About", destination: "About" },
      { text: "Contact", destination: "Contact" }
    ]
  }),
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
  font-family: "squareOneBold";
}
</style>
