<template>
    <div class="albums">
        <Album  v-for="item in albums" :key="item.id" :item="item"/>
    </div>
</template>

<script>
import Album from "./Album.vue";

export default{
    name: 'Albums',
    components:{
        Album,
    },
    computed: {
        albums: {
            get: function() {
                return this.$store.getters['album/getAlbums']
            }
        }
    },
    mounted() {
        this.$store.dispatch('album/fetchAlbum');
    }
}
</script>

<style lang="scss">
.albums{
    width: 100%;
    // display: flex;
    // column-gap: 35px;
    // flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(7, auto);
    grid-gap: 35px;
}
</style>