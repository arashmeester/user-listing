<template>
  <div>
    <user-header />
    <user-listing />
  </div>
</template>

<script>
import UserHeader from '~/components/UserHeader'
import UserListing from '~/components/UserListing'

export default {
  components: {
    UserHeader,
    UserListing
  }
}
</script>
