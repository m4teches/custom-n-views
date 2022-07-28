<template>
  <div>
    <span 
      v-for="badge in badges"
      :key="badge">
      <!-- <a href="#tags=badge"> -->
        {{badge}}
      <!-- </a> -->
    </span>
  </div>
</template>

<script>
export default {
  name: "Badges",
  components: {
    // SearchResult: SearchResult,
  },
  props: {
    list: String,
  },
  computed: {
    badges() {
      if(this.list){
        return this.list.toUpperCase().split(',');
      }
      return [];
    }
  },
  methods: {
    
  }
};
</script>

<style scoped>
span{
  background-color: white;
  margin: 5px;
  padding: 5px 15px;
  border-radius: 15px;
  font-size: 13px;
  font-weight: bold;
  font-family: 'Source Code Pro', monospace;
}
</style>