<template lang="pug">
   div 
        h2 {{ user }}

</template>

<script>
import axios from 'axios';

export default {
    computed: {
        user() {
            return !this.$store.getters.user ? false : this.$store.getters.user
        }
    },
    created() {
        this.$store.dispatch('findUser')
    }
}

</script>