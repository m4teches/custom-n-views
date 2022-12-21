<template>
    <div>
        <legend>{{legend}}</legend>
        <h3><slot></slot></h3>
    </div>
</template>
<script>
export default {
    name: "Title",
    components: {
    },
    props:{
        legend:String
    }
};
</script>
<style scoped>
    h3{
        color:#000;
        font-size: clamp(0.8rem, 8vw, 3rem);
        font-family: 'Source Code Pro', monospace;
        margin: 30px 0;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: -webkit-linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);
        background-image: -o-linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);
        background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);
    }
</style>