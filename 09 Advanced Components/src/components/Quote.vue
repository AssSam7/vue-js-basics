<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
    </div>

    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  margin: 3rem auto;
  padding: 3rem;
  border: 1px solid crimson;
  border-radius: 10px;
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.title {
  font-style: italic;
}
</style>
