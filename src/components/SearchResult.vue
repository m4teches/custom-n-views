<template>
  <div 
    @mouseenter="hover"
    @mouseleave="hoverend"
    class="result">
    <img :id="'img' + id" :src="result.img" :alt="result.title" />
    <div class="description">
      <h2>{{ result.title }}</h2>
      <p>{{ result.author }}</p>
    </div>
    <div v-if="result.badge == 1" class="badge new">Új</div>
    <div v-if="result.badge == 2" class="badge featured">Ajánlott</div>
    <div v-if="result.badge == 3" class="badge antic">Antik</div>
    <div class="shelf">{{result.shelf}}</div>
  </div>
</template>

<script>
import gsap from "gsap";
let uuid = 0;
export default {
  name: "SearchResult",
  data: function () {
    return {
      imgLink : null,
      id : null,
    };
  },
  mounted() {
    this.id = uuid.toString();
    uuid += 1;
  },
  props: {
    result: Object,
  },
  methods: {
    hover() {
        gsap.to('#img' + this.id,{
            scale: 1.1
        });
    },
    hoverend() {
        gsap.to('#img' + this.id,{
            scale: 1
        });
    },
    uuidv4() {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
        (
          c ^
          (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(4)
      );
    },
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
  margin: 15px;
  overflow: hidden;
}
.description {
  position: absolute;
  background: #F6E3C5;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 100px;
}
.description h2{
  font-size: 18px;
  padding: 0 15px;
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
.shelf{
  position: absolute;
  background: #371B58;
  color:white;
  font-size: 18px;
  font-weight: bold;
  color: white;
  right: 0;
  bottom: 0;
  left: 66%;
}
</style>
