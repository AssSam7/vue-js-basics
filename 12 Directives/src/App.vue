<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built-in Directives</h1>
        <span v-text="'Hello there'" v-highlight="'green'"></span>
        <p v-html="'<div>Hello this is a div</div>'"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
