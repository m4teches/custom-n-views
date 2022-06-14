<template>
  <div class="result">
    <img :src="result.img" :alt="result.name" />
    <div class="description">
      <h2>{{ result.name }}</h2>
      <p>{{ result.author }}</p>
    </div>
    <div v-if="result.badge == 1" class="badge new">Új</div>
    <div v-if="result.badge == 2" class="badge featured">Ajánlott</div>
    <div v-if="result.badge == 3" class="badge antic">Antik</div>
  </div>
</template>

<script>
export default {
  name: "SearchResult",
  data: function () {
    return {
      imgLink: null,
    };
  },
  props: {
    result: Object,
  },
};
</script>

<style>
img {
  max-width: 100%;
  max-height: 100%;
}
.result {
  font-family: "Ubuntu", sans-serif;
  position: relative;
  width: 300px;
  height: 400px;
  color: #371B58;
}
.description {
  position: absolute;
  background: #F6E3C5;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100px;
}
.badge {
  position: absolute;
  background: #371B58;
  font-size: 12px;
  color: white;
  top: 5px;
  right: 5px;
  height: 60px;
  width: 60px;
  line-height: 60px;
  border-radius: 50%;
  /* box-shadow: 2px 2px 30px 10px #f6e3c5; */
}
.new {
  background: #3EC70B;
}
.featured {
  background: #F7EC09;
}
.antic {
  background: #371B58;
}
</style>
