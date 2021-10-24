<template>
  <button :type="type" :class="{ btn: true, 'btn--outlined': outlined }">
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
      required: true,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.btn {
  display: inline-block;
  min-width: 100px;
  padding: 15px;
  border: 1px solid #fff;
  border-radius: 30px;

  background: linear-gradient(90deg, #fb6624, #ff8a2d);
  color: #fff;

  font-size: 1rem;
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

.btn--outlined {
  background: none;
  border: 2px solid #f47c20;
  color: #f47c20;
}
</style>