<template>
  <div class="pt-3 pb-3">
    <div class="container shadow-sm rounded-lg mb-3">
      <b-container class="py-3 px-3">
        <b-row>
          <h1>テスト</h1>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    absolutePath () {
      return `${process.env.baseUrl}${this.$router.history.base}${this.$route.path}`
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
