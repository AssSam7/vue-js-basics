// Declaring a new Component
const comp = {
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
};

new Vue({
  el: "#app1",
  components: {
    "my-cmp": comp,
  },
});

new Vue({
  el: "#app2",
});
