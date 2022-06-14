<template>
  <div>
    <input
      @keyup="textSearch($event)"
      v-bind="$attrs"
      type="text"
      placeholder="Write your data..."
    />
  </div>
</template>

<script>
export default {
  name: "NInput",
  data: function () {
    return {
      timer: undefined,
    };
  },
  methods: {
    textSearch(e) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        console.log("searching...");
      }, 1500);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  border: none;
  border-bottom: 1px solid grey;
  outline: none;
  width: 100%;
}
input::plcaholder {
  color: green;
}
</style>
