<template>
    <div class="categories-container">
        <div class="category" v-for="category in categories" :key="category">
            <h3>{{category}}</h3>
            
        </div>
    </div>
</template>

<script>
export default {
    name: "Categories",
    data: function () {
        return {
            categories:[
                'Regény',
                'Gyerekkönyv',
                'Vallás',
                'Folyóirat',
                'Szakkönyv',
                'Versek',
            ]
        };
    },
};
</script>

<style scoped>
.categories-container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap : 1rem;
}
.category{
    background: #fff;
    padding: 30px 15px;
    border-radius: 5px;
    background-image: url('../../assets/books-green.svg');
    background-repeat: no-repeat;
    background-size: 160px;
    background-position: right;
    background-blend-mode: luminosity;
    cursor: pointer;
}
.category:hover{
    -webkit-box-shadow:0px 0px 10px 4px rgba(45,255,196,0.5);
    -moz-box-shadow: 0px 0px 10px 4px rgba(45,255,196,0.5);
    box-shadow: 0px 0px 10px 4px rgba(45,255,196,0.5);
    transform: translateY(-3px);
    transition: 500ms;
}
.category h3{
    color: #323232;
    font-family: 'Source Code Pro', monospace;
}
</style>
