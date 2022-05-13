<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header"></slot>
        <button
          type="button"
          class="btn-close"
          @click="close"
        >
          x
        </button>
      </header>

      <section class="modal-body">
        <div v-if="type == 'create'">
          <label>Name your playlist</label> <br>  
          <input v-model="newPlaylist" type="text" />      
        </div>  
      </section>

      <footer class="modal-footer">
        <Button @click="createPlaylist">Save</Button>
      </footer>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
  export default {
    name: 'Modal',
    components: {
      Button
    },
    props: {
      type: {
        default: ""
      }
    },
    data() {
      return {
        newPlaylist: ""
      }
    },
    methods: {
      createPlaylist() {
        this.$store.dispatch("playlist/addPlaylist", this.newPlaylist);
        this.close();
      },
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style lang="scss" scoped>
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    width: 550px;
    border-radius: 10px;
    padding: 33px 34px 37px 42px;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    justify-content: center;
    font-size: 26px;
    font-weight: 500;
  }

  .modal-footer {
    flex-direction: column;
    justify-content: flex-end;
    button {
      width: 210px;
      height: 44px;
      margin: 0 auto;
      font-size: 16px;
    }
  }

  .modal-body {
    position: relative;
    padding: 15px 10px;
    input {
      margin: 8px 0 0;
      min-width: 100%;
      max-width: 100%;
      border: 1px solid #878787;
      border-radius: 5px;
      outline: none;
      padding: 10px 15px;
      -ms-box-sizing: border-box; 
      -khtml-box-sizing: border-box; 
      -webkit-box-sizing: border-box; 
      -moz-box-sizing: border-box;  
      box-sizing: border-box;
    }
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    cursor: pointer;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>