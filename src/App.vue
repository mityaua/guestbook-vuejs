<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{ title }}</h1>
  <Button type="button" @click="increment(5)">Increment</Button>
  <Button type="reset" @click="reset">Reset</Button>
  <Button type="button" @click="decrement(1, $event)">Decrement</Button>
</template>

<script>
import Button from "./components/Button.vue";

export default {
  name: "App",
  components: {
    Button,
  },
  data() {
    return {
      total: 0,
    };
  },
  computed: {
    title() {
      return `Check this awesome counter: ${this.total}`;
    },
  },
  methods: {
    increment(n) {
      this.total += n;
    },
    decrement(n, event) {
      if (this.total > 0) {
        this.total -= n;
        console.log(event);
      } else {
        alert("Ниже ноля не уменьшить");
        console.log(event);
      }
    },
    reset() {
      if (this.total !== 0) {
        this.total = 0;
        alert("Счетчик будет обнулен");
      }
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
