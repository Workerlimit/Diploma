<template>
    <div class="main">
      <div class="main__content">
        <NavigationDrawer />
        <div style="width: 100%; margin-left: 220px;">
          <AppHeader />
          <router-view></router-view>
        </div>
        <div class="player-bottom">
          <MusicPlayer />
        </div>
      </div>
    </div>
</template>

<script>
import AppHeader from "@/components/main/AppHeader.vue";
import NavigationDrawer from "@/components/main/NavigationDrawer.vue";
import MusicPlayer from "@/components/common/MusicPlayer.vue";

export default {
    name: "Main",
    components: {
        AppHeader, 
        NavigationDrawer,
        MusicPlayer,
    }
}
</script>

<style lang="scss">
.main{
  &__content{
    min-width: 100%;
    display: flex;
    position: relative;
  }
}
.player-bottom {
  width: 1700px;
  margin-left: 220px;
  position: fixed;
  bottom: 0;
  background: #FAFAFA;
}
</style>