import Vue from "vue";
import App from "./App.vue";

Vue.directive("highlight", {
  bind(el, binding, vnode) {
    // el.style.color = "red";
    // el.style.color = binding.value;
    if (binding.arg == "background") {
      el.style.backgroundColor = binding.value;
    } else {
      el.style.color = binding.value;
    }
  },
});

new Vue({
  el: "#app",
  render: (h) => h(App),
});
