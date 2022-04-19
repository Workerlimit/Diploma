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
        <Artists /> 
      </div>
    </div>
    <!-- <Player /> -->
  </div>
</template>
<script>
import Artists from "@/components/artists/Artists.vue";
// import Albums from "@/components/albums/Albums.vue";
// import Player from "@/components/common/Player.vue";
import SeeAllBtn from "@/components/common/SeeAllBtn.vue";

export default {
  name: "Home",
  components: {
    SeeAllBtn,
    Artists
  },
  data() {
    return {
      content: "",
    };
  },
  mounted() {
   
  },
};
</script>