<template>
  <div class="container bg-light rounded mt-4">
    <h1 class="text-primary pt-2">{{ idPost.title }}</h1>
    <p class="p-2 ">{{ idPost.content }}</p>
    <div>
      <span class="text-info h6 p-1 ml-2 rounded">Categories:</span>
      <span
        class="badge badge-pill badge-primary mb-3 ml-2 bg-info"
        v-for="(cat, i) in idPost.categories"
        :key="i"
        >{{ cat }}</span
      >
    </div>
    <router-link
      type="button"
      class="btn btn-warning mb-2"
      :to="'/posts/' + idPost.id + '/edit'"
      >Edit</router-link
    >
    <button
      type="button"
      class="btn btn-danger ml-2 mb-2"
      @click="deletePost(idPost.id)"
    >
      Delete
    </button>
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
  mounted() {
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

    deletePost(id) {
      this.posts.forEach((post) => {
        if (post.id == id) {
          let i = this.posts.indexOf(post);
          console.log(i);
          this.posts.splice(i, 1);
          localStorage.setItem("posts", JSON.stringify(this.posts));
          this.$router.push("/");
        }
      });
    },
  },
};
</script>

<style></style>
