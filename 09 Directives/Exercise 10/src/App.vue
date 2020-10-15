<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives Exercise</h1>
        <!-- Exercise -->
        <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
        <button v-con:click="showAlert">Alert</button>
        <div
          style="width: 200px; height: 200px; background-color: teal"
          v-con:mouseenter="mouseEnter"
          v-con:mouseleave="mouseLeave"
        >
          A div container
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showAlert() {
      alert("Hello there!");
    },
    mouseEnter(event) {
      console.log(`Mouse entered at ${event.clientX}`);
    },
    mouseLeave(event) {
      console.log(`Mouse left at ${event.clientX}`);
    },
  },
  directives: {
    con: {
      bind(el, binding) {
        el.addEventListener(binding.arg, binding.value);
      },
    },
  },
};
</script>

<style></style>
