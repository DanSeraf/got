<template>
  <v-app>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        right
    >
      <v-list-tile to="/report" v-if="logged">
            <v-list-tile-title>My Profile</v-list-tile-title>
      </v-list-tile>

      <v-divider></v-divider>

      <v-list-tile to="/home">
        <v-list-tile-content>
            <v-list-tile-title>Leaderboard</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-divider></v-divider>

      <v-list-tile to="/about">
        <v-list-tile-content>
            <v-list-tile-title>Donate</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-divider></v-divider>

      <v-list-tile v-if="logged" v-on:click="logout">
        <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

    </v-navigation-drawer>

    <v-toolbar fixed color="blue" app>
        <router-link to="" tag="button">
          img
        </router-link>

        <v-spacer></v-spacer>

      <v-toolbar-side-icon @click.stop="drawer = !drawer" ></v-toolbar-side-icon>
    </v-toolbar>

    <v-content>
      <transition name="fade" mode="out-in">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import firebase from 'firebase'

export default {
  data: () => ({
    drawer: false,
    clipped: true,
    logged: false,
    userId: null,
    user: null,
    username: '',
    uroute_profile: '',
    uroute_reports: '',
    uroute_user: '',
  }),

  methods: {
    logout () {
      firebase.auth().signOut().then(() => {
        this.$store.dispatch('resetUserStore')
        this.$router.replace('login')

      })
        .catch(e => (window.console.log('error logging out: ' + e)))
    }
  },

  mounted () {
    this.logged = this.$store.state.logged;
    this.user = this.$store.getters.user;
    this.username = this.$store.getters.username;
  },

  updated () {
    this.logged = this.$store.state.logged;
    this.user = this.$store.getters.user;
    this.username = this.$store.getters.username;
  },
}
</script>

<style>


  .title {
  margin-left: 20%;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 2s ease;
}
</style>
