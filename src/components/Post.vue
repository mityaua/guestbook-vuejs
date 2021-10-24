<template>
  <li class="item">
    <div class="item__photo">
      <avatar :fullname="post.name" :size="100" :radius="10"></avatar>
    </div>

    <div>
      <div class="item__info">
        <span class="item__name">{{ post.name }}</span>
        <span>{{ post.date }} {{ post.time }}</span>
      </div>

      <p class="item__comment">{{ post.comment }}</p>
    </div>

    <button @click="deletePost(post.id)" class="item__delete">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 41.756 41.756"
        width="20px"
        height="20px"
        fill="#f73d3d"
      >
        <path
          d="M27.948 20.878L40.291 8.536a5 5 0 10-7.07-7.071L20.878 13.809 8.535 1.465a5 5 0 00-7.07 7.071l12.342 12.342L1.465 33.22a5 5 0 107.07 7.071l12.343-12.342 12.343 12.343c.976.977 2.256 1.464 3.535 1.464s2.56-.487 3.535-1.464a5 5 0 000-7.071L27.948 20.878z"
        ></path>
      </svg>
    </button>
  </li>
</template>

<script>
import Avatar from "vue-avatar-component";

export default {
  name: "Post",
  components: {
    Avatar,
  },
  props: {
    post: {
      type: Object,
      requred: true,
    },
    deletePost: {
      type: Function,
      default: function () {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.item {
  position: relative;
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

  max-width: 80%;
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
    margin-right: 5px;
  }
}

.item__comment {
  padding: 10px 0;
  word-break: break-word;
}

.item__delete {
  position: absolute;
  top: 10px;
  right: 10px;

  padding: 0;
  border: none;

  background-color: transparent;

  opacity: 0.5;
  transition: opacity 250ms linear;

  cursor: pointer;
}

.item__delete:hover {
  opacity: 1;
  transition: opacity 250ms linear;
}
</style>