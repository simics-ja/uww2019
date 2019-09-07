<template>
  <div>
    <div>
      <Jumbotron />
    </div>
    <div class="container">
      <p>UWW2019はじまるよー</p>
    </div>
  </div>
</template>

<script>
import Jumbotron from '~/components/Jumbotron.vue'

export default {
  components: {
    Jumbotron
  }
}
</script>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
