<template>
  <div class="nav nav-pills flex-row mb-auto">
    <div class="nav-item col px-0 text-center bg-dark">
      <a href="https://derekw.co/" target="_blank" class="nav-link text-white text-center ">
        About / Contact <material-icon class="material-icon" name="open_in_new" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HorizontalMenu",
});
</script>

<style scoped>
.material-icon {
  font-size: 12px;
  height: 12px;
  width: 12px;
}

a.router-link-exact-active {
  background-color: #ffffff17;
}

a:hover {
  background-color: #ffffff08;
  text-decoration: none !important;
}
</style>
