<template>
    <NInput
    class="search-input"
    label="Kereső"
    placeholder="Bágyi könyvtári kereső..."
    v-on:search-result="displayResults"
    />
    <SearchContainer 
    class="main-search-container" 
    v-on:book-selected="displaySelected"
    :results="results" />
    <DetailModal ref="detailmodal"/>
</template>

<script>
import NInput from '../NInput.vue';
import SearchContainer from '../SearchContainer.vue';
import DetailModal from '../modal/DetailModal.vue';

export default {
    name: "Search",
    components: {
        NInput,
        SearchContainer,
        DetailModal
    },
    data: function () {
    return {
      pattern:'',
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
    console.log(this.$route.query.s)
    this.pattern = this.$route.query.s;
    this.results = this.featured.sort(() => Math.random() - 0.5).slice(0, 3);
  },
  watch: {
    results: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal)
    }
  },
  methods: {
    displaySelected(book){
      this.$refs.detailmodal.show(book);
    },
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

<style scoped>
.search-input{
  width: 50%;
}
.main-search-container{
  margin-top: 30px;
}
@media only screen and (max-width: 768px) {
  .search-input{
    width: 100%;
  }
}
</style>
