<template>
    <div class="artists" >
        <Artist  v-for="item in artists" :key="item.id" :item="item"/>
    </div>
</template>

<script>
import Artist from "./Artist.vue";

export default {
    name: "Artists",
    components:{
        Artist,
    },
    computed: {
        artists: {
            get: function() {
                return this.$store.getters['artist/getArtist']
            }
        }
    },
    mounted() {
        this.$store.dispatch('artist/fetchArtist')
    }
}
</script>

<style lang="scss">
.artists{
    width: 100%;
    // max-width: 1620px;
    // display: flex;
    // flex-wrap: wrap;
    // column-gap: 80px;
    // row-gap: 75px;
    display: grid;
    grid-template-columns: repeat(7, auto);
    grid-gap: 35px;
}
</style>