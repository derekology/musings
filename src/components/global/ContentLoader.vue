<template>
  <div id="loader-text">
    <div class=" text-center fst-italic" v-show="!displayErrorMsg">{{ msg }}</div>
    <div class="text-center fst-italic" v-show="displayErrorMsg">{{ errorMsg }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContentLoader",

  props: {
    msg: String,
    errorMsg: String,
  },

  data() {
    return {
      displayErrorMsg: false,
    };
  },

  methods: {
    showErrorMsgAfter10Secs: function () {
      /**
       * Show error message in loader after 10 seconds.
       */
      setTimeout(() => {
        this.displayErrorMsg = true;
      }, 10000);
    },
  },

  created: function () {
    this.showErrorMsgAfter10Secs();
  },

});
</script>

<style scoped></style>
