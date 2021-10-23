<template>
  <li class="item">
    <div class="item__photo">
      <img src="favicon.png" alt="аватар" width="100" height="100" />
    </div>

    <div>
      <div class="item__info">
        <span class="item__name">{{ post.name }}</span>
        <span>{{ post.time }}</span>
      </div>

      <p class="item__comment">{{ post.comment }}</p>
    </div>
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
          id: 1,
          name: "Гость",
          comment: "",
          time: "",
        };
      },
    },
  },
};
</script>

<style scoped>
.item {
  display: flex;
  background-color: #e7e7e7;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
}

.item__photo {
  margin-right: 20px;
}

.item__info {
  padding-bottom: 10px;
  border-bottom: 1px solid #d4d1d1;
}

.item__name {
  margin-right: 10px;
  font-weight: bold;
}

.item__comment {
  padding: 10px 0;
}
</style>