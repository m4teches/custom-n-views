<template>
  <div class="search-container">
    <SearchResult
      v-for="result in featured"
      :result="result"
      :key="result.name"
    />
  </div>
</template>

<script>
import SearchResult from "./SearchResult.vue";
export default {
  name: "SearchContainer",
  components: {
    SearchResult: SearchResult,
  },
  computed:{
    featured() {
      // return this.results.slice(0, 6);
      return this.results;
    }
  },
  data: function () {
    return {
      imgLink: null,
    };
  },
  props: {
    results: Array,
  },
};
</script>

<style>
.search-container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
