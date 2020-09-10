<template>
  <Dropdown>
    <!-- selected options -->
    <div slot="s-list">
      <span
        class="badge badge-primary ml-2"
        v-for="(value, i) in values"
        :key="i"
        >{{ value }}</span
      >
    </div>
    <!-- dropdown -->
    <div slot="s-body">
      <button
        class="btn btn-info dropdown-toggle"
        type="button"
        id="dLabel"
        data-toggle="dropdown"
        data-flip="false"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Select Categories
      </button>
      <div class="dropdown-menu" aria-labelledby="dLabel" @click="stopClose">
        <router-link id="create-cat" class="dropdown-item" to="cate">
          Create New Category
        </router-link>
        <button
          class="dropdown-item"
          type="button"
          v-for="(option, i) in options"
          :key="i"
        >
          <div class="form-check">
            <label class="form-check-label">
              <input
                type="checkbox"
                class="form-check-input"
                :value="option"
                v-model="values"
              />
              {{ option }}
            </label>
          </div>
        </button>
      </div>
    </div>
  </Dropdown>
</template>

<script>
import Dropdown from "@/components/Dropdown.vue";
export default {
  components: {
    Dropdown,
  },
  data() {
    return {
      focused: false,

      values: [],

      options: ["Current Event", "Sport", "Entertainment", "Travel", "DIY"],
    };
  },
  //   emit selected values to parent
  updated() {
    this.$emit("clicked", this.values);
  },
  methods: {
    stopClose(e) {
      e.stopPropagation();
    },
  },
};
</script>

<style></style>
