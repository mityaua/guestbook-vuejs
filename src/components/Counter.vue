// Компонент счётчика с датой, событиями клика и двумя методами на кнопках

<template>
  <p>
    Counter: <b>{{ total }}</b>
  </p>
  <button type="button" @click="Increment" class="btn">Increment</button>
  <button type="button" @click="Decrement" class="btn">Decrement</button>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      total: 0,
    };
  },
  methods: {
    Increment() {
      this.total = this.total += 1;
    },
    Decrement() {
      this.total = this.total -= 1;
    },
  },
};
</script>

<style>
.btn {
  margin-right: 10px;
  padding: 15px;
  border: 1px solid transparent;

  background-color: #1ec074;

  text-transform: uppercase;

  opacity: 1;
  transition: opacity 250ms linear;

  cursor: pointer;
}

.btn:hover,
.btn:focus {
  opacity: 0.8;
  transition: opacity 250ms linear;
}
</style>