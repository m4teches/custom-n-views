<template>
  <header class="polc-header">
    <div class="polc-logo">
      <router-link to="/"><img src="./assets/polc-logo.svg" alt="polc Logo"></router-link>
    </div>
    <div class="links">
      <router-link class="polc-link" to="/search">Keresés</router-link>
      <!-- <router-link class="polc-link" to="/help">?</router-link> -->
    </div>
  </header>
  <router-view>
  </router-view>
</template>

<script>

export default {
  name: "App",
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
}
body {
  background: #323232;
  margin: 0;
}
.polc-header{
  background: #fff;
  padding-block: 5px;
  padding-inline: 30px;
  position: sticky;
  top: 0;
  z-index: 10;
  display: grid;
  grid-template-columns: 150px auto;
}
.polc-logo{
  display: flex;
}
.links{
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.links .polc-link{
  text-decoration: none;
  text-transform: uppercase;
  color: #323232;
  font-weight: bold;
  padding-inline: 15px;
  font-family: 'Source Code Pro', monospace;
}
</style>
