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
import firebase from 'firebase'

export default {
  data: () => ({
    currentUser: firebase.auth().currentUser,
  })
}
</script>

  
