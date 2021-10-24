<template>
  <header class="header">
    <h1 class="title">Гостевая книга</h1>
    <p>{{ total }}</p>
  </header>

  <main>
    <Posts :posts="posts" />
    <hr />
    <Form :addPost="addPost" />
  </main>
</template>

<script>
import "./assets/styles/normalizer.css";
import "mosha-vue-toastify/dist/style.css";

import Posts from "./components/Posts.vue";
import Form from "./components/Form.vue";
import { createToast } from "mosha-vue-toastify";

export default {
  name: "App",
  components: {
    Posts,
    Form,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          name: "Гость",
          comment: "Пример тестового поста пользователя в гостей книге",
          time: "21.10.2021",
        },
        {
          id: 2,
          name: "Kiwi",
          comment:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          time: "22.10.2021",
        },
        {
          id: 3,
          name: "Parrot 66",
          comment:
            "Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной 'рыбой' для текстов на латинице с начала XVI века.",
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
    async addPost(post) {
      try {
        await this.posts.push(post); // Якобы асинхронщина

        createToast("Ваша запись успешно добавлена", {
          showIcon: true,
          timeout: 2000,
          position: "top-center",
          type: "success",
          transition: "zoom",
        });
      } catch (error) {
        console.error(error);
      }
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
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui,
    helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif;
  font-size: 16px;

  color: #2c3e50;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;

  animation: gradient 15s ease infinite;
}

#app {
  padding: 10px;
  margin: 10px;
  border-radius: 50px;

  background-color: #fff;
}

@media screen and (min-width: 768px) {
  #app {
    padding: 50px;
    margin: 50px;
  }
}

.header {
  text-align: center;
}

.title {
  margin-bottom: 10px;
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
