<template>
  <span>
    <h1>{{book.title}}</h1>
    <p>({{book.author}})</p>
    <p>{{book.release_year}}</p>
    <badges :list="book.category" />
    <p>{{book.shelf}}</p>
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