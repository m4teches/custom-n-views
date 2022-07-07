<template>
  <div class="modal-overlay" v-if=display @click="display = false">
    <div class="modal" @click.stop>
      <p>{{book.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailModal",
  components: {
    // SearchResult: SearchResult,
  },
  data: function () {
    return {
      display: false,
      book: {}
    };
  },
  methods: {
    show(book){
      this.display = true;
      this.book = book;
      console.log(book.title);
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
  justify-content: end;
  background-color: #00000070;
  flex-direction: column;
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
