<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import EventBus from "./common/EventBus";
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
  },
  beforeUnmount() {
    EventBus.remove("logout");
  }
};
</script>