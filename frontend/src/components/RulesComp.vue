<template>
  <v-container>
    <br/>
    <br/>
    <h2>Welcome {{ username }} to Game Of Thrones' Fantamorto! Here are some simple rules you need to follow:</h2>
    <br>
    <h4>1) Once you've logged in, you will have a list of all the characters who are still alive;</h4><br>
    <h4>2) For every character choose if they will die or survive during Season 8;</h4><br>
    <h4>3) A button will appear after you're done choosing: click it to send us your choices;</h4><br>
    <h4>4) CHOOSE CAREFULLY! You only have one chance to submit your choices;</h4><br>
    <h4>5) Every correct answer will give you points and at the end of the season the points will be summed up. The player with more points will be the winner and they will go to the leaderboard;</h4><br>
    <h4>6) Have fun and Good luck :)</h4><br>
    <br>

    <router-link to="/home">
      <v-btn
          style="background: #2096f3 !important;"
      >
        Lets start
      </v-btn>
    </router-link>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    username: ''
  }),

  mounted() {
    this.username = this.$store.getters.username
  }
}
</script>

<style scoped>

</style>
