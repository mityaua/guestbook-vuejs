<template>
  <p>
    Counter: <b>{{ total }}</b>
  </p>
  <button type="button" @click="total += 1" class="btn">Increment</button>
  <button type="button" @click="total -= 1" class="btn">Decrement</button>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      total: 0,
    };
  },
};
</script>

<style>
.btn {
  margin-right: 10px;
  padding: 15px;
  background-color: #1ec074;
  border: 1px solid transparent;
  cursor: pointer;
}
.btn:hover,
.btn:focus {
  opacity: 0.8;
}
</style>