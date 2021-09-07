<template lang="pug">
    v-dialog(v-model="dialog" width="500")
        template(v-slot:activator="{ on }")
            v-btn(v-on="on") Sign Up
        v-card
            v-card-title New User Register
            v-card-text
                div 
                    v-text-field(v-model="email" label="Email")
                    v-text-field(v-model="password" label="Password")
            v-card-actions
                v-btn(@click="dialog = false") Cancel
                v-spacer
                v-btn(@click="submit") Register
</template>

<script>
import axios from "@/axios-auth";

export default {
    name: "SignUp",
    data: () => ({
        dialog: false,
        email: null,
        password: null
    }),
    methods: {
        submit(){
            axios.post('accounts:signUp',
                {
                    email: this.email,
                    password: this.password,
                    returnSecureToken: true
                })
                .then((resp) => {
                    console.log(resp)
                })
                .catch((err) => {
                    console.log(err)
                })
            
        }
    }
}
</script>