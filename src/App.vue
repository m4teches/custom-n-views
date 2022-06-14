<template>
  <NInput label="Kereső" placeholder="Bágyi könvtári kereső..." />
  <SearchContainer :results="results" />
</template>

<script>
import NInput from "./components/NInput.vue";
import SearchContainer from "./components/SearchContainer.vue";
export default {
  name: "App",
  data: function () {
    return {
      results: [
        {
          img: "assets/book-cover.jpg",
          name: "Teszt könyv",
          author: "Teszt író",
        },
        {
          img: "assets/book-cover.jpg",
          name: "Teszt könyv",
          author: "Teszt író",
        },
        {
          img: "assets/book-cover.jpg",
          name: "Teszt könyv",
          author: "Teszt író",
        },
      ],
    };
  },
  components: {
    NInput: NInput,
    SearchContainer: SearchContainer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
