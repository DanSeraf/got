<template>
  <v-container>
    <v-layout class="justify-center">
      <v-flex xs12 sm5 md4 lg3>
        <v-card flat class="text-xs-center ma-3" color="grey lighten-4">
          <h1>{{ username }} </h1>
          <h2>Game Sheet</h2>
          <ul :key="sheet.ucid" v-for="sheet in gamesheet">
            <li>{{ sheet.name }} - {{ live[sheet.value] }} </li>
          </ul>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {HTTP} from '../http-common.js'

export default {
  data: () => ({
    gamesheet: null,
    username: '',
    live: ['DIE', 'LIVE']
  }),

  mounted(){
    this.username = this.$store.getters.username
    const email = this.$store.getters.email
    HTTP.post('/user/gamesheet?email='+email)
      .then((response) => {
        this.gamesheet = response.data
      })
  },
}
</script>
