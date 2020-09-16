new Vue({
  el: "#app",
  data: {
    name: "Aslam Mohammed",
    title: "Hello",
    link: "https://www.google.com",
    linkHTML: `<a href="https://www.linkedin.com">Linkedin</a>`,
  },
  methods: {
    displayTitle() {
      this.title = "Hello World";
      return `${this.title}`;
    },
  },
});
