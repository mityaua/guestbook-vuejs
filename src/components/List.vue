<template>
  <ul class="list">
    <template v-for="post in posts" v-bind:key="post.id">
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
.list {
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
