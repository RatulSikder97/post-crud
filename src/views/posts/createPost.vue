<template>
  <div id="wrapper" class="container">
    <Modal v-if="showModal">
      <h3 slot="header" class="modal-title">
        Create Post
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
            v-model="newPost.title"
            required
          />
        </div>

        <div class="form-group">
          <label for="content">Content</label>
          <textarea
            class="form-control"
            name="content"
            id="content"
            rows="3"
            v-model="newPost.content"
            required
          ></textarea>
        </div>
        <!-- category part -->
        <dropdown @clicked="getOptions" :values="values"></dropdown>
        <router-view></router-view>
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
          @click="createPost()"
        >
          Create
        </button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal";
import Dropdown from "@/components/Dropdown";

//import Category from "@/components/Category";
export default {
  components: {
    Modal,
    Dropdown,
  },
  data() {
    return {
      values: [],
      showModal: true,
      posts: JSON.parse(localStorage.getItem("posts")) || [],
      newPost: { title: "", content: "", categories: [] },
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    getOptions(v) {
      let opt = v;
      this.newPost.categories = opt;
    },
    closeModal() {
      this.showModal = false;
      this.$router.push({ path: "/" });
    },
    createPost() {
      if (this.newPost.title !== "" && this.newPost.content !== "") {
        this.newPost.id = this.posts.length + 1;
        this.posts.push(this.newPost);

        localStorage.setItem("posts", JSON.stringify(this.posts));

        this.$router.push({ path: "/" });
      }
    },
  },
  computed: {},
};
</script>

<style></style>
