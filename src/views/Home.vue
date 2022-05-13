<template>
  <div class="home">
    <div class="content">
      <div class="content__block">
        <div class="content__top flex flex--space">
          <p class="content__title">Popular Albums</p>
          <button class="see-all-btn" @click="expandBlock(1)">See All</button>
        </div>
        <div class="content__nowrap" :class="{'content__nowrap--expand' : isExpand.album}">
          <Albums />
        </div>
      </div>
      <div class="content__block">
        <div class="content__top flex flex--space">
          <p class="content__title">Popular artists</p>
          <button class="see-all-btn" @click="expandBlock(2)">See All</button>
        </div>
        <div class="content__nowrap" :class="{'content__nowrap--expand' : isExpand.artist}">
          <Artists /> 
        </div>
      </div>
    </div>
    <!-- <Player /> -->
  </div>
</template>
<script>
import Artists from "@/components/artists/Artists.vue";
import Albums from "@/components/albums/Albums.vue";
// import Player from "@/components/common/Player.vue";

export default {
  name: "Home",
  components: {
    Artists,
    Albums
  },
  data() {
    return {
      content: "",
      isExpand: {
        album: false,
        artist: false
      }
    };
  },
  methods: {
    expandBlock(id) {
      if(id == 1) {
        this.isExpand.album = !this.isExpand.album;
      } else if(id == 2) {
        this.isExpand.artist = !this.isExpand.artist;
      }
    }
  }
};
</script>

<style lang="scss">
.home {
  position: relative;
}
.content {
  max-width: 100%;
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
  &__nowrap {
    height: 280px;
    overflow: hidden;
    &--expand {
      height: auto;
    }
  }
}
</style>