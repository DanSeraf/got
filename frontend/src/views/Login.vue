<template>
<v-content class="bgimg">
  <LoginComp />
</v-content>
</template>

<script>
  import LoginComp from '../components/LoginComp'

  export default {
    components: {
      LoginComp
    }
  }
</script>
<style scoped>
.bgimg {
	background-image: url('https://images7.alphacoders.com/713/713990.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}
</style>
