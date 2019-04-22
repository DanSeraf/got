<template>
<v-content class="bgimg">
  <SignUpComp />
</v-content>
</template>

<script>
  import SignUpComp from '../components/SignUpComp'

  export default {
    components: {
      SignUpComp
    }
  }
</script>

<style scoped>
.bgimg {
	background-image: url('https://images7.alphacoders.com/713/713990.jpg');
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
}
</style>
