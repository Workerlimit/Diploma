<template>
  <div class="home">
    <div class="content">
      <div class="content__block">
        <div class="content__top flex flex--space">
          <p class="content__title">Popular Albums</p>
          <SeeAllBtn />
        </div>
        <!-- <Albums /> -->
      </div>
      <div class="content__block">
        <div class="content__top flex flex--space">
          <p class="content__title">Popular artists</p>
          <SeeAllBtn />
        </div>
        <!-- <Artists />  -->
      </div>
    </div>
    <!-- <Player /> -->
  </div>
</template>

<script>
// import Artists from "@/components/artists/Artists.vue";
// import Albums from "@/components/albums/Albums.vue";
// import Player from "@/components/common/Player.vue";
import SeeAllBtn from "@/components/common/SeeAllBtn.vue";

export default {
    name: "Home",
    components: {
        // Albums,
        // Artists,
        // Player,
        SeeAllBtn
    },
}
</script>

<style lang="scss">
.home {
  position: relative;
}
.content {
  padding: 25px 40px;
  &__title {
    text-align: left;
    margin-bottom: 40px;
    font-weight: 500;
    font-size: 26px;
    line-height: 30px;
  }
  &__block {
    margin-bottom: 35px;
  }
}
</style>