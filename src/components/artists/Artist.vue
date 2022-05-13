<template>
    <div class="artist">
        <div class="artist__img">
            <img :src="item.avatar" />
        </div>
        <p class="artist__name"> {{ item.name }} </p> 
    </div>
</template>

<script>
export default {
    name: "Artist",
    props: {
        item: Object,
    },
}
</script>

<style lang="scss" scoped>
.artist {
    width: 200px;
    &__img {
        width: 100%;
        height: 200px;
        border-radius: 100%;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    &__name {
        text-align: center;
        font-size: 22px;
        line-height: 26px;
        margin: 27px 0;
        font-weight: 500;
    }
}
</style>