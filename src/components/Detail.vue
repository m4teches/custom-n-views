<template>
  <span>
    <h1>{{book.title}}</h1>
    <p>({{book.author}})</p>
    <p>{{book.release_year}}</p>
    <badges :list="book.category" />
    <p>{{book.shelf}}</p>
    <button class="loan-button" @click="createLoan">Create Loan</button>
  </span>
</template>

<script>
import Badges from "./Badges.vue"
import axios from "axios";

export default {
  name: "Detail",
  components: {
    Badges,
  },
  props: {
    book: Object,
  },
  methods:{
    async createLoan() {
      console.log(this.book);
      try {
        const response = await axios.post(process.env.VUE_APP_BL_API+'/api/loans/'+this.book.id, {
          book_id: this.book.id,
          member_id: 1,
          return_by: '2023-12-12',
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
span{
  display:inline-block;
  font-family: 'Source Code Pro', monospace;
}
h1{

}
p{

}
.loan-button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
}

.loan-button:hover {
  background-color: #45a049;
}
</style>