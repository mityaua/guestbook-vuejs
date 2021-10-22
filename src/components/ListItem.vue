<template>
  <li>
    <b>{{ post.name }}</b>
    <span>{{ currentTime }}</span>
    <p>{{ post.comment }}</p>
  </li>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    post: {
      type: Object,
      default: function () {
        return {
          name: "Гость",
          comment: "",
        };
      },
    },
  },
  computed: {
    currentTime() {
      return ` ${new Date().toString().split(" ")[4]}`;
    },
  },
};
</script>

<style scoped></style>