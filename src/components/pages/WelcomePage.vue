<template>
    <main>
        <section class="container">
            <h1 class="color-grd">Üdvözöljük a könyvtári adatbázisban!</h1>
            <slot></slot>
            <mytitle style="text-align:start;">Legújabb könyveink:</mytitle>
            <Splide :options="sliderOptions" aria-label="My Favorite Images">
                <SplideSlide v-for="slide in slides" :key="slide">
                    <div class="slide">
                        <img  :src="slide.src" alt="Sample 1">
                    </div>
                </SplideSlide>
            </Splide>
        </section>
        <div class="divider"></div>
    </main>
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
            sliderOptions:{
                rewind : true,
                perPage : 4,
                gap : '1rem',
                autoplay : true,
                breakpoints: {
                    768: {
                        perPage: 2,
                    },
                }
            },
            display: false,
            slides: [
                {
                    src : './assets/img/slide1.jpg'
                },
                {
                    src : './assets/img/slide2.jpg'
                },
                {
                    src : './assets/img/slide3.jpg'
                },
                {
                    src : './assets/img/slide4.jpg'
                },
            ]
        };
    },
    methods: {
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

.slide{
    text-align: center;
}
.slide img{
    max-width: 100%;
    max-height: 300px;
    width: auto;
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
