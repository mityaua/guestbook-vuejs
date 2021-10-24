<template>
  <li class="item">
    <div class="item__photo">
      <avatar :fullname="post.name" :size="100" :radius="10"></avatar>
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
import Avatar from "vue-avatar-component";

export default {
  name: "ListItem",
  components: {
    Avatar,
  },
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
  background-color: rgba(231, 229, 229, 0.4);
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
}

.item:nth-child(even) {
  background-color: rgba(248, 217, 188, 0.3);
}

.item:nth-child(even):hover,
.item:nth-child(even):focus {
  background-color: rgba(248, 217, 188, 0.6);
}

.item:hover,
.item:focus {
  background-color: rgba(231, 229, 229, 0.8);
}

.item__photo {
  margin-right: 20px;
}

.item__info {
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  border-bottom: 1px solid #d4d1d1;
}

@media screen and (min-width: 768px) {
  .item__info {
    display: block;
  }
}

.item__name {
  margin-bottom: 10px;
  font-weight: bold;
  word-break: break-word;
}

@media screen and (min-width: 768px) {
  .item__name {
    margin-right: 10px;
  }
}

.item__comment {
  padding: 10px 0;
  word-break: break-word;
}
</style>