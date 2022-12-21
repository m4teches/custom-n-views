<template>
    <div>
        <section>
            <div class="bg"></div>
            <h1 class="color-grd">Üdvözöljük a könyvtári adatbázisban!</h1>
            <slot></slot>
        </section>
        <mytitle style="text-align:left;" legend="teszt legend">Teszt cím</mytitle>
    </div>
</template>

<script>
import Title from '../Title.vue';

export default {
    name: "WelcomePage",
    components: {
        'mytitle': Title
    },
    data: function () {
        return {
            display: false,
            book: {}
        };
    },
    methods: {
    }
};
</script>

<style scoped>
section{
    padding: 60px 120px;
    position: relative;
    isolation: isolate;
}
.bg{
    z-index: -1;
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    clip-path: polygon(0 0, 100% 0%, 100% 60%, 0% 100%);
    background: #323232;
}
h1{
    color:#000;
    font-size: clamp(1rem, 8vw, 5rem); 
    /* text-align: start; */
    font-family: 'Source Code Pro', monospace;
    margin: 30px 0;
}
.color-grd {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: -webkit-gradient(linear, left top, right top, from(#501e9c), color-stop(30%, #8169f1), color-stop(30%, #8169f1), color-stop(73%, #a44cee), to(#ff847f));
    background-image: -webkit-linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);
    background-image: -o-linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);
    background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);
}
@media (max-width: 768px) {
    section{
        padding: 30px;
    }
}
</style>
