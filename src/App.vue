<template>
  <h1 class="center">Гостевая книга</h1>

  <p class="center">{{ total }}</p>

  <List v-bind:posts="posts" />

  <fieldset class="center">
    <legend>Добавьте ваш комментарий в гостевую книгу</legend>

    <form>
      <label>
        Ваше имя:
        <input type="text" v-model.trim="name" required />
      </label>

      <br /><br />

      <textarea
        cols="35"
        rows="5"
        placeholder="Введите текст сообщения..."
        v-model.trim="comment"
        required
      ></textarea>

      <p v-if="comment">Предпросмотр:</p>
      <p v-if="name">Публикация от имени: {{ name }}</p>
      <p class="preview">{{ comment }}</p>

      <Button type="button" @click="submit">Опубликовать</Button>
    </form>
  </fieldset>

  <Counter />
</template>

<script>
import "./assets/styles/normalizer.css";

import Button from "./components/Button.vue";
import List from "./components/List.vue";
import Counter from "./components/Counter.vue";

export default {
  name: "App",
  components: {
    Button,
    List,
    Counter,
  },
  data() {
    return {
      name: "",
      comment: "",
      posts: [
        {
          name: "Гость",
          comment: "Пример тестового поста пользователя в гостей книге",
        },
        {
          name: "Мария",
          comment: "Пример поста Марии",
        },
        {
          name: "Джон",
          comment: "Пример поста Джона из этого же массива обьектов",
        },
      ],
    };
  },
  computed: {
    total() {
      return `Всего записей в гостевой книге: ${this.posts.length}`;
    },
  },
  methods: {
    submit(event) {
      if (event) {
        event.preventDefault();
        console.log(event);

        this.posts.push({ name: this.name, comment: this.comment });
        alert("Ваша запись успешно добавлена");

        this.reset();
      }
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
  scrollbar-color: #f47c20 #f0f1f3;
  scrollbar-width: thin;
}

*::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

*::-webkit-scrollbar-thumb {
  background-color: #f47c20;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #43464e;
}

*::-webkit-scrollbar-track {
  background-color: #f0f1f3;
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

#app {
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui,
    helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif;
  color: #2c3e50;
}

.center {
  text-align: center;
}

.preview {
  white-space: pre-line;
  opacity: 0.5;
}
</style>
