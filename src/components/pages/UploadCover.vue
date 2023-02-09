<template>
    <form class="upload-cover-form" @submit.prevent="uploadCoverImage">
        <input type="file" ref="coverInput" @change="onFileChange"/>
        <button type="submit">Upload Cover Image</button>
        <p>{{message}}</p>
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
            message:''
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
                this.message = response.data
            } catch (error) {
                this.message = error.request.response
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
<style>
.upload-cover-form{
    margin: 30px;
    margin-inline: auto;
    max-width: 500px;
    padding: 60px 30px;
    background: #fff;
}
</style>