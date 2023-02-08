<template>
  <span>
    <h1>{{book.title}}</h1>
    <p>({{book.author}})</p>
    <p>{{book.release_year}}</p>
    <badges :list="book.category" />
    <p>{{book.shelf}}</p>
    <!-- <button v-on:click="openBook">Kölcsönzés</button> -->
  </span>
</template>

<script>
import Badges from "./Badges.vue"
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
      this.$router.push({ path: `book/${this.book.id}` })
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