<template lang="pug">
      div.d-flex.align-center
        v-btn.connect(
            v-if="!loggedIn"
            id="login"
            :to="{ name: 'Login' }"
        ) NETWORK LOGIN
        v-btn.connect(
            v-else
            id="logout"
            @click="logOut"
        ) TERMINATE ACCESS
</template>
<script>
export default {
    computed: {
        loggedIn(){
            return this.$store.state.idToken;
        }
    },
    methods: {
        logOut(){
            this.$store.dispatch("logOut")
            this.$router.push({ name: "Home" })
        }
    }
}
</script>

<style scoped>
.connect {
  font-family: "squareOne";
}

#login {
  color: green;
}

#logout {
    color: red;
}
</style>