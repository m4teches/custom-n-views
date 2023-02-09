<template>
    <form @submit.prevent="uploadCoverImage">
        <input type="file" ref="coverInput" @change="onFileChange"/>
        <button type="submit">Upload Cover Image</button>
    </form>
  </template>
  
<script>
import axios from 'axios';

export default {
    name: "UploadCover",
    components: {

    },
    data() {
        return {
            cover: null,
            bookId: null,
        };
    },
    created(){
        console.log(this.$route.params.id);
        this.bookId = this.$route.params.id;
    },
    methods: {
        async uploadCoverImage() {
            const formData = new FormData();
            formData.append('cover', this.$refs.coverInput.files[0]);

            try {
                const response = await axios.post(process.env.VUE_APP_BL_API+`/api/book/${this.bookId}/cover`, formData);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        },
        onFileChange(event) {
            console.log(event)
            this.cover = event.target.files[0];
        },
    }
};
</script>