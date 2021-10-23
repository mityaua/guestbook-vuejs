<template>
  <li class="item">
    <div class="userinfo">
      <b>{{ post.name }}</b>
      <span>{{ commentTime }}</span>
    </div>

    <p class="comment">{{ post.comment }}</p>
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
    commentTime() {
      return `${new Date()
        .toISOString()
        .split("T")[0]
        .split("-")
        .reverse()
        .join(".")} (${new Date().toString().split(" ")[4]})`;
    },
  },
};
</script>

<style scoped>
.item {
  background-color: #e7e7e7;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
}

.userinfo {
  padding-bottom: 10px;
  border-bottom: 1px solid #d4d1d1;
  /* box-shadow: 0px 2px 3px 4px tomato; */
}

.comment {
  padding: 10px 0;
}
</style>