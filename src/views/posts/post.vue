<template>
  <div class="container bg-light rounded">
    <h1 class="text-primary pt-2">{{ idPost.title }}</h1>
    <p class="p-2 ">{{ idPost.content }}</p>
    <button type="button" class="btn btn-warning mb-2">Edit</button>
    <button type="button" class="btn btn-danger ml-2 mb-2">Delete</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      idPost: {},
      posts: JSON.parse(localStorage.getItem("posts")) || [],
    };
  },
  created() {
    this.loadPost(this.$route.params.id);
  },

  methods: {
    loadPost(id) {
      this.posts.forEach((post) => {
        if (post.id == id) {
          this.idPost = post;
        }
      });
    },
  },
};
</script>

<style></style>
