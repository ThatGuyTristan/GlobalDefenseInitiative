<template lang="pug">
  PrimaryLayout
    template(v-slot:header)
      h3.mx-auto Our Mission
    template(v-slot:body)
      p.px-5.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</template>

<script>
import PrimaryLayout from "../layouts/Primary.vue"

export default {
  name: "About",

  components: {PrimaryLayout},
};
</script>