<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>