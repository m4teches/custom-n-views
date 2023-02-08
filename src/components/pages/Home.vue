<template>
    <WelcomePage>
        <Search />
    </WelcomePage>
</template>

<script>
import WelcomePage from './WelcomePage.vue';
import Search from './Search.vue';

export default {
    name: "Home",
    components: {
        WelcomePage,
        Search,
    },
    methods: {
        openSearch(pattern) {
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
