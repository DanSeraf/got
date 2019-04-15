<template>
  <v-content>
    <transition name="fade" class="out-in">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </v-content>
</template>

<style>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 2s ease; 
}
</style>
