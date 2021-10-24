<template>
  <header class="header">
    <h1 class="title"><slot></slot></h1>
    <p>{{ totalPostCount }}</p>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    totalPostCount: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.header {
  text-align: center;
}

.title {
  margin-bottom: 10px;
}
</style>