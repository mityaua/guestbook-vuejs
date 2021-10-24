<template>
  <ul class="list">
    <template v-for="post in posts" v-bind:key="post.id">
      <ListItem :post="post" />
    </template>
  </ul>
</template>

<script>
import ListItem from "./Post";
export default {
  name: "Posts",
  components: {
    ListItem,
  },
  props: {
    posts: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.list {
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
