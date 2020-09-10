<template>
  <div id="wrapper" class="container" :v-if="reload">
    <Modal v-if="showModal">
      <h3 slot="header" class="modal-title">
        Edit Post
      </h3>

      <div slot="body">
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            class="form-control"
            placeholder=""
            aria-describedby="helpId"
            v-model="idPost.title"
          />
        </div>

        <div class="form-group">
          <label for="content">Content</label>
          <textarea
            class="form-control"
            name="content"
            id="content"
            v-model.lazy="idPost.content"
            rows="3"
          ></textarea>
        </div>
        <!-- show nested -->
        <router-view></router-view>
        <Dropdown
          :values="idPost.categories"
          @clicked="onClickChild"
        ></Dropdown>
      </div>
      <div slot="footer">
        <button
          type="button"
          class="btn btn-outline-info"
          @click="closeModal()"
        >
          Close
        </button>

        <button
          type="button"
          class="btn btn-primary ml-2"
          data-dismiss="modal"
          @click="updatePost(idPost.id)"
        >
          Update
        </button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal";
import Dropdown from "@/components/Dropdown";
export default {
  components: {
    Modal,
    Dropdown,
  },
  data() {
    return {
      renderComponent: true,
      showModal: true,
      idPost: {},
      updated: [],
      cates: [],
      posts: JSON.parse(localStorage.getItem("posts")) || [],
    };
  },
  created() {
    this.loadPost(this.$route.params.id);
  },
  watch: {
    $route: "forceRerender",
  },
  methods: {
    forceRerender() {
      location.reload();
    },

    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      let path = "/posts/" + this.$route.params.id;
      this.$router.push(path);
    },
    onClickChild(value) {
      let cat = JSON.parse(JSON.stringify(value));

      this.updated = cat;
    },

    updatePost(id) {
      console.log(this.posts);
      this.posts.forEach((post) => {
        if (post.id == id) {
          if (this.updated.length) {
            this.idPost.categories = this.updated;
          }

          post = { ...this.idPost };

          localStorage.setItem("posts", JSON.stringify(this.posts));
        }
      });
      let path = "/posts/" + this.$route.params.id;
      this.$router.push({ path: path });
    },
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
