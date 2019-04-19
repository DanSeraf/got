<template>
  <v-container fluid align-center justify-center>

    <v-layout class="justify-center">

      <v-flex xs12 md5 s6 lg3>

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
        style="background: #2096f3 !important;"
        @click.native="loginPost"
      >
        Login
      </v-btn>
        <v-btn @click="socialLogin" class="social-button">
          <v-img src="https://developers.google.com/identity/images/btn_google_signin_light_normal_web.png" alt="Google Logo"></v-img>
        </v-btn>
        <v-btn @click = "socialLoginFb" class="social-button" >
          <v-img src="https://scontent-fco1-1.xx.fbcdn.net/v/t39.2365-6/17639236_1785253958471956_282550797298827264_n.png?_nc_cat=105&_nc_ht=scontent-fco1-1.xx&oh=7d0ae1c0252bf2122914a94131ba4e14&oe=5D2A5CEA" alt="Facebook Logo"></v-img>
        </v-btn>

        <p>or
      <router-link to="/sign-up">
        <button class="create-text">
          Create an account
        </button>
        </router-link></p>
        <h1>{{ error }}</h1>
    </v-flex>
  </v-layout>
    <v-footer app absolute color="#fafafa" class="pa-3">
      <div>&copy; {{ new Date().getFullYear() }} F-Got </div>
    </v-footer>
  </v-container>

</template>

<script>
import firebase from 'firebase'
import {HTTP} from '../http-common.js'


export default {
  data: () => ({
    email: '',
    password: '',
    show: false,
    username: '',
    error: '',
    posted: false
  }),

  methods: {
      loginPost() {
          firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
              () => {
                  const user = firebase.auth().currentUser;
                  this.$store.commit('addUser', user)
                  this.$store.commit('logged')
                  this.$store.commit('addAccessType', 'normal')
                  this.checkLogin(this.email)
              },
              (err) => {
                  alert('error while signin: ' + err.message)
              }
          ).catch(e => (window.console.log("error during signIn option: " + e)))
      },

      socialLogin() {
          const provider = new firebase.auth.GoogleAuthProvider();
          firebase.auth().signInWithPopup(provider).then((result) => {
              this.checkEmail(result.additionalUserInfo.profile.email, result.additionalUserInfo.profile.name)
              this.$store.commit('addAccessType', 'goog')
              this.$store.commit('addUsername', result.additionalUserInfo.profile.name)
              this.$store.commit('logged')
              this.checkLogin(result.additionalUserInfo.profile.email)
              alert(result)
          }).catch((err) => {
              alert('Oops.' + err.message)
          });
      },

      checkLogin(email){
        HTTP.post('/user/get-username?email=' + email + '')
          .then(response => {
            this.username = response.data.username
            this.posted = response.data.posted
            this.$store.commit('addUsername', this.username)
            this.$store.commit('addStatus', this.posted)
            this.$store.commit('addEmail', email)
            window.console.log(this.posted)
            this.$router.replace('rules')
            })
          .catch(e => (window.console.log('error getting username: ' + e)));
      },

      socialLoginFb() {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) =>{
          this.checkEmail(result.additionalUserInfo.profile.email, result.additionalUserInfo.profile.name)
          this.$store.commit('addAccessType', 'face')
          this.$store.commit('addUsername', result.additionalUserInfo.profile.name)
          this.$store.commit('logged')
          this.checkLogin(result.additionalUserInfo.profile.email)
          alert(result)
        }).catch((err) => {
          alert('Oops.'+err.message)
        });
      },

      checkEmail(email, username) {
        HTTP.post('/user/get-username?email=' + email + '')
          .then(response => {
            if (response.data.status == 'error') {
              HTTP.post('/user/new-user?username=' +username+ '&email=' +email)
            }
          })
      }


  },
}
</script>

<style scoped>

  .social-button img{
    size: auto;

  }
  .social-button{
    width: 170px;
    height: 40px;
    background: #fff;

  }
  .v-btn:not(.v-btn--depressed):not(.v-btn--flat) {
    will-change: box-shadow;
    -webkit-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0) !important;
    box-shadow: 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0) !important;
  }
  .theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat) {
     background-color: white !important;
  }

.create-text {
  color: blue;
  padding-left: 2%;
}
</style>
