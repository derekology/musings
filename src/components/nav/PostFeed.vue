<template>
  <div id="post-feed" class="overflow-scroll h-100">
    <ContentLoader class="mt-2 p-2" v-if="Object.keys(postList).length === 0" msg="Loading posts..."
      errorMsg="Error loading posts" />
    <div v-else>
      <ul class="nav nav-pills flex-column mb-auto">
        <li v-for="postId in postIdList" :key="postId" class="nav-item pt-2">
          <router-link :to="{
            path: '/' + postList[postId].slug,
          }" class="nav-link text-white text-start" aria-current="page">
            <div class="post-title">{{ postList[postId].title }}</div>
            <div class="post-subtitle fst-italic">
              {{ postList[postId].subtitle }}
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContentLoader from "@/components/global/ContentLoader.vue";
import wpconfig from '@/wpconfig';

export default defineComponent({
  name: "PostFeed",

  components: {
    ContentLoader,
  },

  data() {
    return {
      postList: {} as Record<string, any>,
      postIdList: [] as string[],
    };
  },

  created: function () {
    this.getPosts();
  },

  methods: {
    getPosts: function () {
      /**
       * Get all posts from WordPress API.
       */
      const getPostsURL: string =
        `${wpconfig.wordpressEndpoint}/posts?per_page=100&orderby=date&order=desc&status=publish&_fields[]=id&_fields[]=slug&_fields[]=title&_fields[]=acf&_fields[]=date&_fields[]=categories`;

      const fetchPosts = fetch(getPostsURL)
        .then((response) => response.json())
        .then((data) => {
          return data;
        });

      const processPosts = async (): Promise<void> => {
        /**
         * Process posts and add its data to postList.
         */
        const res = await fetchPosts;

        for (let i = 0; i < res.length; i++) {
          const postId = res[i]["id"] as string;
          this.postIdList.push(postId);

          this.postList[postId] = {};
          this.postList[postId]["id"] = postId as string;
          this.postList[postId]["slug"] = res[i]["slug"] as string;
          this.postList[postId]["title"] = res[i]["title"]["rendered"] as string;
          this.postList[postId]["subtitle"] = res[i]["acf"]["subtitle"] as string;
          this.postList[postId]["published"] = res[i]["date"] as string;
          this.postList[postId]["categories"] = res[i]["categories"] as string;
        }
      };

      processPosts();
    },
  },
});
</script>

<style scoped>
#post-feed.list-group-item {
  background-color: none;
}

a.router-link-exact-active {
  background-color: #ffffff17;
}

a:hover {
  background-color: #ffffff08;
}

.post-subtitle {
  font-size: 75%;
  color: var(--vt-c-text-dark-2);
}

@media screen and (min-width: 768px) {
  a.router-link-active {
    background-color: #ffffff !important;
    margin-right: -21px !important;
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-right: 21px;
  }

  a.router-link-active .post-title,
  a.router-link-active .post-subtitle {
    color: #222222 !important;
  }

  a.router-link-active .post-title {
    font-size: 125%;
    font-weight: 700;
  }
}

#post-feed a {
  text-decoration: none !important;
}

#post-feed a:hover {
  text-decoration: none !important;
}
</style>
