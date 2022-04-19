<template>
  <div class="profile">
    <div class="profile__header">
      <Avatar size="large" :src="userInfo.avatar" />
      <!-- <div class="profile__name">
        <input v-model="userInfo.name" :disabled="!isEdit"/>
         
      </div> -->
      <div class="profile__main">
        <div class="profile__name" :contenteditable="isEdit" spellcheck="false" @input="onInput">{{ userInfo.name }}</div>
        <div class="edit-btns">
          <Button v-if="!isEdit" type="outline" @click="() => this.isEdit = true">Edit profile</Button>
          <Button v-if="isEdit" type="outline" @click="() => this.isEdit = false">Cancel</Button>
          <Button v-if="isEdit" @click="setProfile()">Save</Button>
        </div>
      </div>
     
      <!-- <img :src="userInfo.avatar" /> -->
      <!-- <input v-model="userInfo.avatar" :disabled="!isEdit"/> -->
    </div>

    <!-- <input type="file" ref="file" style="display: none" @change="getNewAvatar()">
    <button @click="$refs.file.click()">open file dialog</button> -->

    <!-- <div class="seller_image" :style="{background: 'url(' + user_credentials.avatar +')', backgroundSize: 'cover ', display: 'block'}">

    </div> -->
    <input type="file" @click="uploadImage" >

    <p>
      {{userInfo}}
    </p>
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
      isEdit: false
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
      // this.$store.dispatch('user/changeUserAvatar', this.userInfo.avatar);
      this.isEdit = false;
    },
    uploadImage(e){
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e =>{
          this.previewImage = e.target.result;
          console.log(this.previewImage);
      };
  },
   changeAvatar() {
      const input = document.createElement('input');
      input.setAttribute("type", "file");
      let data;
      input.addEventListener('change', function() {
        if (this.files) {
        //   console.log(this.files[0])
          data = this.files[0];
          
        //  var reader = new FileReader();
        //   reader.onload = function(e) {
        //     // image is loaded callback
        //     // this.userInfo.avatar = e.target.result;
        //     console.log(this.files)
        //     console.log("----------------------------------------------------")
        //     // console.log(this.files[0])
        //     // console.log("0----------------------------------------------------")
        //     console.log(e.target)
        //     this.$store.dispatch('user/changeUserAvatar', e.target.result);
        //     // this.$store.dispatch('user/changeUserAvatar', this.userInfo.avatar)
        //     // here you can post the data to your backend...
        //   };
          // reader.readAsDataURL(this.files[0]);
          // console.log(this.files[0])
        }
      })

      this.$store.dispatch('user/changeUserAvatar', data);
      input.click(); 
      
      return false; 
    }
  }
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
</style>