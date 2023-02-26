<template>
    <main>
        <section class="container">
            <h1 class="color-grd">Üdvözöljük a könyvtári adatbázisban!</h1>
            <slot></slot>
            <mytitle style="text-align:start;">Legújabb könyveink:</mytitle>
            <book-slider v-on:book-open="displaySelected"></book-slider>
            <!-- <mytitle style="text-align:start;">Böngésszen:</mytitle> -->
            <!-- <categories></categories> -->
        </section>
        <DetailModal ref="detailmodal"/>
        <!-- <div class="divider"></div> -->
    </main>
</template>

<script>
import Title from '../Title.vue';
// import Categories from '../elements/Categories.vue';
import BookSlider from '../elements/BookSlider.vue';
import DetailModal from '../modal/DetailModal.vue';

export default {
    name: "WelcomePage",
    components: {
    "mytitle": Title,
    BookSlider,
    DetailModal
},
    data: function () {
        return {
        };
    },
    methods: {
        displaySelected(book){
            this.$refs.detailmodal.show(book);
        },
    }
};
</script>

<style scoped>
main{
    position: relative;
    isolation: isolate;
    background: #323232;
    padding: 1rem;
}
.container{
    text-align: start;
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
    font-size: clamp(1rem, 8vw, 3rem); 
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
.divider{
    margin-block: 30px 10px;
    height: 80px;
    background: url('../../assets/books-green.svg');
}
@media (max-width: 768px) {
    main{
        padding: 1rem;
    }
    .slide img{
        max-height: 200px;
    }
}
</style>
