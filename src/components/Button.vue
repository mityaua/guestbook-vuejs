// Компонент кнопки с привязкой типа, слотом, именем компонента, пропсами (type)

<template>
  <button v-bind:type="type">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "button",
      // required: true, // Если нужно сделать проп обязательным
    },
  },
};
</script>

<style>
</style>