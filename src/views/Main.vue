<template>
    <div class="main">
      <div class="main__content">
        <NavigationDrawer />
        <div style="width: auto; margin-left: 220px;">
          <AppHeader />
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
import AppHeader from "@/components/main/AppHeader.vue";
import NavigationDrawer from "@/components/main/NavigationDrawer.vue";

export default {
    name: "Main",
    components: {
        AppHeader, 
        NavigationDrawer
    }
}
</script>

<style lang="scss">
.main{
  &__content{
    width: 100%;
    display: flex;
  }
}
</style>