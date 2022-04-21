<template>
    <div class="album">
        <div class="album__img">
            <img :src="item.img" />
        </div>
        <p class="album__name"> {{ item.name }} </p> 
    </div>
</template>

<script>
export default {
    name: 'Album',
    props: {
        item: Object,
    },
}
</script>

<style lang="scss" scoped>
.album {
    width: 200px;
    &__img {
        width: 100%;
        height: 200px;
        border-radius: 10px;
        background: $gray;
    }
    &__name {
        text-align: left;
        font-size: 22px;
        line-height: 26px;
        margin: 27px 10px;
    }
}
</style>