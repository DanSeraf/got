<template>
  <v-container>
    <p> Profile </p>
    <p>{{ currentUser }}</p>
  </v-container>
</template>

<script>
import firebase from 'firebase'

export default {
  data: () => ({
    currentUser: firebase.auth().currentUser
  })
}
</script>
