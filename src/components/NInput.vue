<template>
  <div class="ninput">
    <div class="label-div">
      <label :for="id">{{ label }}</label>
    </div>
    <input
      :id="id"
      @keyup="textSearch($event)"
      v-on:keyup.enter="onEnter"
      v-bind="$attrs"
      type="text"
      :placeholder="this.placeholder ? this.placeholder : 'Type here...'"
    />
  </div>
</template>

<script>
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
    };
  },
  mounted() {
    this.id = this.uuidv4();
    console.log(this);
  },
  methods: {
    textSearch(e) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        console.log("searching...");
      }, 1500);
    },
    onEnter(e) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        console.log("searching after enter...");
      }, 1500);
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");
.ninput {
  margin: 15px;
  display: inline-block;
  position: relative;
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
</style>
