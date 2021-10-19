<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{ title }}</h1>
  <Counter />
  <!-- Тип для v-bind и текст в слот -->
  <Button type="button" @click="increment">Click me</Button>
</template>

<script>
import Counter from "./components/Counter.vue";
import Button from "./components/Button.vue";

export default {
  name: "App",
  components: {
    Counter,
    Button,
  },
  data() {
    return {
      amountOfClicks: 2021,
    };
  },
  computed: {
    title() {
      return `Amount of clicks ${this.amountOfClicks}`;
    },
  },
  methods: {
    increment() {
      this.amountOfClicks += 1;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
