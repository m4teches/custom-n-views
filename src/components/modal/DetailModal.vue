<template>
  <div class="modal-overlay" v-if=display @click="display = false">
    <div class="modal" @click.stop>
      <detail :book="book"/>
    </div>
  </div>
</template>

<script>
import Detail from "../Detail.vue"
export default {
  name: "DetailModal",
  components: {
    Detail,
  },
  data: function () {
    return {
      display: false,
      book: {}
    };
  },
  watch:{
    // display(newVal){
    //   document.body.style.overflow = newVal ? 'hidden' : 'auto';
    // }
  },
  methods: {
    show(book){
      this.display = true;
      this.book = book;
      console.log(book);
    },
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  background-color: #00000070;
  flex-direction: column;
  backdrop-filter: blur(2px);
}

.modal {
  text-align: center;
  background-color: #6CC4A1;
  min-height: 200px;
  width: 100%;
  padding: 60px 0;
  border-radius: 5px 5px 0 0;
}
</style>
