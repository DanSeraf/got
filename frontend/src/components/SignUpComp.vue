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
    rules: {
      min: v => v.length>=8 || 'Min 8 characters.',
    }
  }),

  methods: {
    signUpPost () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        () => {
          alert('Your account has been created')
        },
        (err) => {
          alert('Error: ' + err.message)
          window.console.log('Problem with signin up: ' + err.message)
        },
      )
    },
    
    post_user () {
      HTTP.post('/user/new-user?username='+this.username+'&email='+this.email+'')
    },
    
    handler(){
      this.signUpPost();
      this.post_user();
      this.$router.replace('login')
    },
  },
}
</script>
