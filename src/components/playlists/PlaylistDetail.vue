<template>
    <div class="playlist-page">
        <div class="playlist-page__top">
            <div class="playlist-page__cover">
                <img src="@/assets/images/playlist/playlist-cover.png" />
            </div>
            <div class="playlist-detail">
                <p class="playlist-detail__text">Playlist</p>
                <p class="playlist-detail__name"> {{ playlist }} </p>
                <!-- <p class="playlist-detail__text"> {{ userInfo.name }} </p> -->
                    <!-- <p class="playlist-detail__count"> {{ playlist.tracks.length }} </p> -->
            </div>
        </div>
        <div class="playlist-page__content">
            <PlayButton @click="changePlayState" :isPlay="isPlay" />
            <div class="playlist-table">
                <div class="playlist-table__row">
                    <div style="width: 20px;">#</div>
                    <div style="width: 32%">Title</div>
                    <div style="width: 32%">Album</div>
                    <div style="width: 32%;">Artist</div>
                    <div style="width: 45px;">Time</div>
                </div>
                <div>
                    <!-- <div v-for="track in tracks" :key="track.id" class="playlist-list-item playlist-table__row" 
                        :class="{'playlist-list-item--active' : activeIndex == track.id}" 
                        @mouseover="selectIndex(track.id)" @mouseleave="itemIndex = null"
                        @click="setActiveTrack(track.id)"> -->
                        
                            <!-- <PlayButton @click="changeTrackState(track.id)" :isPlay="isPlay" /> -->
                        <!-- <audio :ref="'element' + track.id" :src="track.file"></audio>
                
                        <div style="width: 20px;" class="align-center">
                            <div v-if="itemIndex == track.id || activeIndex == track.id" class="playlist-hover"><PlayButton :width="25" @click="changeTrackState(track.id)" :isPlay="isPlayTrack" /> </div>
                            <span v-else class="playlist-table__id">{{ track.id }}</span>    
                        </div>
                        <div style="width: 32%" class="align-center"> 
                            <div class="playlist-table__item">
                                <img class="playlist-table__cover" :src="track.album.cover"/>
                                {{ track.title }}
                            </div> 
                        </div>
                        <div style="width: 32%" class="align-center"> <span class="playlist-table__item"> {{ track.album.name }} </span></div>
                        <div style="width: 32%" class="align-center"> <span class="playlist-table__item">{{ track.album.artist }} </span></div>
                        <div style="width: 45px" class="align-center"> <span class="playlist-table__item playlist-table__item--time">3:05 </span></div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PlayButton from "@/components/common/PlayButton.vue";

export default {
    name: 'PlaylistDetail',
    components: {
        PlayButton
    },
    data() {
        return {
            urlId: 0,
            tracks: [],
            isPlay: false,
            upHere: false,
            itemIndex: null,
            activeIndex: null,
            playIndex: null,
            isPlayTrack: false,
            currentTrack: 1
        }
    },
    props:["id"],
    created() {
        this.urlId = this.$route.params.playlistId;
        // this.tracks = this.playlist.tracks;
        
    },
    computed: {
        isLoggedIn: {
            get: function() {
                return this.$store.getters['auth/getLogged'];
            }
        },
        userInfo: {
            get: function() {
                return this.$store.getters['user/getUser'];
            }
        },
        playlist: {
            get: function() {
                return this.$store.getters['playlist/getOnePlaylist', this.$route.params.id];
            }
        },
        
    },
    mounted() {
        if(this.isLoggedIn){
            this.$store.dispatch('playlist/getOnePlaylist', this.$route.params.id)
        }
    },
    methods: {
        changePlayState() {
            this.isPlay = !this.isPlay;
            this.activeIndex = null;
            this.isPlayTrack = !this.isPlayTrack;
            
            if(this.activeIndex == null) {
                this.activeIndex = 1;
                this.playIndex = 1;
                this.playMusic(1);
            } else {
                this.playMusic(this.playIndex);
            }
        },
        setActiveTrack(id) {
            this.activeIndex = id;
            this.currentTrack = id;
        },
        changeTrackState(id) {
            this.isPlay = !this.isPlay;
            this.isPlayTrack = !this.isPlayTrack;
            this.playIndex = id;
            this.playMusic(id);
        },
        playMusic(id) {
            if(this.isPlayTrack) {
                this.$refs["element"+id][0].play();
            } else {
               this.$refs["element"+id][0].pause();
            }
        },
        selectIndex(index) { 
            this.itemIndex = index;
        }
    }
}
</script>

<style lang="scss" scoped>

.playlist-page {
    padding: 35px;
    &__top {
        display: flex;
        align-items: center;
        gap: 37px;
        padding: 0 0 25px;
        border-bottom: 2px solid $gray-title;
    }
    &__cover {
        border-radius: 10px;
        height: 200px;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    &__content {
        margin-top: 15px;
    }
}
.playlist-detail {
    &__text {
        font-weight: bold;
    }
    &__name {
        font-weight: 600;
        font-size: 96px;
        line-height: 112px;
    }
}
.playlist-table{ 
    width: 100%;
    margin-top: 20px;
    &__row {
        display: flex;
        padding: 8px 10px;
    }
    &__id {
        font-weight: 600;
        font-size: 20px;
    }
    &__cover{
        width: 58px;
        height: 58px;
        border-radius: 2px;
        margin-right: 12px;
    }
    &__item{
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 20px;
        &--time {
            color: #979797;
        }
    }
}
.playlist-hover {
    height:100%;
    width: 100%;
    position: absolute;
    top: 33%;
    left: 3px;
    z-index: 2;
}
.playlist-list-item {
    position: relative;
    border-radius: 5px;
    padding: 8px 10px;
    transition: all 0.3s ease;
    &:hover, &--active {
        background: $gray;
    }
}
</style>