<template>
  <li class="item">
    <div class="item__photo">
      <avatar
        :fullname="post.name"
        :size="checkMobile"
        :radius="10"
        :title="avatarTitle"
      ></avatar>
    </div>

    <div>
      <div class="item__info">
        <span class="item__name">{{ post.name }}</span>
        <span
          ><time :datetime="dateTime">{{ dateTime }}</time></span
        >
      </div>

      <p class="item__comment">{{ post.comment }}</p>
    </div>

    <button
      @click="deleteItem(post.id)"
      class="item__delete"
      :aria-label="title"
      :title="title"
    >
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
import { mapMutations, mapActions } from "vuex";
import { createToast } from "mosha-vue-toastify";

import Avatar from "vue-avatar-component";

export default {
  name: "Post",
  components: {
    Avatar,
  },
  data() {
    return {
      title: "Удалить запись",
    };
  },
  props: {
    post: {
      type: Object,
      requred: true,
    },
  },
  computed: {
    avatarTitle() {
      return `Аватар ${this.post.name}`;
    },
    dateTime() {
      return `${this.post.date} ${this.post.time}`;
    },
    checkMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return 50;
      } else {
        return 100;
      }
    },
  },
  methods: {
    ...mapMutations(["deletePost"]),
    ...mapActions(["setPosts"]),
    deleteItem(id) {
      this.deletePost(id);
      this.setPosts();

      createToast("Запись была удалена", {
        showIcon: true,
        timeout: 2000,
        position: "top-center",
        type: "warning",
        transition: "zoom",
      });
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

  transition: background-color 250ms linear;
}

.item:hover,
.item:focus {
  background-color: rgba(231, 229, 229, 0.8);
  transition: background-color 250ms linear;
}

.item:nth-child(even) {
  background-color: rgba(248, 217, 188, 0.3);
}

.item:nth-child(even):hover,
.item:nth-child(even):focus {
  background-color: rgba(248, 217, 188, 0.6);
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