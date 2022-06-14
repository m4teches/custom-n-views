<template>
  <NInput
    style="width: 50%"
    label="Kereső"
    placeholder="Bágyi könyvtári kereső..."
    v-on:search-result="displayResults"
  />
  <SearchContainer :results="results" />
</template>

<script>
import NInput from "./components/NInput.vue";
import SearchContainer from "./components/SearchContainer.vue";
export default {
  name: "App",
  data: function () {
    return {
      results: [],
      featured: [
        {
          img: "assets/semmi.jpg",
          title: "Semmi",
          author: "Janne Teller",
          badge: 1,
          shelf: 'ifiterem',
        },
        {
          img: "assets/katedralis.jpg",
          title: "A katedrális",
          author: "Ken Follett",
          badge: 1,
          shelf: 'ifiterem',
        },
        {
          img: "assets/azigazi.jpg",
          title: "Az igazi",
          author: "Márai Sándor",
          badge: 1,
          shelf: 'N/A',
        },
        {
          img: "assets/susu.jpg",
          title: "Süsü a sárkány",
          author: "Csukás István",
          badge: 1,
          shelf: 'N/A',
        },
      ],
    };
  },
  mounted() {
    this.results = this.featured.sort(() => Math.random() - 0.5).slice(0, 3);
  },
  watch: {
    results: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal)
    }
  },
  components: {
    NInput: NInput,
    SearchContainer: SearchContainer,
  },
  methods: {
    displayResults(results) {
      if(results.length){
        this.results = results;
      }else{
        this.results = this.featured.sort(() => Math.random() - 0.5).slice(0, 3);
      }
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background: #6CC4A1;
}
</style>
