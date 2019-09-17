<template>
  <div class="bg-light">
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
@import 'assets/styles/scss/custom.scss';
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap');
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

</style>
