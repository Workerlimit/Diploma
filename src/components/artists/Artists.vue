<template>
    <div class="artists">
        <Artist  v-for="item in artists" :key="item.id" :item="item"/>
    </div>
</template>

<script>
import Artist from "./components/Artist.vue";

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
            img: "",
            name: "Name",
        },
        {
            id: 2, 
            img: "",
            name: "Name",
        },
        {
            id: 3, 
            img: "",
            name: "Name",
        },
        {
            id: 4, 
            img: "",
            name: "Name",
        },
        {
            id: 5, 
            img: "",
            name: "Name",
        },
        {
            id: 6, 
            img: "",
            name: "Name",
        },
        {
            id: 7, 
            img: "",
            name: "Name",
        },
        {
            id: 8, 
            img: "",
            name: "Name",
        },
        {
            id: 9, 
            img: "",
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
    column-gap: 35px;
    row-gap: 75px;
}
</style>