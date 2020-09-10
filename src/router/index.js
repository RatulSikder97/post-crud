import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    alias: "/posts",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/posts/allPosts.vue"),
  },
  {
    path: "/create",
    alias: "/posts/create",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/posts/createPost.vue"),
    children: [
      {
        path: "/",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/categories/allCategories.vue"
          ),
      },
    ],
  },
  {
    path: ":id/edit",
    alias: "/posts/:id/edit",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/posts/editPost.vue"),
    children: [
      {
        path: "/",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/categories/allCategories.vue"
          ),
      },
    ],
  },
  {
    path: "/:id",
    alias: "/posts/:id",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/posts/post.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
