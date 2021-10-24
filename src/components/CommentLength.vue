<template>
  <div>
    <span v-if="comment" class="length">{{ commentLength }}</span>
  </div>
</template>

<script>
export default {
  name: "CommentLength",
  props: {
    max: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  computed: {
    commentLength() {
      return this.max - this.comment.length;
    },
  },
};
</script>

<style scoped>
.length {
  position: absolute;
  right: -9px;
  top: 58px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  color: #2c3e50;
  background-color: #c5c7ce;
  border-radius: 50%;
  user-select: none;
}
</style>