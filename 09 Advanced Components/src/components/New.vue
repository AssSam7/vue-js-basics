<template>
  <div>
    <h1>New</h1>
    <button @click="counter++">Click</button>
    {{ counter }}
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      counter: 0,
    };
  },
  activated() {
    console.log("Activated!");
  },
  deactivated() {
    console.log("Deactivated!");
  },
};
</script>

<style scoped>
</style>
