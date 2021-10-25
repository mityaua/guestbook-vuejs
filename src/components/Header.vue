<template>
  <header class="header">
    <h1 class="title"><slot></slot></h1>
    <p>Всего записей: {{ allPostsCount }}</p>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",
  computed: mapGetters(["allPostsCount"]),
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