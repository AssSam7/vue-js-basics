new Vue({
  el: "#app",
  data: {
    name: "Aslam Mohammed",
    title: "Hello",
    link: "https://www.google.com",
  },
  methods: {
    displayTitle() {
      this.title = "Hello World";
      return `${this.title}`;
    },
  },
});
