<template>
  <form @submit.prevent="submit" class="form">
    <input
      :title="nameTitle"
      :placeholder="namePlaceholder"
      v-model.lazy.trim="name"
      type="text"
      class="form__name"
      pattern=".{2,40}"
      maxlength="40"
      spellcheck="false"
      required
    />

    <textarea
      :title="textAreaTitle"
      :placeholder="textAreaPlaceholder"
      :minlength="min"
      :maxlength="max"
      v-model.trim="comment"
      cols="50"
      rows="4"
      class="textarea__comment"
      required
    ></textarea>

    <CommentLength :max="max" :comment="comment" />
    <CommentPreview :name="name" :comment="comment" />
    <Button type="submit">Опубликовать</Button>
  </form>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import { createToast } from "mosha-vue-toastify";

import CommentLength from "./CommentLength.vue";
import CommentPreview from "./CommentPreview.vue";
import Button from "./Button.vue";

export default {
  name: "Form",
  components: {
    CommentLength,
    CommentPreview,
    Button,
  },
  data() {
    return {
      name: "",
      comment: "",
      min: 2,
      max: 200,
      nameTitle: "Имя может быть от 2 до 40 символов",
      namePlaceholder: "Ваше имя...",
      textAreaTitle: "Длинна сообщения от 2 до 200 символов",
      textAreaPlaceholder: "Введите текст сообщения...",
    };
  },
  methods: {
    ...mapMutations(["createPost"]),
    ...mapActions(["setPosts"]),
    submit() {
      if (this.name === "" || this.comment === "") return;

      const newPost = {
        id: new Date().valueOf(),
        name: this.name,
        comment: this.comment,
        date: new Date()
          .toISOString()
          .split("T")[0]
          .split("-")
          .reverse()
          .join("."),
        time: new Date().toString().split(" ")[4],
      };

      this.createPost(newPost);
      this.setPosts();

      createToast("Запись успешно добавлена", {
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

<style scoped>
.form {
  position: relative;
  margin: 0 auto;
  padding-top: 20px;
  max-width: 400px;

  text-align: center;
}

.form__name {
  margin-bottom: 15px;
  border: 2px solid rgb(44, 62, 80, 0.3);
  border-radius: 10px;
  padding: 5px;

  font: inherit;
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
</style>