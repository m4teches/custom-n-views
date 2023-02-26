<template>
  <span>
    <h1>{{book.title}}</h1>
    <p>({{book.author}})</p>
    <p>{{book.release_year}}</p>
    <p>
      {{ book.description }}
    </p>
    <badges :list="book.category" />
    <p>{{book.shelf}}</p>
    <!-- <button v-on:click="openBook">Kölcsönzés</button> -->
    <!-- <button v-on:click="openEditor">Borító feltöltése</button> -->
  </span>
</template>

<script>
import Badges from "./Badges.vue"
import axios from "axios";

export default {
  name: "Detail",
  components: {
    Badges,
  },
  props: {
    book: Object,
  },
  methods: {
    openBook(){
      this.$router.push({ path: `/book/${this.book.id}` })
    },
    openEditor(){
      this.$router.push({ path: `/cover/${this.book.id}` })
    },
    async createLoan() {
      console.log(this.book);
      try {
        const response = await axios.post(process.env.VUE_APP_BL_API+'/api/loans/'+this.book.id, {
          book_id: this.book.id,
          member_id: 1,
          return_by: '2023-12-12',
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
span{
  display:inline-block;
  font-family: 'Source Code Pro', monospace;
}
h1{

}
p{

}
</style>