<template>
  <div>
    <b-navbar toggleable="lg" class="p-3 shadow-sm pl-5 pr-5">
      <b-navbar-brand :href="absolutePath" class="ml-5">
        UWW2019
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav justified class="ml-auto mr-5">
          <b-nav-item :href="absolutePath">
            Home
          </b-nav-item>
          <b-nav-item v-b-tooltip.hover title="外部リンクへ移動します" href="http://www.yumebutai.org/access/access.html">
            Venue
          </b-nav-item>
          <b-nav-item href="#" disabled>
            Proogram
          </b-nav-item>
          <b-nav-item-dropdown text="Attending">
            <b-dropdown-item :href="absolutePath + '/reg'">
              Registration
            </b-dropdown-item>
            <b-dropdown-item :href="absolutePath + '/reg/login.php'">
              Submission
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Download">
            <b-dropdown-item href="#" disabled>
              Template(LaTeX)
            </b-dropdown-item>
            <b-dropdown-item href="#" disabled>
              Template(Word)
            </b-dropdown-item>
            <b-dropdown-item href="#" disabled>
              Proceedings
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
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

<style lang="scss">
</style>
