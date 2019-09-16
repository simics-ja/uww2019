<template>
  <div class="bg-light">
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import 'assets/styles/scss/custom.scss';
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap');
</style>
