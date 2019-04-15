<template>
  <v-container>
    <p> inside user comp</p>
    <p>{{ user_id }}</p>
  </v-container>
</template>

<script> 
  export default {
    data: () => ({
      user: this.$store.getters.user,
      user_id: this.$store.getter.uid
    })
  }
</script>
