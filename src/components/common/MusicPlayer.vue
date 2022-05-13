<template>
    <div class="player">
        <div class="track-info">
            {{ currentAudioName || audioList[0].name }}
        </div>
        <audio-player
        ref="audioPlayer"
        :audio-list="audioList.map(elm => elm.url)"
        :before-play="handleBeforePlay"
        theme-color="#6900FF"
        />
        <div class="track-info">
            
        </div>
  </div>
</template>

<script>
import AudioPlayer from '@liripeng/vue-audio-player';

export default {
    name: 'MusicPlayer',
    components: {
       AudioPlayer
    },
    data() {
    return {
      currentAudioName: '',
      audioList: [
        {
          name: 'audio1',
          url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
        },
        {
          name: 'audio2',
          url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3'
        }
      ]
    }
  },

  methods: {
    handleBeforePlay(next) {
      this.currentAudioName = this.audioList[this.$refs.audioPlayer.currentPlayIndex].name

      next() 
    }
  }
}
</script>

<style lang="scss">
.track-info {
    width: 320px;
    background-color: red;
    height: auto;
}
.audio__progress-wrap {
    margin: 0 200px 20px;
    width: auto;
    position: relative;
    z-index: 2;
}
.audio__btn-wrap {
    width: 100%;
    margin-top: 10px;
}
.audio-player {
    width: 60%;
    position: relative;
    padding: 8px 20px;
}
.player {
    // display: flex;
    display: none;
}
.audio__time-wrap {
    width: 75%;
    margin-left: 160px;
    position: absolute;
    bottom: 21%;
}
</style>