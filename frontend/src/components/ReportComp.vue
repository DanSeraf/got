<template>
  <v-container>
    <v-layout class="justify-center">
      <v-flex xs12 sm5 md4 lg3>
        <v-card flat class="text-xs-center ma-3" color="grey lighten-4">
          <h2>My Profile</h2>
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
    live: ['die', 'live']
  }),

  mounted(){
      const email = this.$store.getters.email
      HTTP.post('/user/gamesheet?email='+email)
        .then((response) => {
          this.gamesheet= response.data
          window.console.log(response.data)
      })
    },


}
</script>
