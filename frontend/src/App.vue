<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      v-if="logged"
      temporary
      absolute
      >
        <v-toolbar flat class="transparent">
        <v-list class="pa-1">
          <router-link :to="uroute_profile" tag="dark">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="./assets/catti.png">
            </v-list-tile-avatar>
            <v-list-tile-content>
              {{ userId }}
            </v-list-tile-content>
            <v-btn fab small @click.native="logout()" color="grey">
              <v-icon>fa-sign-out</v-icon>
            </v-btn>
          </v-list-tile>
        </router-link>
        </v-list>
      </v-toolbar>
      <v-list class="pt-0" dense>
        <router-link to="/home" tag="dark">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title> Home </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <v-divider></v-divider>
        <router-link :to="uroute_reports" tag="dark">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>account_circle</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title> My Profile </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <v-divider></v-divider>
        <router-link :to="uroute_profile" tag="dark">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>fa-cog</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title> Settings </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <v-divider></v-divider>
			</v-list>
    </v-navigation-drawer>

    <v-toolbar fixed app :clipped-left="clipped" color="blue">
      <v-toolbar-side-icon v-if="logged" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <router-link to="/home" tag="button">
        <div class="title" >
          <v-img style="position: absolute; top:2%; left:3%; width: 120px; height:120px;" src="https://www.fantamorto.org/wp-content/themes/fm18/images/logo.png?x70317"></v-img>
          <v-img style="width: 500px; height: 140px;" src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Logo_Game_of_Thrones.png"></v-img>
        </div>
      </router-link>
      <v-spacer></v-spacer>
      <v-btn
        flat
        to="/about"
        >
        <span class="mr-2">Donate</span>
      </v-btn>
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
    uroute_profile: '',
    uroute_reports: '',
    uroute_user: '',
  }),

  methods: {
    logout () {
      firebase.auth().signOut().then(() => {
        this.$store.dispatch('resetUserStore')
        this.$router.go('login')
      })
        .catch(e => (window.console.log('error logging out: ' + e)))
    }
  },

  mounted () {
    this.logged = this.$store.state.logged;
    this.user = this.$store.getters.user;
    this.userId = this.$store.getters.uid;
    this.uroute_user = this.$store.getters.uroute_user;
    this.uroute_profile = this.$store.getters.uroute_profile;
    this.uroute_reports = this.$store.getters.uroute_reports;
  },

  updated () {
    this.logged = this.$store.state.logged;
    this.user = this.$store.getters.user;
    this.userId = this.$store.getters.uid;
    this.uroute_user = this.$store.getters.uroute_user;
    this.uroute_profile = this.$store.getters.uroute_profile;
    this.uroute_reports = this.$store.getters.uroute_reports;
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
