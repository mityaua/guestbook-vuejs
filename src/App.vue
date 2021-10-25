<template>
  <Header>Гостевая книга</Header>

  <main>
    <Posts v-if="allPostsCount" />
    <FallBack v-else>😮 Книга пустая. Добавьте первую запись!</FallBack>
    <hr />
    <Form />
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import "./assets/styles/normalizer.css";
import "mosha-vue-toastify/dist/style.css";

import Header from "./components/Header.vue";
import FallBack from "./components/FallBack.vue";
import Posts from "./components/Posts.vue";
import Form from "./components/Form.vue";

export default {
  name: "App",
  components: {
    Header,
    FallBack,
    Posts,
    Form,
  },
  mounted() {
    this.getPosts();
    this.setPosts();
  },
  computed: mapGetters(["allPosts", "allPostsCount"]),
  methods: mapActions(["getPosts", "setPosts"]),
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
  font-size: 1rem;
  line-height: normal;

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
