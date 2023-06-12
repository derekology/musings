<template>
  <div>
    <main>
      <div id="top">
        <div v-if="pageSlug == postSlug">
          <SinglePostHeader :title="postTitle" :subtitle="postSubtitle" :imageUrl="postImage" />
        </div>
      </div>
      <div id="loader" class="d-flex justify-content-center vh-100 align-items-center flex-column"
        v-if="pageSlug != postSlug">
        <StackedLogo />
        <ContentLoader class="mt-4 p-2" msg="Loading content..." errorMsg="Error loading content" />
      </div>
      <SinglePostContent v-if="pageSlug == postSlug" :content="postContent" />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useHead } from '@unhead/vue'
import SinglePostHeader from "@/components/singlepost/SinglePostHeader.vue";
import SinglePostContent from "@/components/singlepost/SinglePostContent.vue";
import ContentLoader from "@/components/global/ContentLoader.vue";
import StackedLogo from "@/components/global/LogoHorizontalDark.vue";
import wpconfig from '@/wpconfig';

export default defineComponent({
  name: "PostView",

  components: {
    SinglePostHeader,
    SinglePostContent,
    ContentLoader,
    StackedLogo,
  },

  data() {
    return {
      pageSlug: "" as string,
      postSlug: "" as string,
      postTitle: "" as string,
      postSubtitle: "" as string,
      postContent: "" as string,
      postImage: "" as string,
      postPublished: "" as string,
      postCategories: [] as number[],
      yoastData: {} as Record<string, any>,
    };
  },

  updated() {
    useHead({
      title: `${this.postTitle} // ::musings`,
    });
  },

  created: function () {
    scroll(0, 0);
    this.getPost();
  },

  beforeUpdate: function () {
    scroll(0, 0);
    this.getPost();
  },

  methods: {
    getPageSlug: function (): void {
      this.pageSlug = window.location.pathname.replace("/", "");
    },

    getPost: function (): void | Promise<void> {
      this.getPageSlug();

      const getPostURL = `${wpconfig.wordpressEndpoint}/posts?per_page=1&slug=${this.pageSlug}&status=publish&_fields[]=yoast_head_json&_fields[]=title&_fields[]=acf&_fields[]=content&_fields[]=date&_fields[]=categories&_fields[]=slug`;

      const fetchPost = fetch(getPostURL)
        .then((response): Promise<any> => response.json())
        .then((data): Record<string, any> => {
          return data;
        });

      const parsePost = async () => {
        /**
         * Parse post data from WordPress API.
         */
        const res = await fetchPost;

        this.yoastData = JSON.parse(JSON.stringify(res[0]["yoast_head_json"])) as Record<string, any>;
        this.postSlug = res[0]["slug"] as string;

        this.postTitle = res[0]["title"]["rendered"] as string;
        this.postSubtitle = res[0]["acf"]["subtitle"] as string;
        this.postContent = res[0]["content"]["rendered"] as string;
        this.postImage = this.yoastData["og_image"][0]["url"] as string;
        this.postPublished = res[0]["date"] as string;
        this.postCategories = res[0]["categories"] as number[];
      };

      parsePost();
    },
  },
});
</script>

<style scoped>
#loader svg {
  width: 175px;
}

#load svg .primary {
  fill: var(--color-background-soft)
}
</style>
