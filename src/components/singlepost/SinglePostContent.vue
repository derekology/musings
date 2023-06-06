<template>
  <div id="post-content" class="m-auto mt-3 p-5">
    <div v-html="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SinglePostContent",

  props: {
    content: String,
  },
});
</script>

<style scoped>
#post-content {
  max-width: 740px;
  font-size: 18px;
  line-height: 1.8em;
}
</style>
