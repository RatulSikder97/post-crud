<template>
  <div>
    <div class="alert alert-primary" role="alert" v-if="!posts.length">
      <strong>Yout Have no post </strong>
    </div>
    <div class="card" v-for="(post, i) in posts" :id="i" :key="i" v-else>
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">
          {{ post.content.slice(1, 30) + "..." }}
        </p>
        <router-link class="btn btn-success ml-2" :to="'/posts/' + post.id"
          >View Post</router-link
        >
        <router-link
          class="btn btn-warning ml-2"
          :to="'/posts/' + post.id + '/edit'"
          >Edit</router-link
        >
        <router-link
          class="btn btn-danger ml-2"
          :to="'/posts/'"
          @click.native="deletePost(post.id)"
          >Delete</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "allPost",
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.posts = JSON.parse(localStorage.getItem("posts")) || [];
  },
  methods: {
    deletePost(id) {
      this.posts.forEach((post) => {
        if (post.id == id) {
          let i = this.posts.indexOf(post);
          this.posts.splice(i, 1);
          localStorage.setItem("posts", JSON.stringify(this.post));
        }
      });
    },
  },
};
</script>

<style>
.main-content {
  padding-top: 20px;
}
.card {
  width: 90%;
  margin: 10px auto;
}

.card:hover {
  box-shadow: 2px 2px 3px rgb(46, 255, 81), -2px 2px 3px rgb(46, 255, 81),
    2px -2px 3px rgb(46, 255, 81), -2px -2px 3px rgb(46, 255, 81);
}
</style>
