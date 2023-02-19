<template>
    <div>
        <button v-on:click="createLoan">Kölcsönzés</button>
        <button v-on:click="openEditor">Borító feltöltése</button>
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
        },
        openEditor(){
            this.$router.push({ path: `/cover/${this.book.id}` })
        },
        async createLoan() {
            console.log(this.book);
            try {
                const response = await axios.post(process.env.VUE_APP_BL_API+'/api/loans/'+this.book.id, {
                book_id: this.book.id,
                member_id: 1,
                return_by: '2023-12-12',
                });
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>

<style scoped>

</style>
