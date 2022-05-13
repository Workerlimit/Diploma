<template>
  <div class="profile">
    <div class="profile__header">
      <div class="edit">
        <Avatar class="edit__avatar" size="large" :img="userInfo.avatar" />
        <input class="form-control edit__hidden" ref="fileInput" type="file" @input="pickFile">
      </div>
      <div class="profile__main">
        <div class="profile__name" :contenteditable="isEdit" spellcheck="false" @input="onInput">{{ userInfo.name }}</div>
        <div class="edit-btns">
          <Button v-if="!isEdit" type="outline" @click="() => this.isEdit = true">Edit profile</Button>
          <Button v-if="isEdit" type="outline" @click="() => this.isEdit = false">Cancel</Button>
          <Button v-if="isEdit" @click="setProfile()">Save</Button>
        </div>
      </div>
     
    </div>

  </div>
</template>

<script>
import Avatar from "@/components/common/Avatar.vue";
import Button from "@/components/common/Button.vue";

export default {
  name: 'Profile',
  components: {
    Avatar,
    Button
  },
  data(){
    return {
      user: null,
      newName: "",
      isEdit: false,
      previewImage: null
    }
  },
  computed: {
    userInfo: {
      get: function() {
        return this.$store.getters['user/getUser'];
      },
      set: function(newVal) {
        this.userInfo.name = newVal;
      }
    },
  },
  mounted() {
    this.$store.dispatch('user/fetchUser')
  },
  methods: {
    onInput(e){
      this.userInfo.name = e.target.innerText;
    },
    setProfile() {
      this.$store.dispatch('user/changeUserName', this.userInfo.name);
      this.isEdit = false;
    },
    selectImage () {
      this.$refs.fileInput.click()
    },
    async pickFile () {
      let input = this.$refs.fileInput
      let file = input.files
      if (file && file[0]) {
        let reader = new FileReader
        reader.onload = e => {
          this.previewImage = e.target.result
        }
        reader.readAsDataURL(file[0])
        this.$emit('input', file[0])
        let formData = new FormData();
        formData.append('avatar', file[0]);

        await this.$store.dispatch('user/changeUserAvatar', formData)
        location.reload();
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.profile {
  &__header {
    padding: 35px 45px;
    max-height: 200px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  &__name {
    padding: 20px;
    font-weight: 600;
    font-size: 96px;
    line-height: 112px;
    border: none;
  }
}
.edit-btns{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: auto;
  button + button {
    margin-left: 10px;
  }
}
.seller_image {
  width: 200px;
  height: 200px;
}
.imagePreviewWrapper {
  background-repeat: no-repeat;
    width: 250px;
    height: 250px;
    display: block;
    cursor: pointer;
    margin: 0 auto 30px;
    background-size: contain;
    background-position: center center;
}
.edit {
  position: relative;
  &__hidden {
    // display: none;
    position: absolute;
    bottom: 0;
    left: 40%;
    z-index: 2;
    background: #fff;
  }
  &__avatar:hover + .edit__hover{
    display: block;
  }

}
</style>