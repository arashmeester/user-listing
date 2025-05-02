<template>
  <div
    class="layout-header user-header d-md-flex align-items-center justify-content-between text-center text-md-left"
  >
    <div class="d-md-flex align-items-center">
      <img src="/Avatar.png" class="image mt-4 mt-md-0" alt="Responsive image" />
      <div class="text-white pt-2 pt-md-4 mx-md-5 mx-2 text-center text-md-left mb-4 mb-md-0">
        <div class="h2 font-weight-bold">John Cena</div>
        <div>Last Online: 2 days ago</div>
      </div>
    </div>
    <div class="d-lg-flex justify-content-between align-items-center text-sm-right pb-4 pb-md-0">
      <button
        type="button"
        class="btn send-msg-button p-2 rounded min-w-px-180 mr-lg-2 mb-2 mb-lg-0"
      >
        <i class="fas fa-paper-plane mr-2"></i> Send Message
      </button>
      <button type="button" class="btn add-friend-button p-2 min-w-px-180">
        <i class="fas fa-plus mr-2"></i>
        Add Friend
      </button>
    </div>
  </div>
</template>
<style lang="scss" src="@/assets/styles/user-profile.scss" scoped></style>
