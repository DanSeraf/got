<template>
  <v-container>
    <v-flex xs12 sm5 md4 lg3>
      <v-card flat class="text-xs-center ma-3" color="grey lighten-4">
        <h2>My Profile</h2>
        <p>Email: {{ currentUser.email }}</p>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
import {HTTP} from '../http-common.js'
import firebase from 'firebase'

export default {
  data: () => ({
    reports: [],
    currentUser: firebase.auth().currentUser
  }),

  async created () {
    await HTTP.get('/reports')
      .then(response => (this.reports = response))
      .catch(error => (window.console.log('error getting reports: ' + error)))
  }
}
</script>
