<template>
  <ul class="list">
    <template v-for="post in allPosts" :key="post.id">
      <Post :post="post" />
    </template>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";

import Post from "./Post";

export default {
  name: "Posts",
  components: {
    Post,
  },
  computed: {
    ...mapGetters(["allPosts"]),
  },
};
</script>

<style scoped>
.list {
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
