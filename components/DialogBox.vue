<template>
  <div>
    <div v-if="show" class="modal-backdrop fade show"></div>

    <div class="modal fade" :class="{ 'show d-block': show }" tabindex="-1" @click.self="handleBackdropClick">
      <div class="modal-dialog modal-dialog-centered" :class="modalSize">
        <div class="modal-content p-4">
          <div class="modal-header">
            <h5 class="modal-title h3">{{ title }}</h5>
            <i class="fas fa-times fa-2x cursor-pointer" @click="close"></i>
          </div>
          <div class="modal-body">
            <slot>
              <div class="h6">
                <div class="row no-gutters mb-3">
                  <div class="col-md-2 text-muted">Date:</div>
                  <div class="col-md">{{ $_formatDate(user?.dob?.date) }}</div>
                </div>
                <div class="row no-gutters mb-3">
                  <div class="col-md-2 text-muted">Age:</div>
                  <div class="col-md">{{ user?.dob?.age }}</div>
                </div>
                <div class="row no-gutters mb-3">
                  <div class="col-md-2 text-muted">Gender:</div>
                  <div class="col-md text-capitalize">{{ user?.gender }}</div>
                </div>
                <div class="row no-gutters mb-3">
                  <div class="col-md-2 text-muted">Country:</div>
                  <div class="col-md">{{ user?.location?.country }}</div>
                </div>
                <div class="row no-gutters mb-3">
                  <div class="col-md-2 text-muted">Email:</div>
                  <div class="col-md">{{ user?.email }}</div>
                </div>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    title: {
      type: String,
      default: 'Modal Title',
    },
    size: {
      type: String,
      default: '', // '', 'modal-sm', 'modal-lg', 'modal-xl'
    },
    user: {
      type: Object,
      default: {},
    },
    backdrop: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    modalSize() {
      return this.size ? `modal-${this.size}` : '';
    },
  },
  watch: {
    show(newVal) {
      if (newVal) {
        document.body.classList.add('modal-open');
      } else {
        document.body.classList.remove('modal-open');
      }
    },
  },
  methods: {
    close() {
      this.$emit('close');
    },
    submit() {
      this.$emit('submit');
    },
    handleBackdropClick() {
      if (this.backdrop) {
        this.close();
      }
    },
  },
};
</script>
