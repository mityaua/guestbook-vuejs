<template>
  <div class="center">
    <h2>{{ title }}</h2>
    <Button type="button" @click="increment(5)">Increment</Button>
    <Button type="reset" @click="reset" outlined>Reset</Button>
    <Button type="button" @click="decrement(1, $event)">Decrement</Button>
    <Directives />
  </div>
</template>

<script>
import Button from "./Button.vue";
import Directives from "./Directives.vue";

export default {
  name: "Counter",
  components: {
    Button,
    Directives,
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

<style scoped>
.center {
  text-align: center;
}
</style>
