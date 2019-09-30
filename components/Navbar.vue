<template>
  <div>
    <b-navbar toggleable="lg" class="shadow-sm">
      <b-navbar-brand to="/" class="ml-3">
        <b-img src="~/assets/images/uww_logo_notitle_black.svg" alt="UWW2019" class="uww-logo" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav justified class="ml-auto">
          <b-nav-item to="/" class="p-2 marking-hover-primary">
            <span class="uww-title-font">Home</span>
          </b-nav-item>
          <b-nav-item v-b-tooltip.hover title="外部リンクへ移動します" href="http://www.yumebutai.org/access/access.html" class="p-2 marking-hover-success">
            <span class="uww-title-font">Access</span>
          </b-nav-item>
          <b-nav-item v-b-tooltip.hover title="後日公開予定です" to="/program" class="p-2 marking-hover-info" disabled>
            <span class="uww-title-font">Program</span>
          </b-nav-item>
          <b-nav-item-dropdown text="Attending" class="p-2 marking-hover-secondary uww-title-font" right>
            <b-dropdown-item :href="absolutePath + 'reg'" class="text-center">
              <span>Registration</span>
            </b-dropdown-item>
            <b-dropdown-item :href="absolutePath + 'reg/login.php'" class="text-center">
              <span>Submission</span>
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Download" class="p-2 marking-hover-warning uww-title-font" right>
            <b-dropdown-item :href="absolutePath + 'UWW2019_Format_LaTeX.zip'" class="text-center" download>
              <span>Template(LaTeX)</span>
            </b-dropdown-item>
            <b-dropdown-item :href="absolutePath + 'word_UWW2019.docx'" class="text-center" download>
              <span>Template(Word)</span>
            </b-dropdown-item>
            <b-dropdown-item href="#" class="text-center" disabled>
              <span>Proceedings</span>
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

<style lang="scss" scoped>
.uww-logo {
  height: 2rem;
}
</style>
