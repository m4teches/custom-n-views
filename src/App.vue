<template>
  <NInput />
</template>

<script>
import NInput from "./components/NInput.vue";
export default {
  name: "App",
  components: {
    NInput: NInput,
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
