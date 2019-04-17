<template>
  <v-container>
    <br>
    <br>
    <h2>Welcome to FantaMorto of Game Of Thrones, the rules are simple:</h2>
    <br>
    <h4>1) Once you logged in, you will face all the characters that are still alive;</h4><br>
    <h4>2) You've to select if a Character will live or die during the Season 8;</h4><br>
    <h4>3) Once you've selected all the Characters, a botton will appear so that you can send us your choices;</h4><br>
    <h4>4) REMEMBER that once you send us the choices you can't go back so choose wisely;</h4><br>
    <h4>5) Every correct answer will gain you points, at the end of the season we will sum them up, e il giocatore che ha indovinato più morti/vivi vincerà e finirà nella leaderboard;</h4><br>
    <h4>6) Have fun and Good luck :)</h4><br>
    <br>

    <router-link to="/home">
      <v-btn
          style="background: #2096f3 !important;"
          @onclick="home"
      >
        Lets start
      </v-btn>
    </router-link>
  </v-container>
</template>

<script>
    export default {
        mounted(){
          if (this.$store.getters.posted === true) {
            this.state = false
          }
        }
    }
</script>

<style scoped>

</style>