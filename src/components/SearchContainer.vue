<template>
  <div class="search-container">
    <SearchResult
      v-for="result in results"
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
}
</style>
