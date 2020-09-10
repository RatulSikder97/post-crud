<template>
  <div>
    <div class="selected-cat-list border rounded mb-2 pt-3 pb-3">
      Categories:
      <slot name="s-list"></slot>
    </div>
    <div class="dropdown">
      <slot name="s-body"></slot>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.category-box {
  width: 100%;
  outline: 0;
}
.category {
  padding: 3px 0px;
  height: fit-content;
  outline: 0;
  position: relative;
}
.multi-options {
  width: 100%;
  outline: 0;
  position: absolute;
  top: 40px;
}
button {
  outline: 0;
}
#create-cat {
  background: #aaa;
}
</style>
