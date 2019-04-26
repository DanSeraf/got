<template>
  <v-container>
    <v-layout class="justify-center">
      <v-flex xs12 sm5 md4 lg3>
        <v-card flat class="text-xs-center " color="#2096f3" style="border-radius: 8px;" >
          <br>
          <v-card-title flat class="text-xs-center"><h2>{{ username }}'s Game Sheet</h2></v-card-title>
          <v-card flat class="text-xs-center ma-3" :color="color[sheet.value]" :key="sheet.ucid" v-for="sheet in gamesheet">
            <v-card-text flat class="text-xs-center">
              {{ sheet.name }} - {{ live[sheet.value] }}
            </v-card-text>
          </v-card>
          <br>
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
    live: ['DIE', 'LIVE'],
    color: ['red', 'green']
  }),

  methods:{

  },

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
