<template>
  <div class="preview">
    <p class="preview__title">Предпросмотр:</p>
    <p v-if="name" class="preview__name">
      Имя: <b>{{ name }}</b>
    </p>
    <p v-if="comment" class="preview__comment">Сообщение: {{ comment }}</p>
  </div>
</template>

<script>
export default {
  name: "CommentPreview",
  props: {
    name: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.preview {
  padding: 10px;

  user-select: none;

  transition: opacity 250ms linear;
  opacity: 0.5;

  cursor: default;
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
</style>