<template>
  <div id="wrapper" class="container">
    <Modal v-if="showModal">
      <h3 slot="header" class="modal-title">
        Create Category
      </h3>

      <div slot="body">
        <div class="form-group">
          <label for="title">Category</label>
          <input
            type="text"
            name="title"
            id="title"
            class="form-control"
            placeholder=""
            aria-describedby="helpId"
            v-model="created"
            required
          />
        </div>

        <!-- category part -->
      </div>
      <div slot="footer">
        <button
          type="button"
          class="btn btn-outline-info"
          @click="closeModal()"
        >
          Close
        </button>

        <button class="btn btn-primary ml-2" @click="createCategory()">
          Create
        </button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal";

//import Category from "@/components/Category";
export default {
  name: "create-category",
  components: {
    Modal,
  },
  data() {
    return {
      values: [],
      created: "",
      showModal: true,
      posts: JSON.parse(localStorage.getItem("posts")),
      options: JSON.parse(localStorage.getItem("options")),
    };
  },

  methods: {
    openModal() {
      this.showModal = true;
    },

    closeModal() {
      this.showModal = false;
      this.$router.go(-1);
    },
    createCategory() {
      console.log("ok");
      this.posts.forEach((post, index) => {
        console.log(post);
        if (post.id == this.$route.params.id) {
          let inC = post.categories.indexOf(this.created);
          let inO = this.options.indexOf(this.created);
          if (inC == -1 && inO == -1 && this.created != "") {
            this.posts[index].categories.unshift(this.created);
            this.options.unshift(this.created);
            localStorage.setItem("posts", JSON.stringify(this.posts));
            localStorage.setItem("options", JSON.stringify(this.options));
          }
          let path = "/posts/" + this.$route.params.id + "/edit";
          this.$router.push(path);
        }
      });
    },
  },
  computed: {},
};
</script>

<style></style>
