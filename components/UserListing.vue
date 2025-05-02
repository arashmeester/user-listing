<template>
  <div class="layout-content">
    <div class="d-flex justify-content-end mb-4">
      <input type="text" v-model="params.keyword" class="py-2 px-3 w-100 w-md-45 w-lg-40" placeholder="Search user" @keyup.enter="handleSearch" />
    </div>
    <div>
      <div class="row d-none d-md-flex px-3 mb-2">
        <div class="col-2 text-muted pr-2">Date</div>
        <div class="col text-muted pr-2">Name</div>
        <div class="col-1 text-muted pr-2">Gender</div>
        <div class="col-2 text-muted pr-2">Country</div>
        <div class="col-3 text-muted pr-2">Email</div>
      </div>
      <div v-if="loading" class="d-flex justify-content-center align-items-center border shadow-sm p-4 rounded bg-white">
        <div class="spinner-border text-primary" role="status"></div>
      </div>
      <div v-else>
        <div v-if="filteredUsers.length > 0">
          <div class="border shadow-sm py-4 px-3 rounded bg-white mb-3 cursor-pointer" v-for="(user, index) in filteredUsers" :key="index" @click="toggleDetails(user)">
            <div class="row">
              <div class="col-md-2 col-6 pr-2">
                <span class="d-block d-md-none">Date:</span>
                <span class="text-muted">{{ $_formatDate(user?.dob?.date) }}</span>
              </div>
              <div class="col-md col-6 pr-2">
                <span class="d-block d-md-none mt-2">Name:</span>
                <span>{{ `${user?.name?.first} ${user?.name?.last}` }}</span>
              </div>
              <div class="col-md-1 col-6 pr-2 text-capitalize">
                <span class="d-block d-md-none mt-2">Gender:</span>
                <span class="text-muted">{{ user?.gender }}</span>
              </div>
              <div class="col-md-2 col-6 pr-2">
                <span class="d-block d-md-none mt-2">Country:</span>
                <span>{{ user?.location?.country }}</span>
              </div>
              <div class="col-md-3 col-6 pr-2 text-truncate">
                <span class="d-block d-md-none mt-2">Email:</span>
                <span class="text-muted">{{ user?.email }}</span>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="border shadow-sm p-4 rounded bg-white text-muted">No User..</div>
      </div>
    </div>
    <dialog-box :show="showModal" :user="selectedUser" :title="`${selectedUser?.name?.first} ${selectedUser?.name?.last}`" size="lg" @close="showModal = false" />
  </div>
</template>
<script>
import DialogBox from '@/components/DialogBox.vue';

export default {
  components: { DialogBox },
  data() {
    return {
      loading: false,
      users: [],
      filteredUsers: [],
      params: {
        keyword: '',
      },
      selectedUser: {},
      showModal: false,
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    async getUsers(page = 1) {
      this.loading = true;
      const { results } = await this.$axios.get('api', { params: { page: page, results: 20 } });
      this.users = results;
      this.filteredUsers = results;
      this.loading = false;
    },
    handleSearch() {
      const keyword = this.params.keyword.trim().toLowerCase();

      if (keyword) {
        this.$router.push(`?keyword=${encodeURIComponent(keyword)}`);

        this.filteredUsers = this.users.filter((item) => {
          const userName = `${item?.name?.first} ${item?.name?.last}`;
          return userName.toLowerCase().includes(keyword);
        });
      } else {
        this.$router.push('/');

        this.filteredUsers = this.users;
      }
    },
    toggleDetails(data) {
      this.showModal = !this.showModal;
      this.selectedUser = data;
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
