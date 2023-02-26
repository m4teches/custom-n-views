<template>
    <Splide v-if=display :options="sliderOptions" aria-label="My Favorite Images">
        <SplideSlide v-for="slide in slides" :key="slide.id">
            <div class="slide">
                <img @click="this.$emit('book-open', slide)" :src="slide.cover_link" :alt="slide.title">
            </div>
        </SplideSlide>
    </Splide>
</template>

<script>
import axios from "axios";
export default {
    name: "BookSlider",
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
            slides: []
        };
    },
    mounted(){
        this.loadSlides();
    },
    methods: {
        loadSlides(){
            axios.get(process.env.VUE_APP_BL_API+"/api/books/newest?with_cover")
                .then(response => {
                    console.log(response.data)
                    this.$emit('slides-loaded', response.data);
                    this.slides = response.data;
                    this.display = true;
                })
        }
    }
};
</script>

<style scoped>
.slide{
    text-align: center;
}
.slide img{
    max-width: 100%;
    max-height: 300px;
    width: auto;
}
</style>
