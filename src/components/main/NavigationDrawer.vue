<template>
    <div class="navigation">
        <div class="navigation__logo flex flex--center">
            <Logo />
        </div>
        <div class="navigation__menu">
            <ul class="menu">
                <li class="menu__item" @click="setActiveEl(1)" :class="(active_el == 1) ? 'active' : '' "><router-link to="/">Home</router-link></li>
                <li class="menu__item" @click="setActiveEl(2)" :class="{active: active_el == 2 }"><router-link to="/library">My Library</router-link></li>
                <li class="menu__item" @click="setActiveEl(3)" :class="{active: active_el == 3 }"><router-link to="/liked">Liked Songs</router-link></li>
            </ul>
            <div class="playlist">
                <p class="playlist__title"> Playlists </p>
                <ul>
                    <li><router-link to="#"> Playlist #1 </router-link></li>
                    <li><router-link to="#"> Playlist #1 </router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Logo from "../common/Logo.vue";

export default {
    name: "NavigationDrawer",
    components: {
        Logo
    },
    watch: {
        active_el: {
            handler() {
                if(this.$router.path != "/" && this.$router.path != "/library" && this.$router.path != "/profile" && this.$router.path != "/playlists"){
                    this.active_el = 0;
                }
            }
        }
    },
    data() {
        return {
            active_el: 0
        }
    },
    mounted() {
        if(this.$route.path == "/") {
            this.active_el = 1;
        } else if(this.$route.path == "/library") {
            this.active_el = 2;
        } else {
            this.active_el = 3;
        }
    },
    methods: {
        setActiveEl(index) {
            this.active_el = index;
            console.log(this.active_el)
        }
    }
}
</script>

<style lang="scss">
.navigation {
    position: fixed;
    left: 0;
    top: 0;
    min-width: 220px;
    height: 100vh;
    background: $light-gray;
    text-align: left;
    &__logo {
        height: 180px;
    }
}
.menu {
    margin-top: 5px;
    &__item {
        position: relative;
        padding: 6px 25px;
        a {
            font-size: 20px;
        }
        & + & {
            margin-top: 11px;
        }
        &--active {
            font-weight: bold;
            &::before {
                content: '';
                display: inline-block;
                position: absolute;
                left: 0;
                top: 0;
                width: 4px;
                height: 35px;
                border-radius: 0px 3px 3px 0px;
                background: $secondary-color;
            }
        }
    }
}
.playlist {
    margin-top: 18px;
    padding-left: 25px;
    &__title {
        color: $gray-title;
        font-size: 24px;
        margin-bottom: 21px;
    }
    a {
       font-size: 20px;
    }
    li + li {
        margin-top: 17px;
    }
}
</style>