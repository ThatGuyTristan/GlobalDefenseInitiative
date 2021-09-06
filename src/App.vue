<template lang="pug">
  v-app
    v-app-bar(app color="black" dark)
      div.d-flex.align-center
        v-img(
          alt="Logo"
          class="shrink mr-2"
          contain
          src="../public/logo-dark.jpg"
          transition="scale-transition"
          width="60"
        )
        h3(id="titleText") Global Defense Initiative
      v-spacer

      v-btn(
        id="login"
        :to="{ name: 'Login' }"
      ) NETWORK LOGIN
    v-main
      router-view
        v-container
          v-layout
            v-flex(height="100%")
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
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

#titleText {
  font-family: "squareOneBold"
}

#login {
  font-family: "squareOne";
}
</style>
