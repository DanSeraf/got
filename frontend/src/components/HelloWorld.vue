<template>
    <v-container fluid class="my-5">
    <v-layout row wrap>
      <v-flex xs12 sm6 md5 lg2
              v-for="item in characters"
              :key="item.cid"
      >
        <v-hover>
          <v-card flat class="text-xs-center ma-3" slot-scope="{ hover }" :class="`elevation-${hover}`" style="border-style: solid; border-width: 2px; border-color: dimgrey; background-color: lightgrey;">
            <v-responsive class="pt-0">
              <v-img :src="item.pic" style="height: 350px;"></v-img>
            </v-responsive>
            <v-card-text>
              <div class="subheading" style="color:black;">{{ item.name }}</div>
            </v-card-text>
            <div id="example-1">
              <v-btn :disabled="isClickedLive(item.name)" color="success" v-on:click="live(item.name)">Live</v-btn>
              or
              <v-btn :disabled="isClickedDie(item.name)" color="error" v-on:click="die(item.name)">Die</v-btn>
            </div>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
      <v-btn :disabled="checkSendForm()" v-on:click="sendForm()" color="success">Send</v-btn>
      <h1>{{ message }}</h1>
    </v-container>
</template>



<script>
    import {HTTP} from '../http-common.js'

    export default {
      data: () => ({
        characters: null,
        buttonStates: {},
        user_form: {},
        message: ''
      }),

      methods: {
        live(name) {
          this.user_form[name] = 1
          this.buttonStates[name] = true
        },

        die(name) {
          this.user_form[name] = 0
          this.buttonStates[name] = false
        },

        isClickedLive(name) {
          if (this.user_form[name] === 2) {
            return false
          } else {
            if (this.buttonStates[name] === true) {
              return true
            } else {
              return false
            }
          }
        },

        isClickedDie(name) {
          if (this.user_form[name] === 2) {
            return false
          } else {
            if (this.buttonStates[name] === false) {
              return true
            } else {
              return false
            }
          }
        },

        checkSendForm() {
          for (var character in this.user_form) {
            window.console.log(this.user_form[character])
            if (this.user_form[character] === 2) {
              return false
            }
          }
          return true
        },

        sendForm() {
          const tosend = {}
          const username = this.$store.getters.username
          tosend[username] = this.user_form
          HTTP.post('/user/post_data?data=' + JSON.stringify(tosend))
            .then((response) => {
              window.console.log(response)
              if (response['data']['status'] === 'ok') {
                this.$store.commit('addStatus', true)
                this.message = 'Your request has been send'
              } else {
                this.message = 'Error'
              }
            })
        },


      },

      mounted() {
        HTTP.get('characters/all')
          .then(response => {
            this.characters = response['data']
            let click = {}
            let user_form = {}
            response['data'].forEach(function (entry) {
              window.console.log(entry['name'])
              user_form[entry['name']] = 2
              click[entry['name']] = true

            })
            this.buttonStates = click
            this.user_form = user_form
          })

      },

    }
</script>
