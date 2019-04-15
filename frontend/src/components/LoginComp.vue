<template>
  <v-container fluid align-center justify-center>
    <v-layout>
      <v-flex s6 lg3 style="position: absolute; left: 40%; top: 20%;">
        <h1>Sign in</h1>
        <v-form
          ref="form"
        >
          <v-text-field
            v-model="email"
            label="email"
            required
          ></v-text-field>

        <v-text-field
          v-model="password"
          label="password"
          :append-icon="show ? 'visibility_off' : 'visibility'"
          :type="show ? 'text' : 'password'"
          name="input-10-1"
          @click:append="show = !show"
          required
        ></v-text-field>
      </v-form>
      <v-btn
        color="success"
        @click.native="loginPost()"
      >
        Login
      </v-btn>
      or 
      <router-link to="/sign-up">
        <button class="create-text">
          Create an account
        </button>
        </router-link>
        <h1>{{ error }}</h1>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import firebase from 'firebase'

export default {
  data: () => ({
    email: '',
    password: '',
    show: false,
    error: ''
  }),

  methods: {
    loginPost () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        () => {
          const user = firebase.auth().currentUser;
          if(user.emailVerified==true) {
              this.$store.commit('addUser', user)
              this.$store.commit('logged')
              this.$router.replace('home')
          }else{
              this.error="Please verify your email!"
          }
        },
        (err) => {
          alert('error while signin: ' + err.message)
        }
      ).catch(e => (window.console.log("error during signIn option: " + e)))
    }
  }
}
</script>

<style scoped>
.create-account {
  position: absolute;
  color: blue;
}
.create-text {
  color: blue;
  padding-left: 2%;
}
</style>
