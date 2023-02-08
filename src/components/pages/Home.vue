<template>
    <WelcomePage>
        <NInput class="search-input" label="Kereső" placeholder="Bágyi könyvtári kereső..."
            v-on:search="opneSearch" />
    </WelcomePage>
</template>

<script>
import WelcomePage from './WelcomePage.vue';
import NInput from '../NInput.vue';

export default {
    name: "Home",
    components: {
        WelcomePage,
        NInput,
    },
    methods: {
        opneSearch(pattern) {
            // console.log(pattern)
            this.$router.push({ path: 'search', query: { s: pattern } })
        }
    }
};
</script>

<style scoped>
.search-input {
    width: 50%;
}

.main-search-container {
    margin-top: 30px;
}

@media only screen and (max-width: 768px) {
    .search-input {
        width: 100%;
    }
}
</style>
