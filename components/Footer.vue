<template>
  <div>
    <div id="contact" class="text-center py-3 shadow-sm gray-highlighter">
      <fa :icon="faEnvelope" /><span class="ml-2">uww2019_org"at"ubi.eedept.kobe-u.ac.jp</span>
    </div>
    <div id="copyright" class="text-center py-5">
      <span>(c) Tsukamoto Terada lab.</span>
    </div>
  </div>
</template>

<script>
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
export default {
  computed: {
    faEnvelope () {
      return faEnvelope
    }
  }
}
</script>

<style lang="scss" scoped>
.gray-highlighter {
  background-color: $gray-200;
}
</style>
