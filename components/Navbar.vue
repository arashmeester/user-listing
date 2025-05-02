<template>
  <div class="fixed-top layout-nav" :class="{ 'layout-nav-scrolled': isScrolled }">
    <div class="d-flex justify-content-between w-100">
      <div
        class="layout-nav-menu align-items-center d-flex justify-content-between"
      >
        <div class="mr-4">
          <nuxt-link to="/">
            <img id="logo" src="/Logo.png" class="layout-brand" />
          </nuxt-link>
        </div>
        <div class="d-flex">
          <div>
            <i class="fas fa-bell cursor-pointer"></i>
          </div>
          <div class="mx-4">
            <i class="fas fa-cog cursor-pointer"></i>
          </div>
          <div>
            <i class="fas fa-sign-out-alt cursor-pointer"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isScrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    }
  }
}
</script>
