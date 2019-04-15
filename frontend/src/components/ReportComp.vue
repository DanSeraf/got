<template>
  <v-container>
    <p>{{ currentUser.id }}</p>
    <li v-for="report in reports" v-bind:key="report.id">
      {{ report.task }}
    </li>
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
