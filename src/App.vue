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
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
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
