<template>
  <main class="justify-content-center d-flex flex-column m-auto">
    <div id="title" class="text-center">
      <span id="main-desc" class="fw-bold">Welcome to ::musings!</span>
    </div>
    <div id="description" class="text-center">
      <p>
        This personal project is a content-focused front end for my Wordpress blog that aims to provide a clean and
        intuitive user experience. However, as a work-in-progress, there may be some bugs and missing features. I'm
        working on them, I promise!
      </p>
      <p>
        To get started, select a content piece <span class="d-none d-md-inline">from the sidebar on the right.</span><span
          class="d-md-none">in the mobile sidebar.</span>
      </p>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
});
</script>

<style scoped>
main {
  max-width: 85%;
  height: calc(100vh - 75px);
  width: 800px !important;
  color: var(--vt-c-black-soft);
}

div#title {
  font-size: 1.75rem;
  line-height: 2.2em;
}

@media screen and (min-width: 768px) {
  main {
    height: 100vh !important;
  }
}
</style>