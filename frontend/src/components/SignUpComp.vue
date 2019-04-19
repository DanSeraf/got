<template>
  <v-container fluid>
    <v-layout class="justify-center">

    <v-flex xs12 md5 s6 lg3>
      <h1 class="title-text"> Create a new account </h1>
      <v-form
        ref="form"

        >
        <v-text-field
          v-model="username"
          label="username"
          required
          ></v-text-field>
          
        <v-text-field
          v-model="email"
          label="email"
          required
          ></v-text-field>

        <v-text-field
          v-model="password"
          label="password"
          :rules="[rules.min]"
          :append-icon="show ? 'visibility_off' : 'visibility'"
          :type="show ? 'text' : 'password'"
          name="input-10-1"
          @click:append="show = !show"
          required
          ></v-text-field>
  </v-form>
        <v-btn
          color="blue"
          @click.native="handler()"
          >
          Sign Up
        </v-btn>


      </v-flex>
      <h1>{{ success }}</h1>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from 'firebase'

import {HTTP} from '../http-common.js'


export default {
  data: () => ({
    show: false,
    username : '',
    email: '',
    password: '',
    fire_id:'',
    success:'',
    user: '',
    rules: {
      min: v => v.length>=8 || 'Min 8 characters.',
    }
  }),

  methods: {
    signUpPost () {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
            function () {
                alert("Hey your account has been created!")
            },
            function (err) {
                alert('Problem with signin up: ' + err.message)
            },
        )
    },
    post_user () {
      HTTP.post('/user/new-user?username='+this.username+'&email='+this.email+'')
          .then(response => (window.console.log("POST_USER status: " + response)))
    },
      handler(){
        this.signUpPost();
        this.post_user();
        this.$router.replace('login')

      },

  },
}
</script>
