<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      app
      style="position:fixed; top:0; left:0; overflow-y:scroll;"
    >
	
	
      <!--<v-list-tile to="/rules" v-if="!posted && logged">
        <v-icon>assignment</v-icon>
        <v-spacer></v-spacer>
        <v-list-tile-content>
          <v-list-tile-title>Compile your GameSheet!</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>-->

      <v-list-tile to="/report" v-if="logged && posted">
        <v-icon>assignment</v-icon>
        <v-spacer></v-spacer>
        <v-list-tile-content>
          <v-list-tile-title>My Game Sheet</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      
      <v-divider></v-divider>

      <v-list-tile to="/leaderboard">
        <v-icon>format_list_numbered</v-icon>
        <v-spacer></v-spacer>
        <v-list-tile-content>
          <v-list-tile-title>Leaderboard</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-divider></v-divider>

      <v-list-tile to="/about">
        <v-icon>attach_money</v-icon>
        <v-spacer></v-spacer>
        <v-list-tile-content>
          <v-list-tile-title>Donate</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-divider></v-divider>

      <v-list-tile v-if="logged" v-on:click="logout">
        <v-icon>exit_to_app</v-icon>
        <v-spacer></v-spacer>
        <v-list-tile-content>
          <v-list-tile-title>Logout</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-divider></v-divider>

      <v-list-tile to="/login" v-if="!logged">
        <v-icon>input</v-icon>
        <v-spacer></v-spacer>
        <v-list-tile-content>
          <v-list-tile-title>Login</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

    </v-navigation-drawer>

    <v-toolbar color="blue" app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" ></v-toolbar-side-icon>
      <router-link tag="button" to="leaderboard">
      <v-img style="position:absolute; top:5%; left:20%; right:10%; height: 150px;
        width: 200px;
        max-width: 250px;
        max-height: 90px;" 
        src="https://i.ibb.co/VQSwxC8/Fantag.png">
      </v-img>
    </router-link>
      <v-spacer></v-spacer>
    </v-toolbar>

      <transition name="fade" mode="out-in">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </transition>
  </v-app>
</template>

<script>
import firebase from 'firebase'

export default {
  data: () => ({
    drawer: false,
    clipped: true,
    logged: false,
	posted: false,
    username: '',
  }),

  methods: {
    logout () {
      firebase.auth().signOut().then(() => {
        this.$store.dispatch('resetUserStore')
        this.$router.replace('login')
      })
        .catch(e => (window.console.log('error logging out: ' + e)))
    },
    
    goToGs () {
	this.$router.go('report')
    }
  },

  mounted () {
    this.logged = this.$store.state.logged;
	this.posted = this.$store.state.posted
    this.user = this.$store.getters.user;
    this.username = this.$store.getters.username;
  },

  updated () {
    this.logged = this.$store.state.logged;
	this.posted = this.$store.state.posted
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
