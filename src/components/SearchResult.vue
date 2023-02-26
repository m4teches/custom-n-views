<template>
  <div class="result">
    <img :id="'img' + id" :src="imgLink" :alt="result.title" />
    <div class="description">
      <h2>{{ result.title }}</h2>
      <p>{{ result.author }}</p>
      <button class="underline-btn" @click="this.$emit('book-open', result);">Megnézem</button>
    </div>
    <div v-if="result.badge == 1" class="badge new">Új</div>
    <div v-if="result.badge == 2" class="badge featured">Ajánlott</div>
    <div v-if="result.badge == 3" class="badge antic">Antik</div>
    <div class="shelf">{{result.shelf}}</div>
  </div>
</template>

<script>
// import gsap from "gsap";
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
    if(this.result.cover_link == false){
      this.imgLink = this.result.img;
    }else{
      this.imgLink = process.env.VUE_APP_BL_API+'/api/book/'+this.result.id+'/'+this.result.cover_path;
      // this.imgLink = this.result.cover_link;
    }
  },
  props: {
    result: Object,
  },
  methods: {
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
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.result {
  font-family: "Ubuntu", sans-serif;
  position: relative;
  width: 300px;
  height: 400px;
  color: #371B58;
  margin: 15px;
  overflow: hidden;
  transition: box-shadow .2s,transform .2s;
  border-radius: 0.375rem;
}
.result:hover{
  box-shadow: 0 0.625rem 1.875rem -0.625rem black;
  transform: scale(1.03);
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
.description .underline-btn{
  color: #371b58;
  background: none;
  outline: none;
  border: none;
  font-weight: bold;
  text-decoration: underline;
  font-family: inherit;
  cursor: pointer;
  margin-bottom: 5px;
  font-size: 1rem;
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
  background: #6cc4a1;
  color: #371B58;
  font-size: 18px;
  font-weight: bold;
  left: 0;
  right: 0;
  top: 0;
  padding: 0 30px;
}
@media only screen and (max-width: 768px) {
  .result{
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: auto;
    width: auto;
  }
  .description {
    padding-block: 15px;
    position: relative;
    min-height: unset;
  }
}
</style>
