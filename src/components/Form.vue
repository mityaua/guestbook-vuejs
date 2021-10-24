<template>
  <form @submit.prevent="onSubmit" class="form">
    <input
      type="text"
      class="form__name"
      placeholder="Ваше имя..."
      title="Имя может быть от 2 до 40 символов"
      v-model.lazy.trim="name"
      pattern=".{2,40}"
      maxlength="40"
      spellcheck="false"
      required
    />

    <textarea
      cols="50"
      rows="4"
      placeholder="Введите текст сообщения..."
      title="Длинна сообщения от 2 до 200 символов"
      v-model.trim="comment"
      required
      :minlength="min"
      :maxlength="max"
      class="textarea__comment"
    ></textarea>

    <CommentLength :max="max" :comment="comment" />
    <CommentPreview :name="name" :comment="comment" />
    <Button type="submit">Опубликовать</Button>
  </form>
</template>

<script>
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
  props: {
    addPost: { type: Function, required: true },
  },
  data() {
    return {
      name: "",
      comment: "",
      min: 2,
      max: 200,
    };
  },
  methods: {
    onSubmit() {
      const newPost = {
        id: new Date().valueOf(),
        name: this.name,
        comment: this.comment,
        time: `${new Date()
          .toISOString()
          .split("T")[0]
          .split("-")
          .reverse()
          .join(".")} (${new Date().toString().split(" ")[4]})`,
      };

      this.addPost(newPost);
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