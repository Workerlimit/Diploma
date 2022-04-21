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
    data(){
        return {
        artists: [
        {
            id: 1, 
            img: "@/assets/images/artist/artist-cover.jpg",
            name: "Name",
        },
        {
            id: 2, 
            img: "@/assets/images/artist/artist-cover.jpg",
            name: "Name",
        },
        {
            id: 3, 
            img: "@/assets/images/artist/artist-cover.jpg",
            name: "Name",
        },
        {
            id: 4, 
            img: "@/assets/images/artist/artist-cover.jpg",
            name: "Name",
        },
        {
            id: 5, 
            img: "@/assets/images/artist/artist-cover.jpg",
            name: "Name",
        },
        {
            id: 6, 
            img: "@/assets/images/artist/artist-cover.jpg",
            name: "Name",
        },
        {
            id: 7, 
            img: "@/assets/images/artist/artist-cover.jpg",
            name: "Name",
        },
        {
            id: 8, 
            img: "@/assets/images/artist/artist-cover.jpg",
            name: "Name",
        },
        {
            id: 9, 
            img: "@/assets/images/artist/artist-cover.jpg",
            name: "Name",
        }
    ]   
    }}
}
</script>

<style lang="scss">
.artists{
    width: 100%;
    // max-width: 1620px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 80px;
    row-gap: 75px;
}
</style>