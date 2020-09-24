// Declaring a new Component
Vue.component("my-cmp", {
  data() {
    return {
      status: "Critical",
    };
  },
  template:
    "<p>Server status: {{ status }} <button @click='changeStatus'>Change</button></p>",
  methods: {
    changeStatus() {
      this.status = "Normal";
    },
  },
});

new Vue({
  el: "#app",
});
