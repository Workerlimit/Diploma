<template>
    <div class="albums flex flex--space">
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
    data() {
        return {
            albums: [
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
                }
            ]
        }
    }
}
</script>

<style lang="scss">
.albums{
    width: 100%;
    display: flex;
    column-gap: 35px;
    flex-wrap: wrap;
}
</style>