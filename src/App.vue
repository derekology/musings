<template>
  <header>
    <SiteNav />
  </header>
  <div id="content" class="d-md-flex flex-row">
    <router-view class="w-100" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useHead } from '@unhead/vue'

export default defineComponent({
  name: "App",

  setup() {
    useHead({
      title: "::musings",

      meta: [
        {
          name: `robots`,
          content: `noindex`,
        },
        {
          name: `robots`,
          content: `nofollow`,
        },
      ],
    });
  },
});
</script>

<style scoped>
@media screen and (min-width: 768px) {
  #content {
    margin-left: 230px;
  }
}

@media (max-width: 767px) {
  #content {
    margin-bottom: 75px;
  }
}
</style>
