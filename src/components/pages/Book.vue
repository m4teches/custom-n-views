<template>
    <div>
        
    </div>
</template>

<script>

import axios from "axios";
export default {
    name: "Book",
    components: {

    },
    data : function() {
        return {
            bookId  : false,
            book    : Object,
            loaded  : false
        }
    },
    created() {
        console.log(this.$route.params.id);
        this.bookId = this.$route.params.id;
        this.getBook(this.bookId);
    },
    methods: {
        getBook(bookId) {
            axios.get(process.env.VUE_APP_BL_API + "/api/book/" + bookId)
                .then(response => {
                    console.log(response.data)
                    this.book = JSON.parse(response.data)
                    this.loaded = true
                })
                .catch(function (error) {
                    console.log(error.toJSON());
                });
        }
    }
};
</script>

<style scoped>

</style>
