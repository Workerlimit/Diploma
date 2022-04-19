<template>
    <div class="avatar" :class=" (size == 'large') ? 'avatar--large' : 'avatar--small'">
        <img :src="img" alt="user avatar" />
        {{img}}
    </div>
</template>

<script>
export default{
  name: 'Avatar',
  props: {
    img: String,
    size: String,
  },
}
</script>

<style lang="scss">
.avatar {
    width: 38px;
    height: 38px;
    border-radius: 100%;    
    overflow: hidden;
    display: inline-block;
    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &--large {
        width: 200px;
        height: 200px;
    }
}
</style>
