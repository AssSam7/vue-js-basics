// Declaring a new Component
Vue.component("my-cmp", {
  data() {
    return {
      status: "Critical",
    };
  },
  template: "<p>Server status: {{ status }}</p>",
});

new Vue({
  el: "#app",
});
