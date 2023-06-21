<template>
    <div>
        <h1>hello</h1>
        <PostPreview v-bind:recipePreview="recipePost"/>
    </div>
</template>
<script>
import axios from 'axios';
import PostPreview from '../components/PostPreview.vue';

export default {
    name: 'Board',
    components: PostPreview,
    created() {
        axios
            .get("https://3a013dbf-8781-4e7d-b750-8003b8519f89.mock.pstmn.io/api/recipes")
            .then(res => {
                this.recipePost = res.data
                console.log(res)
            })
            .catch(err => console.log(err))
    },
    data() {
        return {
            recipePost: []
        }
    },
};
</script>

<style scoped>

</style>