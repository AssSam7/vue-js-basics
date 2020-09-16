new Vue({
  el: "#app",
  data: {
    name: "Aslam Mohammed",
    title: `Hello`,
    link: "https://www.google.com",
  },
  methods: {
    displayTitle() {
      return `${this.title} ${this.name}`;
    },
  },
});
