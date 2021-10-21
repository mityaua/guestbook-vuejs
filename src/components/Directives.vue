// Директивы v-if, v-show, v-for (по массиву и даже обьекту!), v-for + v-if

<template>
  <h2 v-if="isVisible">Directives</h2>
  <h3 v-show="false">Show</h3>

  <ul>
    <li v-for="user in users" v-bind:key="user.name">
      <p>{{ `${user.name}: ${user.comment}` }}</p>
    </li>
  </ul>

  <ul>
    <template v-for="user in users">
      <li v-if="user.name === 'Alex'" v-bind:key="user.name">
        {{ user.name }}
      </li>
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
      users: [
        { name: "Alex", comment: "Hello" },
        { name: "Maria", comment: "World" },
        { name: "John", comment: "Buy" },
      ],
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