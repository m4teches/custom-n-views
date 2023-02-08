<template>
  <div class="ninput">
    <div class="label-div">
      <label :for="id">{{ label }}</label>
    </div>
    <input
      v-bind="$attrs"
      v-model="val"
      :id="id"
      @input="textSearch($event)"
      v-on:keyup.enter="onEnter"
      type="text"
      :placeholder="this.placeholder ? this.placeholder : 'Type here...'"
    />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "NInput",
  props: {
    placeholder: String,
    label: String,
  },
  data: function () {
    return {
      timer: undefined,
      id: null,
      val: ''
    };
  },
  mounted() {
    this.id = this.uuidv4();
  },
  methods: {
    textSearch() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.search(this.val);
      }, 1000);
    },
    onEnter() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.search(this.val);
      }, 500);
    },
    search(pattern){
      this.$emit('search', pattern);
      console.log(this.val);
      axios.get(process.env.VUE_APP_BL_API+"/api/search/" + pattern)
        .then(response => {
          this.$emit('search-result', this.val == '' ? [] : response.data);
          // this.val = '';
        })
    },
    uuidv4() {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
        (
          c ^
          (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16)
      );
    },
  },
};
</script>

<style scoped>
.ninput {
  display: inline-block;
  position: relative;
  margin-top: 30px;
}
input {
  display: block;
  border: none;
  border-bottom: 3px solid #371B58;
  outline: none;
  padding: 10px 15px;
  background: #F6E3C5;
  color: #371B58;
  border-radius: 5px 5px 0 0;
  font-family: "Ubuntu", sans-serif;
  padding-top: 10px;
  width: 100% !important;
  font-weight:bold;
  box-sizing: border-box;
  font-size: 1rem;
}
input::placeholder {
  color: #371B58;
  opacity: 0.7;
}
.label-div {
  display: flex;
  position: absolute;
  top: -20px;
  left: 15px;
  right: 0;
}
label {
  border-radius: 5px;
  text-align: left;
  color: white;
  font-family: "Ubuntu", sans-serif;
  padding: 5px 15px 5px 15px;
  font-size: 12px;
  background: #371B58;
}
input:focus {
  border-color: white;
  -webkit-transition: border-color 250ms ease-out;
  -moz-transition: border-color 250ms ease-out;
  -o-transition: border-color 250ms ease-out;
  transition: border-color 250ms ease-out;
}
</style>
