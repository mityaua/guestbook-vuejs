<template>
  <h1 class="title center">Гостевая книга</h1>
  <p class="center">{{ total }}</p>

  <List v-bind:posts="posts" />

  <form @submit.prevent="onSubmit" class="center">
    <label>
      Ваше имя:
      <input
        type="text"
        v-model.lazy.trim="name"
        required
        maxlength="40"
        spellcheck="false"
        placeholder="До 40 символов"
      />
    </label>

    <br /><br />

    <textarea
      cols="50"
      rows="4"
      placeholder="Введите текст сообщения..."
      v-model.trim="comment"
      required
      v-bind:maxlength="max"
    ></textarea>

    <div class="preview">
      <p>Предпросмотр:</p>
      <p v-if="name">
        Имя: <b>{{ name }}</b>
      </p>
      <p v-if="comment" class="preview__comment">Сообщение: {{ comment }}</p>
      <p v-if="comment" class="preview__comment">
        Осталось символов: {{ max - comment.length }}
      </p>
    </div>

    <Button type="submit">Опубликовать</Button>
  </form>
</template>

<script>
import "./assets/styles/normalizer.css";
import "mosha-vue-toastify/dist/style.css";

import Button from "./components/Button.vue";
import List from "./components/List.vue";
import { createToast } from "mosha-vue-toastify";

export default {
  name: "App",
  components: {
    Button,
    List,
  },
  data() {
    return {
      name: "",
      comment: "",
      max: 200,
      posts: [
        {
          id: 1,
          name: "Гость",
          comment: "Пример тестового поста пользователя в гостей книге",
          time: "21.10.2021",
        },
        {
          id: 2,
          name: "Doctor Who",
          comment: "Пример поста Марии",
          time: "22.10.2021",
        },
        {
          id: 3,
          name: "Джон",
          comment: "Пример поста Джона из этого же массива обьектов",
          time: "23.10.2021",
        },
      ],
    };
  },
  computed: {
    total() {
      return `Всего записей: ${this.posts.length}`;
    },
    commentTime() {
      return `${new Date()
        .toISOString()
        .split("T")[0]
        .split("-")
        .reverse()
        .join(".")} (${new Date().toString().split(" ")[4]})`;
    },
  },
  methods: {
    onSubmit() {
      this.posts.push({
        id: new Date().valueOf(),
        name: this.name,
        comment: this.comment,
        time: this.commentTime,
      });

      createToast("Ваша запись успешно добавлена", {
        showIcon: true,
        timeout: 2000,
        position: "top-center",
        type: "success",
        transition: "zoom",
      });

      this.reset();
    },
    reset() {
      this.name = "";
      this.comment = "";
    },
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
  scrollbar-color: #25272a #f0f1f3;
  scrollbar-width: thin;
}

*::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

*::-webkit-scrollbar-thumb {
  background-color: #25272a;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #43464e;
}

*::-webkit-scrollbar-track {
  background-color: #f0f1f3;
}

* {
  outline-color: #fb6624;
}

p,
ul,
li,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
}

textarea {
  max-width: 100%;
  resize: vertical;
}

body {
  background: linear-gradient(45deg, #f17c58, #eb722c, #ffdc18, #ff3706);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui,
    helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif;
  color: #2c3e50;

  padding: 50px;
  background-color: #fff;
  margin: 50px;
  border-radius: 50px;
}

.title {
  margin-bottom: 10px;
}

.center {
  text-align: center;
}

.preview {
  /* padding: 10px; */
}

.preview__comment {
  white-space: pre-line;

  transition: opacity 250ms linear;
  opacity: 0.5;
}

.preview__comment:hover,
.preview__comment:focus {
  transition: opacity 250ms linear;
  opacity: 1;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
