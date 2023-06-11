<template>
  <div>
    <main id="post-header" :style="{
      'background-image': `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)),
                                                                                                                                                                                                                            url('${imageUrl}')`,
    }">
      <div id="top" class="d-flex justify-content-center m-auto p-5 text-center h-100 align-items-end">
        <div>
          <div id="meta" class="px-4">
            <h1>
              <span id="title" class="text-white text-uppercase">{{ title }}</span>
            </h1>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SinglePostHeader",

  components: {
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
#post-header {
  background: rgb(0, 0, 0);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

#meta {
  background-color: #000000b6;
}

#top #title {
  font-size: 6vw;
  letter-spacing: 9px;
  line-height: 2em;
  backdrop-filter: blur(4px);
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  #top #title {
    font-size: 3vw;
    letter-spacing: 10px;
  }

  #top #post-header {
    height: 100vh;
  }
}

@media (max-width: 767px) {
  #top #post-header {
    height: calc(100vh - 75px);
  }
}
</style>
