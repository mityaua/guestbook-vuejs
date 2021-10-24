<template>
  <header>
    <h1 class="title center">Гостевая книга</h1>
    <p class="center">{{ total }}</p>
  </header>

  <main>
    <List v-bind:posts="posts" />

    <hr />

    <form @submit.prevent="onSubmit" class="form center">
      <label>
        Ваше имя:
        <input
          type="text"
          class="form__name"
          title="Имя может быть от 2 до 40 символов"
          v-model.lazy.trim="name"
          pattern=".{2,40}"
          maxlength="40"
          spellcheck="false"
          required
        />
      </label>

      <br /><br />

      <textarea
        cols="50"
        rows="4"
        placeholder="Введите текст сообщения..."
        title="Длинна сообщения от 2 до 200 символов"
        v-model.trim="comment"
        required
        v-bind:minlength="min"
        v-bind:maxlength="max"
        class="textarea__comment"
      ></textarea>

      <div>
        <span v-if="comment" class="textarea__length">{{
          max - comment.length
        }}</span>
      </div>

      <div class="preview">
        <p class="preview__title">Предпросмотр:</p>
        <p v-if="name" class="preview__name">
          Имя: <b>{{ name }}</b>
        </p>
        <p v-if="comment" class="preview__comment">Сообщение: {{ comment }}</p>
      </div>

      <Button type="submit">Опубликовать</Button>
    </form>
  </main>
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
      min: 2,
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
  },
  methods: {
    onSubmit() {
      this.posts.push({
        id: new Date().valueOf(),
        name: this.name,
        comment: this.comment,
        time: `${new Date()
          .toISOString()
          .split("T")[0]
          .split("-")
          .reverse()
          .join(".")} (${new Date().toString().split(" ")[4]})`,
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

body {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui,
    helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif;
  color: #2c3e50;

  padding: 10px;
  background-color: #fff;
  margin: 10px;
  border-radius: 50px;
}

@media screen and (min-width: 768px) {
  #app {
    padding: 50px;
    margin: 50px;
  }
}

.title {
  margin-bottom: 10px;
}

.center {
  text-align: center;
}

.form {
  position: relative;
  margin: 0 auto;
  padding-top: 20px;
  max-width: 400px;
}

.form__name {
  border: 2px solid rgb(44, 62, 80, 0.3);
  border-radius: 10px;
  padding: 5px;
}

.form__name:focus:invalid {
  outline: 2px solid #f73d3d;
}

.form__name:focus:valid {
  outline: 2px solid #40ae00;
}

.textarea__comment {
  max-width: 100%;
  border: 2px solid rgb(44, 62, 80, 0.3);
  border-radius: 10px;
  padding: 15px;
  resize: vertical;
}

.textarea__length {
  position: absolute;
  right: -10px;
  top: 60px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  color: #2c3e50;
  background-color: #b6b9c2;
  border-radius: 50%;
}

.preview {
  padding: 10px;

  transition: opacity 250ms linear;
  opacity: 0.5;
}

.preview:hover,
.preview:focus {
  transition: opacity 250ms linear;
  opacity: 1;
}

.preview__title {
  margin-bottom: 10px;
}

.preview__name {
  margin-bottom: 10px;
  word-break: break-word;
}

.preview__comment {
  margin-bottom: 10px;
  white-space: pre-line;
  word-break: break-word;
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
