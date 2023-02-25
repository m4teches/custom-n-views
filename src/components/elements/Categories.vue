<template>
    <div class="popular-container">
        <div class="main"></div>
        <div class="runnerup"></div>
        <div class="popular">

        </div>
    </div>
    <div class="categories-container">
        <div class="category" v-for="category in categories" :key="category">
            <h3>{{category.name}}</h3>
            <p>{{ category.books_count }}</p>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Categories",
    data: function () {
        return {
            categories:[],
            main: null,
            runnerup: null,
            popular: []
        };
    },
    mounted(){
        this.loadCategories();
    },
    methods: {
        loadCategories(){
            axios.get(process.env.VUE_APP_BL_API+"/api/books/categories")
                .then(response => {
                    this.$emit('categories-loaded', response.data);
                    this.categories = response.data;
                    this.main = this.categories.shift();
                    this.runnerup = this.categories.shift();
                    this.popular.push(this.categories.shift());
                    this.popular.push(this.categories.shift());
                })
        }
    }
};
</script>

<style scoped>
.popular-container{
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
}
.categories-container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap : 1rem;
}
.category{
    background: #fff;
    padding: 30px 15px;
    border-radius: 5px;
    cursor: pointer;
}
.category:hover{
    -webkit-box-shadow:0px 0px 10px 4px rgba(45,255,196,0.5);
    -moz-box-shadow: 0px 0px 10px 4px rgba(45,255,196,0.5);
    box-shadow: 0px 0px 10px 4px rgba(45,255,196,0.5);
    transform: translateY(-3px);
    transition: 500ms;
}
.category *{
    color: #323232;
    font-family: 'Source Code Pro', monospace;
}
</style>
