// Директивы v-if, v-show, v-for (по массиву и даже обьекту!), v-for + v-if

<template>
  <h2 v-if="isVisible">Directives</h2>
  <h3 v-show="false">Show</h3>

  <ul>
    <li v-for="fruit in fruits" v-bind:key="fruit">{{ fruit }}</li>
  </ul>

  <ul>
    <template v-for="fruit in fruits">
      <li v-if="fruit === 'kiwi'" v-bind:key="fruit">{{ fruit }}</li>
    </template>
  </ul>

  <ul>
    <li v-for="(car, key) in cars" v-bind:key="key">{{ key }}</li>
  </ul>
</template>

<script>
export default {
  name: "Directives",
  data() {
    return {
      isVisible: true,
      fruits: ["mango", "kiwi", "poly"],
      cars: {
        lexus: {
          color: "red",
        },
        audi: {
          color: "white",
        },
      },
    };
  },
};
</script>

<style>
</style>