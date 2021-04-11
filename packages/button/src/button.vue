<template>
  <div>
    <button @click.prevent="handleClick"><slot></slot></button>
  </div>
</template>

<script>
export default {
  name: "LgButton",
  methods: {
    handleClick(event) {
      this.$emit("click", event);
    },
  },
};
</script>

<style>
</style>