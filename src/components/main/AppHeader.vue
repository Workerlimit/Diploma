<template>
    <header style="width: 100%">
        <div class="header-content row flex flex--space">
            <div class="col flex flex--space">
                <PageArrow />
                <SearchField />
            </div>
            <div class="col col--btns flex flex--space">
                <Button v-if="isLoggedIn" type="outline" @click="logout()"> Logout</Button>
                <router-link v-if="isLoggedIn" to="/profile">
                    <div class="user">
                        <span class="user__name">{{ userInfo.name }}</span>
                        <Avatar :src="userInfo.avatar" />
                    </div>
                </router-link>
                <router-link v-if="!isLoggedIn" to="/signup">
                    <Button type="outline">Sign up</Button>
                </router-link>
                <router-link v-if="!isLoggedIn" to="/login">
                    <Button type="full"> Sign in </Button>
                </router-link>
            </div>
        </div>
    </header>
</template>

<script>
import SearchField from "../common/SearchField.vue";
import PageArrow from "../common/PageArrow.vue";
import Button from "../common/Button.vue";
import Avatar from "@/components/common/Avatar.vue";

export default  {
  name: "AppHeader",
  components: {
        PageArrow,
        SearchField,
        Button,
        Avatar
  },
  data() {
     
  },
  computed: {
    userInfo: {
      get: function() {
        return this.$store.getters['user/getUser'];
      }
    },
    isLoggedIn: {
        get: function() {
            return this.$store.getters['auth/getLogged'];
        }
    }
  },

methods: {
  logout() {
    this.$store.dispatch('auth/logout');
    this.$router.push("/login");
  }
}
}
</script>

<style lang="scss" scoped>
.header-content {
    max-height: 70px;
    background: $primary-color;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
    padding: 16px 35px;
    & .search {
        margin-left: 66px;
    }
}
.col--btns {
    column-gap: 20px;
}
.user {
    display: flex;
    align-items: center;
    &__name {
        font-size: 20px;
        line-height: 23px;
        margin-right: 8px;
    }
}
</style>