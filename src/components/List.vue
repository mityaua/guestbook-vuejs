<template>
  <ul>
    <template v-for="post in posts" v-bind:key="post.name">
      <ListItem v-bind:post="post" />
    </template>
  </ul>
</template>

<script>
import ListItem from "./ListItem";
export default {
  name: "List",
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
</style>
